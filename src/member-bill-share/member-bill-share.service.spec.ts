import { Test, TestingModule } from '@nestjs/testing';
import { MemberBillShareService } from './member-bill-share.service';

describe('MemberBillShareService', () => {
  let service: MemberBillShareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberBillShareService],
    }).compile();

    service = module.get<MemberBillShareService>(MemberBillShareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
