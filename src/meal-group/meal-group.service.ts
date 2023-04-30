import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MealGroup } from './meal-group.entity';
import { Repository } from 'typeorm';
import { CreateMealGroupDto } from './dto/create-meal-group.dto';
import { MealGroupMember } from './meal-group-member.entity';
import { CreateMealGroupMemberDto } from './dto/create-meal-group-member.dto';

@Injectable()
export class MealGroupService {
  constructor(
    @InjectRepository(MealGroup)
    private readonly mealGroupRepository: Repository<MealGroup>,
    @InjectRepository(MealGroupMember)
    private readonly mealGroupMemberRepository: Repository<MealGroupMember>,
  ) {}

  async getUserMealGroups(userId: string): Promise<MealGroup[]> {
    return this.mealGroupRepository.find({
      where: {
        createdById: userId,
      },
    });
  }

  async createUserMealGroup(
    userId: string,
    userMealGroup: CreateMealGroupDto,
  ): Promise<MealGroup> {
    return this.mealGroupRepository.save({
      ...userMealGroup,
      createdById: userId,
    });
  }

  async getMealGroupMembers(mealGroupId: string): Promise<MealGroupMember[]> {
    return this.mealGroupMemberRepository.find({
      where: {
        mealGroupId,
      },
      relations: ['member'],
    });
  }

  async createMealGroupMember(
    mealGroupId: string,
    mealGroupMember: CreateMealGroupMemberDto,
  ): Promise<MealGroupMember> {
    return this.mealGroupMemberRepository.save({
      ...mealGroupMember,
      mealGroupId,
    });
  }
}
