import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { Member } from './member.entity';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
export class MemberController {
  constructor(private memberService: MemberService) {}

  @Get()
  async getMembers(): Promise<Member[]> {
    return this.memberService.getMembers();
  }

  @Get(':memberId')
  async getMember(@Param('memberId') memberId: string): Promise<Member> {
    return this.memberService.getMemberById(memberId);
  }

  @Post()
  async createMember(@Body() member: CreateMemberDto): Promise<Member> {
    return this.memberService.createMember(member);
  }

  @Put(':memberId')
  async updateMember(
    @Param('memberId') memberId: string,
    @Body() memberUpdates: UpdateMemberDto,
  ): Promise<Member> {
    return this.memberService.updateMember(memberId, memberUpdates);
  }
}
