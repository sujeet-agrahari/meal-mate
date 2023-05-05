import { Member } from 'src/member/member.entity';
import { OrderDishShare } from '../order-dish-share.entity';
import { Dish } from 'src/dish/dish.entity';
import { PartialType } from '@nestjs/swagger';

export class OrderDishShareResponseDto extends PartialType(OrderDishShare) {
  members: Member[];
  dish: Dish;
}
