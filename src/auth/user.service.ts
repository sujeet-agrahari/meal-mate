import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   *Finds an User entity based on the provided id.
   *@param id - User id.
   *@returns A Promise that resolves to an User entity if one is found.
   */
  async getUserById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  /**
   *Finds an User entity based on the provided email.
   *@param email - User email.
   *@returns A Promise that resolves to an User entity if one is found.
   * @throws BadRequestException if the user not found
   */
  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      relations: ['member'],
    });

    return user;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }
}
