import { type ArithmeticData } from "./types.js";

export interface ProblemSpec {
  "addition-single-digit-no-carry": { data: ArithmeticData; answer: number };
  "addition-single-digit-carry": { data: ArithmeticData; answer: number };
}
export type ProblemId = keyof ProblemSpec;
