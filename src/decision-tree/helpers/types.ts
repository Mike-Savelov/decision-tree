import { ActionOperator } from '../action-operator.service';

export interface Condition {
  code: string;
  trueBranch?: Branch;
  falseBranch?: Branch;
}

export interface Branch {
  actions?: Action[];
  condition?: Condition;
}

// This type describes the signatures of methods that are allowed in the Operator class
type MethodSignature<T> = (data: T) => void;

// This type extracts all methods from Oprator
export type Method = keyof ActionOperator;

// This map describes all Operator methods and types of their data parameter
export type MethodParamMap = { [K in Method]: Parameter<K> };

// This map type describes method signatures to make it callable with the given method name and data
export type MethodSignatureMap = {
  [K in Method]: MethodSignature<MethodParamMap[K]>;
};

export type Action<T extends Method = Method> = {
  [K in T]: { type: K } & MethodParamMap[K];
}[T];

//
// --------------------- technical -------------------------
//

// This type extracts data type from the parameter of a given Operator method
type Parameter<T extends Method> = Parameters<ActionOperator[T]>[0];
