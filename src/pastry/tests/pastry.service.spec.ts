import { Test, TestingModule } from '@nestjs/testing';
import { PastryService } from '../services/pastry.service';

describe('PastryService', () => {
  let service: PastryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PastryService],
    }).compile();

    service = module.get<PastryService>(PastryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
