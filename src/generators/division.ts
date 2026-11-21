import type { Problem } from "../types.js";
import { randomInteger, type Rng } from "../random.js";

export function by2345Or10(
  rng: Rng = Math.random,
): Problem<"division-by-2-3-4-5-10"> {
  const divisor = [2, 3, 4, 5, 10][randomInteger(0, 4, rng)];
  const quotient = randomInteger(1, 10, rng);

  return {
    id: "division-by-2-3-4-5-10",
    data: { a: divisor * quotient, b: divisor },
    answer: quotient,
  };
}

export function by6789(rng: Rng = Math.random): Problem<"division-by-6-7-8-9"> {
  const divisor = randomInteger(6, 9, rng);
  const quotient = randomInteger(1, 10, rng);

  return {
    id: "division-by-6-7-8-9",
    data: { a: divisor * quotient, b: divisor },
    answer: quotient,
  };
}

export function twoDigitByOneDigitRemainder(
  rng: Rng = Math.random,
): Problem<"division-2digit-by-1digit-remainder"> {
  const b = randomInteger(2, 9, rng);
  const a = randomInteger(10, 99, rng);

  return {
    id: "division-2digit-by-1digit-remainder",
    data: { a, b },
    answer: a % b,
  };
}

export function threeDigitByOneDigit(
  rng: Rng = Math.random,
): Problem<"division-3digit-by-1digit"> {
  const b = randomInteger(2, 9, rng);
  const min = Math.ceil(100 / b);
  const max = Math.floor(999 / b);
  const quotient = randomInteger(min, max, rng);

  return {
    id: "division-3digit-by-1digit",
    data: { a: b * quotient, b },
    answer: quotient,
  };
}

export function fourDigitByTwoDigit(
  rng: Rng = Math.random,
): Problem<"division-4digit-by-2digit"> {
  const b = randomInteger(11, 19, rng);
  const quotient = randomInteger(
    Math.ceil(1000 / b),
    Math.floor(9999 / b),
    rng,
  );

  return {
    id: "division-4digit-by-2digit",
    data: { a: b * quotient, b },
    answer: quotient,
  };
}
