import { Type } from 'class-transformer';
import { Equals, IsNumber, IsString, ValidateNested } from 'class-validator';
import { BranchDTO } from '../branch.dto';

export class LoopActionDTO {
  @Equals('executeLoop')
  type: 'executeLoop';

  @IsString()
  name: string;

  @IsNumber()
  iterations: number;

  @ValidateNested()
  @Type(() => BranchDTO)
  loopBranch: BranchDTO;
}
