import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MealGroupService } from './meal-group.service';
import { MealGroup } from './meal-group.entity';
import { CreateMealGroupDto } from './dto/create-meal-group.dto';
import { CreateMealGroupMemberDto } from './dto/create-meal-group-member.dto';
import { MealGroupMember } from './meal-group-member.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtGuard)
@Controller('users/:userId/meal-groups')
export class MealGroupController {
  constructor(private readonly mealGroupService: MealGroupService) {}

  @Get()
  async getUserMealGroups(
    @Param('userId') userId: string,
  ): Promise<MealGroup[]> {
    return this.mealGroupService.getUserMealGroups(userId);
  }

  @Post()
  async createUserMealGroup(
    @Param('userId') userId: string,
    @Body() userMealGroup: CreateMealGroupDto,
  ): Promise<MealGroup> {
    return this.mealGroupService.createUserMealGroup(userId, userMealGroup);
  }

  @Get('/:mealGroupId/members')
  async getMealGroupMembers(
    @Param('mealGroupId') mealGroupId: string,
  ): Promise<MealGroupMember[]> {
    return this.mealGroupService.getMealGroupMembers(mealGroupId);
  }

  @Post('/:mealGroupId/members')
  async creaetMealGroupMember(
    @Param('mealGroupId') mealGroupId: string,
    @Body() mealGroupMember: CreateMealGroupMemberDto,
  ): Promise<MealGroupMember> {
    return this.mealGroupService.createMealGroupMember(
      mealGroupId,
      mealGroupMember,
    );
  }
}
