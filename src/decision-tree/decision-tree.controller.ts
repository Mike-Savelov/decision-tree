import { Body, Controller, Get, Post } from '@nestjs/common';
import { BranchDTO } from './dto/branch.dto';
import { DecisionTreeService } from './decision-tree.service';
import { Branch } from './helpers/types';

@Controller('decision-tree')
export class DecisionTreeController {
  constructor(private readonly service: DecisionTreeService) {}

  @Post('')
  async executeTree(@Body() tree: BranchDTO): Promise<string> {
    return this.service.executeBranch(tree);
  }
}
