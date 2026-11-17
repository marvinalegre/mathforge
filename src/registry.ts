import type { ProblemId } from "./spec.js";
import type { Problem } from "./types.js";
import type { Rng } from "./random.js";
import {
  singleDigitNoCarry,
  singleDigitWithCarry,
} from "./generators/addition.js";

export type Generator<K extends ProblemId> = (rng?: Rng) => Problem<K>;

export const registry: { [K in ProblemId]: Generator<K> } = {
  "addition-single-digit-no-carry": singleDigitNoCarry,
  "addition-single-digit-carry": singleDigitWithCarry,
};
