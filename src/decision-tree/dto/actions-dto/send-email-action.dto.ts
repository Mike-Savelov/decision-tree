import { Equals, IsString } from 'class-validator';

export class SendEmailActionDTO {
  @Equals('sendEmail')
  type: 'sendEmail';

  @IsString()
  name: string;

  @IsString()
  sender: string;

  @IsString()
  receiver: string;
}
