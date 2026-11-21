import type { ProblemId } from "./spec.js";
import type { Problem } from "./types.js";
import type { Rng } from "./random.js";
import * as addition from "./generators/addition.js";
import * as subtraction from "./generators/subtraction.js";
import * as multiplication from "./generators/multiplication.js";
import * as division from "./generators/division.js";

export type Generator<K extends ProblemId> = (rng?: Rng) => Problem<K>;

export const registry: { [K in ProblemId]: Generator<K> } = {
  "addition-single-digit-no-carry": addition.singleDigitNoCarry,
  "addition-single-digit-carry": addition.singleDigitWithCarry,
  "addition-single-double-digit-under-20": addition.doubleDigitUnder20,
  "addition-double-digit-under-100": addition.doubleDigitUnder100,
  "addition-two-digit-three-digit": addition.twoDigitThreeDigit,
  "addition-two-digit-four-digit": addition.twoDigitFourDigit,
  "addition-four-digit-four-digit": addition.fourDigitFourDigit,
  "addition-four-digit-five-digit": addition.fourDigitFiveDigit,
  "addition-four-digit-six-digit": addition.fourDigitSixDigit,
  "subtraction-single-digit-no-borrow": subtraction.singleDigitNoBorrow,
  "subtraction-double-single-digit-under-20":
    subtraction.doubleSingleDigitUnder20,
  "subtraction-double-digit-under-100": subtraction.doubleDigitUnder100,
  "subtraction-two-digit-three-digit": subtraction.twoDigitThreeDigit,
  "subtraction-two-digit-four-digit": subtraction.twoDigitFourDigit,
  "subtraction-four-digit-four-digit": subtraction.fourDigitFourDigit,
  "subtraction-four-digit-five-digit": subtraction.fourDigitFiveDigit,
  "subtraction-four-digit-six-digit": subtraction.fourDigitSixDigit,
  "multiplication-by-2-3-4-5-10": multiplication.by2345Or10,
  "multiplication-by-6-7-8-9": multiplication.by6789,
  "multiplication-product-up-to-1-million":
    multiplication.productUpToOneMillion,
  "division-by-2-3-4-5-10": division.by2345Or10,
  "division-by-6-7-8-9": division.by6789,
  "division-2digit-by-1digit-remainder": division.twoDigitByOneDigitRemainder,
  "division-3digit-by-1digit": division.threeDigitByOneDigit,
  "division-4digit-by-2digit": division.fourDigitByTwoDigit,
};
