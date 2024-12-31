import { Type } from 'class-transformer';
import { IsString, IsOptional, ValidateNested, IsDefined, ValidateIf } from 'class-validator';
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

  // Validate that either trueBranch or falseBranch exists
  @ValidateIf((o) => !o.trueBranch && !o.falseBranch)
  @IsDefined({ message: 'Provide either trueBranch or falseBranch' })
  private readonly oneOfBranchesShouldExist: undefined;
}
