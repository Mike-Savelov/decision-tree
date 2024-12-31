import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { BranchDTO } from './branch.dto';

export class ConditionDTO {
  @IsString()
  code: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => BranchDTO)
  trueBranch?: BranchDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => BranchDTO)
  falseBranch?: BranchDTO;
}
