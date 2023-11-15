import { Test, TestingModule } from '@nestjs/testing';
import { PastryController } from '../controllers/pastry.controller';

describe('PastryController', () => {
  let controller: PastryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PastryController],
    }).compile();

    controller = module.get<PastryController>(PastryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
