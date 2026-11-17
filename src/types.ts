import { type ProblemSpec } from "./spec.js";

/** Data for two-operand arithmetic problems. */
export interface ArithmeticData {
  a: number;
  b: number;
}

export type ProblemId = keyof ProblemSpec;

export type Problem<K extends ProblemId = ProblemId> = {
  [P in K]: {
    id: P;
    data: ProblemSpec[P]["data"];
    answer: ProblemSpec[P]["answer"];
  };
}[K];
