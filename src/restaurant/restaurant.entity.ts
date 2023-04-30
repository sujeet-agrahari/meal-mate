import { Dish } from 'src/dish/dish.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ unique: true, length: 10, type: 'varchar' })
  phone: string;

  @Column()
  website: string;

  @Column()
  description: string;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 1,
    nullable: false,
    default: 0,
  })
  rating: number;

  @OneToMany(() => Dish, (dish) => dish.restaurant)
  dishes: Dish[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
