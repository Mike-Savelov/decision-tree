import { Branch } from './types';

export interface SendSMSData {
  name: string;
  phone: string;
}
export interface SendEmailData {
  name: string;
  sender: string;
  receiver: string;
}
export interface executeLoop {
  name: string;
  iterations: number;
  loopBranch: Branch;
}
