import { Body, Controller, Post } from '@nestjs/common';
import { BranchDTO } from './dto/branch.dto';
import { DecisionTreeService } from './decision-tree.service';

@Controller('decision-tree')
export class DecisionTreeController {
  constructor(private readonly service: DecisionTreeService) {}

  @Post('')
  async executeTree(@Body() tree: BranchDTO): Promise<string> {
    return this.service.executeBranch(tree);
  }
}
