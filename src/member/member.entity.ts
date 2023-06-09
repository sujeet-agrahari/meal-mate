import { User } from 'src/auth/user.entity';
import { MealGroupMember } from 'src/meal-group/meal-group-member.entity';
import { MemberBillShare } from 'src/member-bill-share/member-bill-share.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  userId: string;

  // Define one-to-one relation with User
  @OneToOne(() => User, (user) => user.member)
  @JoinColumn()
  user: User;

  @OneToMany(() => MealGroupMember, (mealGroupMember) => mealGroupMember.member)
  mealGroups: MealGroupMember[];

  @OneToMany(() => MemberBillShare, (memberBillShare) => memberBillShare.member)
  memberBillShares: MemberBillShare[];

  @Column()
  name: string;

  @Column({ unique: true, length: 10, type: 'varchar' })
  phone: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ nullable: true })
  isVeg: boolean;

  @CreateDateColumn()
  joiningDate: Date;
}
