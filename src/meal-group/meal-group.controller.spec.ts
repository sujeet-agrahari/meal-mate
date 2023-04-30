import { Test, TestingModule } from '@nestjs/testing';
import { MealGroupController } from './meal-group.controller';

describe('MealGroupController', () => {
  let controller: MealGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealGroupController],
    }).compile();

    controller = module.get<MealGroupController>(MealGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
