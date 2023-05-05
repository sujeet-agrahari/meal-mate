import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderDish } from './order-dish.entity';
import { Member } from 'src/member/member.entity';

@Entity()
export class OrderDishShare {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  orderDishId: string;

  @ManyToOne(() => OrderDish, (orderDish) => orderDish.orderDishShares)
  orderDish: OrderDish;

  @Column({ type: 'uuid' })
  memberId: string;

  @ManyToOne(() => Member)
  member: Member;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
