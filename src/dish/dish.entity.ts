import { Restaurant } from 'src/restaurant/restaurant.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false })
  price: number;

  @Column()
  isVeg: boolean;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 1,
    nullable: false,
    default: 0,
  })
  rating: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.dishes)
  restaurant: Restaurant;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
