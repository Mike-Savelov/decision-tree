import { Equals, IsString } from 'class-validator';

export class SendSMSActionDTO {
  @Equals('sendSMS')
  type: 'sendSMS';

  @IsString()
  name: string;

  @IsString()
  phone: string;
}
