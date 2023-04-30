import { Member } from 'src/member/member.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MealGroup } from './meal-group.entity';

@Entity()
export class MealGroupMember {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => MealGroup, (mealGroup) => mealGroup.members, {
    onDelete: 'CASCADE',
  })
  mealGroup: MealGroup;

  @Column()
  mealGroupId: string;

  @Column({ nullable: true })
  memberId: string;

  @ManyToOne(() => Member, (member) => member.mealGroups, {
    onDelete: 'CASCADE',
  })
  member: Member;

  @Column({ default: false })
  isRemoved: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
