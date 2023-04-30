import { PartialType } from '@nestjs/swagger';
import { CreateMealGroupDto } from './create-meal-group.dto';

export class UpdateMealGroupDto extends PartialType(CreateMealGroupDto) {}
