import { registry } from "./registry.js";
import type { ProblemId } from "./spec.js";
import type { Problem } from "./types.js";
import type { Rng } from "./random.js";

export type { ProblemId, ProblemSpec } from "./spec.js";
export type * from "./types.js";

export function forge<K extends ProblemId>(id: K, rng?: Rng): Problem<K> {
  const generator = registry[id];
  if (!generator) throw new Error(`Unknown problem: ${id}`);
  return generator(rng);
}

export function ids(): ProblemId[] {
  return Object.keys(registry) as ProblemId[];
}
