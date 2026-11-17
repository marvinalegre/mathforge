import type { Problem } from "../types.js";
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
