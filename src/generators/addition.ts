import type { Problem, ProblemId } from "../types.js";
import { randomInteger, type Rng } from "../random.js";

export function singleDigitNoCarry(
  rng: Rng = Math.random,
): Problem<"addition-single-digit-no-carry"> {
  // Both single digits, each 0–9, sum at most 9 so there is no carry.
  // Starting at 1 keeps the problem from being trivially zero.
  const a = randomInteger(1, 8, rng);
  const b = randomInteger(1, 9 - a, rng);

  return {
    id: "addition-single-digit-no-carry",
    data: { a, b },
    answer: a + b,
  };
}

export function singleDigitWithCarry(
  rng: Rng = Math.random,
): Problem<"addition-single-digit-carry"> {
  const a = randomInteger(1, 9, rng);
  const b = randomInteger(10 - a, 9, rng);

  return {
    id: "addition-single-digit-carry",
    data: { a, b },
    answer: a + b,
  };
}

export function doubleDigitUnder20(
  rng: Rng = Math.random,
): Problem<"addition-single-double-digit-under-20"> {
  const a = randomInteger(1, 9, rng);
  const b = randomInteger(10, 19 - a, rng);

  return {
    id: "addition-single-double-digit-under-20",
    data: { a, b },
    answer: a + b,
  };
}

export function doubleDigitUnder100(
  rng: Rng = Math.random,
): Problem<"addition-double-digit-under-100"> {
  const a = randomInteger(10, 89, rng);
  const b = randomInteger(10, 99 - a, rng);

  return {
    id: "addition-double-digit-under-100",
    data: { a, b },
    answer: a + b,
  };
}

export function twoDigitThreeDigit(
  rng: Rng = Math.random,
): Problem<"addition-two-digit-three-digit"> {
  return addition("addition-two-digit-three-digit", 2, 3, rng);
}

export function twoDigitFourDigit(
  rng: Rng = Math.random,
): Problem<"addition-two-digit-four-digit"> {
  return addition("addition-two-digit-four-digit", 2, 4, rng);
}

export function fourDigitFourDigit(
  rng: Rng = Math.random,
): Problem<"addition-four-digit-four-digit"> {
  return addition("addition-four-digit-four-digit", 4, 4, rng);
}

export function fourDigitFiveDigit(
  rng: Rng = Math.random,
): Problem<"addition-four-digit-five-digit"> {
  return addition("addition-four-digit-five-digit", 4, 5, rng);
}

export function fourDigitSixDigit(
  rng: Rng = Math.random,
): Problem<"addition-four-digit-six-digit"> {
  return addition("addition-four-digit-six-digit", 4, 6, rng);
}

function addition<K extends ProblemId>(
  id: K,
  digitsA: number,
  digitsB: number,
  rng: Rng,
): Problem<K> {
  const min = (digits: number) => 10 ** (digits - 1);
  const max = (digits: number) => 10 ** digits - 1;

  const n1 = randomInteger(min(digitsA), max(digitsA), rng);
  const n2 = randomInteger(min(digitsB), max(digitsB), rng);
  const [a, b] = randomOrder(n1, n2, rng);

  return {
    id,
    data: { a, b },
    answer: a + b,
  };
}

function randomOrder(a: number, b: number, rng: Rng): [number, number] {
  return rng() > 0.5 ? [a, b] : [b, a];
}
