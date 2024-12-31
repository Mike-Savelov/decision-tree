import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { DecisionTreeService } from './decision-tree.service';
import { SendSMSData, SendEmailData, executeLoop } from './helpers/interfaces';

@Injectable()
export class ActionOperator {
  constructor(
    @Inject(forwardRef(() => DecisionTreeService))
    private readonly service: DecisionTreeService,
  ) {}

  sendSMS(data: SendSMSData): string {
    const { name, phone } = data;
    return `${name}: Sending SMS to ${phone} \n`;
  }

  sendEmail(data: SendEmailData): string {
    const { name, sender, receiver } = data;
    return `${name}: Sending Email from ${sender} to ${receiver} \n`;
  }

  executeLoop(data: executeLoop): string {
    const { name, iterations, loopBranch } = data;

    let res = `Executing loop ${iterations} times \n`;
    for (let i = 0; i < iterations; i++) {
      res += this.service.executeBranch(loopBranch);
    }
    return `${res} \n`;
  }
}
