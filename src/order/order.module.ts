import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderDishService } from './order-dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderDish } from './order-dish.entity';
import { OrderDishShare } from './order-dish-share.entity';
import { OrderDishShareService } from './order-dish-share.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDish, OrderDishShare])],
  controllers: [OrderController],
  providers: [OrderService, OrderDishService, OrderDishShareService],
  exports: [OrderService],
})
export class OrderModule {}
