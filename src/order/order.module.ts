import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderDishService } from './order-dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderDish } from './order-dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderDish])],
  controllers: [OrderController],
  providers: [OrderService, OrderDishService],
})
export class OrderModule {}
