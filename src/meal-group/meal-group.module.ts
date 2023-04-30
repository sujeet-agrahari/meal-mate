import { Module } from '@nestjs/common';
import { MealGroupController } from './meal-group.controller';
import { MealGroupService } from './meal-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealGroup } from './meal-group.entity';
import { MealGroupMember } from './meal-group-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealGroup, MealGroupMember])],
  controllers: [MealGroupController],
  providers: [MealGroupService],
})
export class MealGroupModule {}
