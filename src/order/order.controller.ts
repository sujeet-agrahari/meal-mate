import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { OrderDish } from './order-dish.entity';
import { OrderDishService } from './order-dish.service';
import { CreateOrderDishDto } from './dto/create-order-dish.dto';
import { OrderDishShare } from './order-dish-share.entity';
import { OrderDishShareService } from './order-dish-share.service';
import { CreateOrderDishShareDto } from './dto/create-order-dish-share.dto';
import { OrderDishShareResponseDto } from './dto/order-dish-share-response.dto';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly orderDishService: OrderDishService,
    private readonly orderDishShareService: OrderDishShareService,
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
  async orderDish(
    @Param('orderId') orderId: string,
    @Body() orderDish: CreateOrderDishDto,
  ): Promise<OrderDish> {
    return this.orderDishService.createOrderDish(orderId, orderDish);
  }

  @Post('/:orderId/dishes/:dishId/members')
  async createDishSharedMembers(
    @Param('orderId') orderId: string,
    @Param('dishId') dishId: string,
    @Body() orderDishShare: CreateOrderDishShareDto,
  ): Promise<OrderDishShare[]> {
    return this.orderDishShareService.createDishSharedMembers(
      orderId,
      dishId,
      orderDishShare,
    );
  }

  @Get('/:orderId/dishes/:dishId/members')
  async getDishSharedMembers(
    @Param('orderId') orderId: string,
    @Param('dishId') dishId: string,
  ): Promise<OrderDishShareResponseDto> {
    return this.orderDishShareService.getDishSharedMembers(orderId, dishId);
  }
}
