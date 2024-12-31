import { Test, TestingModule } from '@nestjs/testing';
import { DecisionTreeController } from './decision-tree.controller';

describe('DecisionTreeController', () => {
  let controller: DecisionTreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecisionTreeController],
    }).compile();

    controller = module.get<DecisionTreeController>(DecisionTreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
