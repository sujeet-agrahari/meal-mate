import { Test, TestingModule } from '@nestjs/testing';
import { MemberBillShareController } from './member-bill-share.controller';

describe('MemberBillShareController', () => {
  let controller: MemberBillShareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberBillShareController],
    }).compile();

    controller = module.get<MemberBillShareController>(MemberBillShareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
