import { Member } from 'src/member/member.entity';
import { Order } from 'src/order/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MemberBillShare {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  orderId: string;

  @Column({ type: 'uuid' })
  memberId: string;

  @ManyToOne(() => Member, (member) => member.memberBillShares)
  member: Member;

  @OneToOne(() => Order)
  order: Order;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  share: number;

  @Column({ type: 'boolean', default: false })
  isPaid: boolean;

  @Column({ type: 'timestamp' })
  paidOn: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
