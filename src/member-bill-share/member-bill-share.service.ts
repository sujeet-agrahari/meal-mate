import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MemberBillShare } from './member-bill-share.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/order/order.entity';

@Injectable()
export class MemberBillShareService {
  constructor(
    @InjectRepository(MemberBillShare)
    private readonly memberBillShareRepository: Repository<MemberBillShare>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async calculateMembersBillShare(orderId: string): Promise<any> {
    return this.orderRepository.findOne({
      where: {
        id: orderId,
      },
      relations: [
        'mealGroup',
        'orderBill',
        'orderDishes',
        'orderDishes.dish',
        'orderDishes.orderDishShares',
        'orderDishes.orderDishShares.member',
      ],
    });
  }
}
