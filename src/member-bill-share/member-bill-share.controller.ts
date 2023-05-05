import { Controller, Param, Post } from '@nestjs/common';
import { MemberBillShareService } from './member-bill-share.service';

@Controller('orders/:orderId/bill-shares')
export class MemberBillShareController {
  constructor(
    private readonly memberBillShareService: MemberBillShareService,
  ) {}
  @Post()
  async getMembersBillShare(@Param('orderId') orderId: string) {
    return this.memberBillShareService.getMembersBillShare(orderId);
  }
}
