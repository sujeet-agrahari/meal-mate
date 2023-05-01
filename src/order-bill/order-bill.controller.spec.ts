import { Test, TestingModule } from '@nestjs/testing';
import { OrderBillController } from './order-bill.controller';

describe('OrderBillController', () => {
  let controller: OrderBillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderBillController],
    }).compile();

    controller = module.get<OrderBillController>(OrderBillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
