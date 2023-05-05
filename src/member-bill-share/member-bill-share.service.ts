import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MemberBillShare } from './member-bill-share.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class MemberBillShareService {
  constructor(
    @InjectRepository(MemberBillShare)
    private readonly memberBillShareRepository: Repository<MemberBillShare>,
    private readonly orderService: OrderService,
  ) {}

  async getMembersBillShare(orderId: string): Promise<any> {
    const order = await this.orderService.getOrder(orderId);
  }
}
