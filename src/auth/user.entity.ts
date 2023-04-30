import { MealGroup } from 'src/meal-group/meal-group.entity';
import { Member } from 'src/member/member.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Define one-to-one relation with Member
  @OneToOne(() => Member, (member) => member.user)
  member: Member;

  @OneToMany(() => MealGroup, (mealGroup) => mealGroup.createdBy)
  mealGroups: MealGroup[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
