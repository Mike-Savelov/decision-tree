import { Module } from '@nestjs/common';
import { DecisionTreeController } from './decision-tree.controller';
import { DecisionTreeService } from './decision-tree.service';
import { ActionOperator } from './action-operator.service';

@Module({
  controllers: [DecisionTreeController],
  providers: [DecisionTreeService, ActionOperator],
})
export class DecisionTreeModule {}
