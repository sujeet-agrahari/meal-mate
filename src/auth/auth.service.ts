import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordService } from './password.service';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { Member } from 'src/member/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private readonly memberService: MemberService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Registers a new user.
   *
   * @async
   * @function registerUser
   * @param {CreateUserDto} user - The user data to register.
   * @throws {BadRequestException} Throws a BadRequestException if the user is already registered or if the phone number is already registered with another account.
   * @returns {Promise<User>} A Promise that resolves with the created user.
   */

  async registerUser(user: CreateUserDto): Promise<User> {
    const { email, member } = user;

    // Check if user already exists and is a member
    const existingUser = await this.userService.getUserByEmail(email);
    if (existingUser?.member) {
      throw new BadRequestException('User already registered, please login!');
    }

    // Check if the phone number is already registered with another user
    const existingMember = await this.memberService.getMemberByPhone(
      member.phone,
    );
    if (existingMember?.userId && existingMember.userId !== existingUser?.id) {
      throw new BadRequestException(
        'The phone number is already registered with another account.',
      );
    }

    let createdUser: User;

    if (existingUser) {
      // If user exists but not a member, create a new member for the user
      const createdMember = await this.memberRepository.save({
        ...member,
        userId: existingUser.id,
      });
      existingUser.member = createdMember;
      return existingUser;
    } else if (existingMember) {
      // If member exists but not a user, create a new user for the member
      createdUser = await this.userService.createUser(user);
      existingMember.userId = createdUser.id;
      await this.memberRepository.save(existingMember);
    } else {
      // If neither user nor member exists, create both
      createdUser = await this.userService.createUser(user);
      member.userId = createdUser.id;
      createdUser.member = await this.memberService.createMember(member);
    }

    return createdUser;
  }

  async validateUser(email: string, password: string): Promise<User> {
    const existingUser = await this.userService.getUserByEmail(email);
    if (!existingUser) {
      throw new NotFoundException('Account not found');
    }
    if (
      !(await this.passwordService.comparePassword(
        password,
        existingUser.password,
      ))
    ) {
      return null;
    }
    return existingUser;
  }

  async loginUser(userAuth: User) {
    const payload = { email: userAuth.email, sub: userAuth.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
