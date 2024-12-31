import { Injectable } from '@nestjs/common';
import { Branch, Action, Method, MethodSignatureMap } from './helpers/types';
import { ActionOperator } from './action-operator.service';

@Injectable()
export class DecisionTreeService {
  constructor(private readonly operator: ActionOperator) {}

  executeBranch(branch: Branch): string {
    let res: string = '';

    let currentBranch = branch;

    while (true) {
      const { actions, condition } = currentBranch;
      const { code, trueBranch, falseBranch } = condition || {};

      if (actions) {
        for (const action of actions) {
          res += this.executeAction(action);
        }
      }

      if (condition) {
        try {
          // TODO: code needs to be checked for evil injections...
          currentBranch = eval(code) ? trueBranch : falseBranch;
          continue;
        } catch (error) {
          return res + `Error evaluating condition: ${code} \n `;
        }
      }

      return res;
    }
  }

  executeAction<K extends Method>(action: Action<K>) {
    const { type } = action;
    return (this.operator as MethodSignatureMap)[type](action);
  }
}
