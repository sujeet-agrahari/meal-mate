import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Dish } from 'src/dish/dish.entity';
import { OrderDishShare } from './order-dish-share.entity';

@Entity()
export class OrderDish {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  orderId: string;

  @ManyToOne(() => Order, (order) => order.orderDishes)
  order: Order;

  @Column()
  dishId: string;

  @ManyToOne(() => Dish)
  dish: Dish;

  @OneToMany(
    () => OrderDishShare,
    (orderDishShare) => orderDishShare.orderDishes,
  )
  orderDishShares: OrderDishShare[];

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
