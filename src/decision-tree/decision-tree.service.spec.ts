import { Test, TestingModule } from '@nestjs/testing';
import { DecisionTreeService } from './decision-tree.service';

describe('DecisionTreeService', () => {
  let service: DecisionTreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecisionTreeService],
    }).compile();

    service = module.get<DecisionTreeService>(DecisionTreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
