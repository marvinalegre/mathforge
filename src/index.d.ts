/** A dot position with coordinates in the range 0 to 1. */
export interface Dot {
  x: number;
  y: number;
}

/** Data for alphabet sequence problems. */
export interface SequenceData {
  /** Space-separated letters ending with "_", e.g. "a c e g _". */
  sequence: string;
}

/** Data for two-operand arithmetic problems. */
export interface ArithmeticData {
  a: number;
  b: number;
}

/** Data for dot-counting problems. */
export interface DotsData {
  dots: Dot[];
}

/** Data for the ordinal problem. */
export interface OrdinalData {
  n: number;
  /** 0 asks for the position before `n`, 1 for the position after. */
  direction: 0 | 1;
}

/** Data for the place-value problem. */
export interface PlaceValueData {
  number: number;
  digit: number;
}

/** Data for the two-coin-type counting problem. */
export interface CoinsData {
  ones: number;
  fives: number;
  tens: number;
}

/** Data for the money counting problem. */
export interface MoneyData extends CoinsData {
  fifties: number;
}

/** A generated problem. */
export interface Problem<TData, TAnswer> {
  data: TData;
  answer: TAnswer;
}

/** Maps each problem ID to its data and answer types. */
export interface ProblemMap {
  "alphabet-fibonacci": Problem<SequenceData, string>;
  "alphabet-symmetry": Problem<SequenceData, string>;
  "alphabet-interleaved-constant-step": Problem<SequenceData, string>;
  "alphabet-alternating-direction": Problem<SequenceData, string>;
  "alphabet-alternating-step": Problem<SequenceData, string>;
  "alphabet-decreasing-step": Problem<SequenceData, string>;
  "alphabet-increasing-step": Problem<SequenceData, string>;
  "alphabet-repeating-cycle": Problem<SequenceData, string>;
  "alphabet-constant-reverse-step": Problem<SequenceData, string>;
  "alphabet-constant-step": Problem<SequenceData, string>;

  "addition-single-digit-no-carry": Problem<ArithmeticData, number>;
  "addition-single-digit-carry": Problem<ArithmeticData, number>;
  "addition-single-double-digit-under-20": Problem<ArithmeticData, number>;
  "addition-double-digit-under-100": Problem<ArithmeticData, number>;
  "addition-two-digit-three-digit": Problem<ArithmeticData, number>;
  "addition-two-digit-four-digit": Problem<ArithmeticData, number>;
  "addition-four-digit-four-digit": Problem<ArithmeticData, number>;
  "addition-four-digit-five-digit": Problem<ArithmeticData, number>;
  "addition-four-digit-six-digit": Problem<ArithmeticData, number>;

  "subtraction-single-digit-no-borrow": Problem<ArithmeticData, number>;
  "subtraction-double-single-digit-under-20": Problem<ArithmeticData, number>;
  "subtraction-double-digit-under-100": Problem<ArithmeticData, number>;
  "subtraction-two-digit-three-digit": Problem<ArithmeticData, number>;
  "subtraction-two-digit-four-digit": Problem<ArithmeticData, number>;
  "subtraction-four-digit-four-digit": Problem<ArithmeticData, number>;
  "subtraction-four-digit-five-digit": Problem<ArithmeticData, number>;
  "subtraction-four-digit-six-digit": Problem<ArithmeticData, number>;

  "multiplication-by-2-3-4-5-10": Problem<ArithmeticData, number>;
  "multiplication-by-6-7-8-9": Problem<ArithmeticData, number>;
  "multiplication-product-up-to-1-million": Problem<ArithmeticData, number>;

  "division-by-2-3-4-5-10": Problem<ArithmeticData, number>;
  "division-by-6-7-8-9": Problem<ArithmeticData, number>;
  "division-2digit-by-1digit-remainder": Problem<ArithmeticData, number>;
  "division-3digit-by-1digit": Problem<ArithmeticData, number>;
  "division-4digit-by-2digit": Problem<ArithmeticData, number>;

  "count-10-random-dots": Problem<DotsData, number>;
  "count-20-random-dots": Problem<DotsData, number>;
  "count-20-50-dots-in-columns": Problem<DotsData, number>;

  "ordinal-before-after-10": Problem<OrdinalData, string>;
  "place-value-2-digit": Problem<PlaceValueData, "tens" | "ones">;
  "count-coins-20": Problem<CoinsData, number>;
  "count-money-100": Problem<MoneyData, number>;
}

/** Any valid problem ID. */
export type ProblemId = keyof ProblemMap;

/**
 * Generates a problem for the given ID.
 * Throws an Error if the ID is unknown.
 */
export function forge<K extends ProblemId>(id: K): ProblemMap[K];

/** Returns all available problem IDs. */
export function ids(): ProblemId[];
