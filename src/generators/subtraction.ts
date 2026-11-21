import type { Problem, ProblemId } from "../types.js";
import { randomInteger, type Rng } from "../random.js";

export function singleDigitNoBorrow(
  rng: Rng = Math.random,
): Problem<"subtraction-single-digit-no-borrow"> {
  const a = randomInteger(1, 9, rng);
  const b = randomInteger(1, a, rng);

  return {
    id: "subtraction-single-digit-no-borrow",
    data: { a, b },
    answer: a - b,
  };
}

export function doubleSingleDigitUnder20(
  rng: Rng = Math.random,
): Problem<"subtraction-double-single-digit-under-20"> {
  // b must exceed the ones digit of a, so the subtraction requires a borrow.
  const a = randomInteger(11, 18, rng);
  const b = randomInteger((a % 10) + 1, 9, rng);

  return {
    id: "subtraction-double-single-digit-under-20",
    data: { a, b },
    answer: a - b,
  };
}

export function doubleDigitUnder100(
  rng: Rng = Math.random,
): Problem<"subtraction-double-digit-under-100"> {
  const a = randomInteger(11, 99, rng);
  const b = randomInteger(10, a, rng);

  return {
    id: "subtraction-double-digit-under-100",
    data: { a, b },
    answer: a - b,
  };
}

export function twoDigitThreeDigit(
  rng: Rng = Math.random,
): Problem<"subtraction-two-digit-three-digit"> {
  return subtraction("subtraction-two-digit-three-digit", 2, 3, rng);
}

export function twoDigitFourDigit(
  rng: Rng = Math.random,
): Problem<"subtraction-two-digit-four-digit"> {
  return subtraction("subtraction-two-digit-four-digit", 2, 4, rng);
}

export function fourDigitFourDigit(
  rng: Rng = Math.random,
): Problem<"subtraction-four-digit-four-digit"> {
  return subtraction("subtraction-four-digit-four-digit", 4, 4, rng);
}

export function fourDigitFiveDigit(
  rng: Rng = Math.random,
): Problem<"subtraction-four-digit-five-digit"> {
  return subtraction("subtraction-four-digit-five-digit", 4, 5, rng);
}

export function fourDigitSixDigit(
  rng: Rng = Math.random,
): Problem<"subtraction-four-digit-six-digit"> {
  return subtraction("subtraction-four-digit-six-digit", 4, 6, rng);
}

function subtraction<K extends ProblemId>(
  id: K,
  digitsA: number,
  digitsB: number,
  rng: Rng,
): Problem<K> {
  const min = (digits: number) => 10 ** (digits - 1);
  const max = (digits: number) => 10 ** digits - 1;

  const n1 = randomInteger(min(digitsA), max(digitsA), rng);
  const n2 = randomInteger(min(digitsB), max(digitsB), rng);
  const [a, b] = n1 >= n2 ? [n1, n2] : [n2, n1];

  return {
    id,
    data: { a, b },
    answer: a - b,
  };
}
