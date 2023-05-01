import { Test, TestingModule } from '@nestjs/testing';
import { OrderBillService } from './order-bill.service';

describe('OrderBillService', () => {
  let service: OrderBillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBillService],
    }).compile();

    service = module.get<OrderBillService>(OrderBillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
