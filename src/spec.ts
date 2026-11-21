import { type ArithmeticData } from "./types.js";

interface ArithmeticProblem {
  data: ArithmeticData;
  answer: number;
}

export interface ProblemSpec {
  "addition-single-digit-no-carry": ArithmeticProblem;
  "addition-single-digit-carry": ArithmeticProblem;
  "addition-single-double-digit-under-20": ArithmeticProblem;
  "addition-double-digit-under-100": ArithmeticProblem;
  "addition-two-digit-three-digit": ArithmeticProblem;
  "addition-two-digit-four-digit": ArithmeticProblem;
  "addition-four-digit-four-digit": ArithmeticProblem;
  "addition-four-digit-five-digit": ArithmeticProblem;
  "addition-four-digit-six-digit": ArithmeticProblem;
  "subtraction-single-digit-no-borrow": ArithmeticProblem;
  "subtraction-double-single-digit-under-20": ArithmeticProblem;
  "subtraction-double-digit-under-100": ArithmeticProblem;
  "subtraction-two-digit-three-digit": ArithmeticProblem;
  "subtraction-two-digit-four-digit": ArithmeticProblem;
  "subtraction-four-digit-four-digit": ArithmeticProblem;
  "subtraction-four-digit-five-digit": ArithmeticProblem;
  "subtraction-four-digit-six-digit": ArithmeticProblem;
  "multiplication-by-2-3-4-5-10": ArithmeticProblem;
  "multiplication-by-6-7-8-9": ArithmeticProblem;
  "multiplication-product-up-to-1-million": ArithmeticProblem;
  "division-by-2-3-4-5-10": ArithmeticProblem;
  "division-by-6-7-8-9": ArithmeticProblem;
  "division-2digit-by-1digit-remainder": ArithmeticProblem;
  "division-3digit-by-1digit": ArithmeticProblem;
  "division-4digit-by-2digit": ArithmeticProblem;
}
export type ProblemId = keyof ProblemSpec;
