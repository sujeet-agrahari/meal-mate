import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderDish } from './order-dish.entity';
import { OrderDishService } from './order-dish.service';
import { CreateOrderDishDto } from './dto/create-order-dish.dto';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly orderDishService: OrderDishService,
  ) {}

  @Post()
  async createOrder(@Body() order: CreateOrderDto): Promise<Order> {
    return this.orderService.createOrder(order);
  }

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string): Promise<Order> {
    return this.orderService.getOrder(orderId);
  }

  @Post('/:orderId/dishes')
  async orderDish(@Body() orderDish: CreateOrderDishDto): Promise<OrderDish> {
    return this.orderDishService.createOrderDish(orderDish);
  }
}
