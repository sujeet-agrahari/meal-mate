import { Order } from 'src/order/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AmountType } from './types/discount.type';

@Entity()
export class OrderBill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  orderId: string;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  mealCharges: number;

  @Column({ type: 'enum', enum: AmountType, default: AmountType.PERCENTAGE })
  serviceChargeType: AmountType;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  serviceCharge: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  tip: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  tax: number;

  @Column({ type: 'enum', enum: AmountType, default: AmountType.PERCENTAGE })
  discountType: AmountType;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  discount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  netAmount: number;

  @Column({ type: 'uuid' })
  paidBy: string;

  @Column({ nullable: true })
  paymentMethod: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
