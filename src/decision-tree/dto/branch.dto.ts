import { IsOptional, ValidateNested, IsArray, IsDefined, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { ConditionDTO } from './condition.dto';
import { LoopActionDTO } from './actions-dto/loop-action.dto';
import { SendEmailActionDTO } from './actions-dto/send-email-action.dto';
import { SendSMSActionDTO } from './actions-dto/send-sms-action.dto';
import { Action } from '../helpers/types';

type ActionDTO = SendSMSActionDTO | SendEmailActionDTO | LoopActionDTO;

export class BranchDTO {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => null, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: SendSMSActionDTO, name: 'sendSMS' },
        { value: SendEmailActionDTO, name: 'sendEmail' },
        { value: LoopActionDTO, name: 'executeLoop' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  actions?: ActionDTO[];

  @IsOptional()
  @ValidateNested()
  @Type(() => ConditionDTO)
  condition?: ConditionDTO;

  // Validate that either actions or condition exists
  @ValidateIf((o) => !o.actions && !o.condition)
  @IsDefined({ message: 'Provide either actions or condition' })
  private readonly actionsOrConditionShouldExist: undefined;
}
