import type { Problem } from "../types.js";
import { randomInteger, type Rng } from "../random.js";

export function by2345Or10(
  rng: Rng = Math.random,
): Problem<"multiplication-by-2-3-4-5-10"> {
  const a = randomInteger(1, 10, rng);
  const b = [2, 3, 4, 5, 10][randomInteger(0, 4, rng)];

  return {
    id: "multiplication-by-2-3-4-5-10",
    data: { a, b },
    answer: a * b,
  };
}

export function by6789(
  rng: Rng = Math.random,
): Problem<"multiplication-by-6-7-8-9"> {
  const a = randomInteger(1, 10, rng);
  const b = randomInteger(6, 9, rng);

  return {
    id: "multiplication-by-6-7-8-9",
    data: { a, b },
    answer: a * b,
  };
}

export function productUpToOneMillion(
  rng: Rng = Math.random,
): Problem<"multiplication-product-up-to-1-million"> {
  const a = randomInteger(1, 1000, rng);
  const b = randomInteger(1, Math.floor(1_000_000 / a), rng);

  return {
    id: "multiplication-product-up-to-1-million",
    data: { a, b },
    answer: a * b,
  };
}
