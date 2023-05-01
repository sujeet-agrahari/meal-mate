import { Module } from '@nestjs/common';
import { MemberBillShareController } from './member-bill-share.controller';
import { MemberBillShareService } from './member-bill-share.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberBillShare } from './member-bill-share.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberBillShare])],
  controllers: [MemberBillShareController],
  providers: [MemberBillShareService],
})
export class MemberBillShareModule {}
