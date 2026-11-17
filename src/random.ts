export type Rng = () => number;

export function randomInteger(
  min: number,
  max: number,
  rng: Rng = Math.random,
): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}
