import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  async getMembers(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  async createMember(member: CreateMemberDto): Promise<Member> {
    return this.memberRepository.save(member);
  }

  async getMemberById(memberId: string): Promise<Member> {
    return this.memberRepository.findOne({
      where: {
        id: memberId,
      },
    });
  }

  async getMemberByPhone(phone: string): Promise<Member> {
    return this.memberRepository.findOne({
      where: {
        phone,
      },
    });
  }

  async updateMember(
    memberId: string,
    memberUpdates: UpdateMemberDto,
  ): Promise<Member> {
    const member = await this.getMemberById(memberId);
    if (!member) {
      throw new NotFoundException('Member not found');
    }
    Object.assign(member, memberUpdates);
    return this.memberRepository.save(member);
  }
}
