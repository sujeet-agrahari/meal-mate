import { Test, TestingModule } from '@nestjs/testing';
import { MealGroupService } from './meal-group.service';

describe('MealGroupService', () => {
  let service: MealGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealGroupService],
    }).compile();

    service = module.get<MealGroupService>(MealGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
