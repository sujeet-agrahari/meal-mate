import { MealGroup } from 'src/meal-group/meal-group.entity';
import { Restaurant } from 'src/restaurant/restaurant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderDish } from './order-dish.entity';
import { OrderBill } from 'src/order-bill/order-bill.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  mealGroupId: string;

  @ManyToOne(() => MealGroup)
  mealGroup: MealGroup;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant)
  restaurant: Restaurant;

  @OneToMany(() => OrderDish, (orderDish) => orderDish.order)
  orderDishes: OrderDish[];

  @OneToOne(() => OrderBill, (orderBill) => orderBill.order)
  orderBill: OrderBill;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  orderDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
