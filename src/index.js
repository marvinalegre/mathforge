const generators = {
  "alphabet-fibonacci": () => {
    const gaps = [1, 1, 2, 3, 5];
    const maxStart = 25 - gaps.reduce((sum, gap) => sum + gap + 1, 0);
    const start = randomInteger(0, maxStart);

    const sequence = [start];

    for (let i = 0; i < 4; i++) {
      sequence.push(sequence.at(-1) + gaps[i] + 1);
    }

    const answer = sequence.at(-1) + gaps[4] + 1;

    return {
      data: {
        sequence: [
          ...sequence.map((n) => String.fromCharCode(97 + n)),
          "_",
        ].join(" "),
      },
      answer: String.fromCharCode(97 + answer),
    };
  },
  "alphabet-symmetry": () => {
    const step = randomInteger(1, 3);
    const center = randomInteger(step * 4, 25 - step * 4);

    const sequence = Array.from(
      { length: 7 },
      (_, i) => center - Math.abs(4 - i) * step,
    );

    return {
      data: {
        sequence: [
          ...sequence.map((n) => String.fromCharCode(97 + n)),
          "_",
        ].join(" "),
      },
      answer: String.fromCharCode(97 + center - step * 3),
    };
  },
  "alphabet-interleaved-constant-step": () => {
    const step1 = randomInteger(1, 3);
    const step2 = randomInteger(1, 3);

    const start1 = randomInteger(0, 25 - step1 * 3);
    const start2 = randomInteger(0, 25 - step2 * 2);

    const sequence = [
      start1,
      start2,
      start1 + step1,
      start2 + step2,
      start1 + step1 * 2,
      start2 + step2 * 2,
    ];

    const answer = start1 + step1 * 3;

    return {
      data: {
        sequence: [...sequence, "_"]
          .map((n) => (n === "_" ? n : String.fromCharCode(97 + n)))
          .join(" "),
      },
      answer: String.fromCharCode(97 + answer),
    };
  },
  "alphabet-alternating-direction": () => {
    const step = randomInteger(1, 3);
    const start = randomInteger(step, 25 - step);

    const sequence = [start];

    for (let i = 0; i < 4; i++) {
      sequence.push(sequence.at(-1) + (i % 2 === 0 ? step : -step));
    }

    return {
      data: {
        sequence: sequence
          .map((n) => String.fromCharCode(97 + n))
          .concat("_")
          .join(" "),
      },
      answer: String.fromCharCode(97 + sequence.at(-1) + step),
    };
  },
  "alphabet-alternating-step": () => {
    const step1 = randomInteger(1, 3);
    const step2 = randomInteger(1, 3);
    const start = randomInteger(0, 25 - step1 - step2 - step1 - step2 - step1);

    const sequence = [start];

    for (let i = 0; i < 4; i++) {
      sequence.push(sequence.at(-1) + (i % 2 === 0 ? step1 : step2));
    }

    return {
      data: {
        sequence: sequence
          .map((n) => String.fromCharCode(97 + n))
          .concat("_")
          .join(" "),
      },
      answer: String.fromCharCode(97 + sequence.at(-1) + step1),
    };
  },
  "alphabet-decreasing-step": () => {
    const start = randomInteger(20, 25);

    const sequence = Array.from({ length: 5 }, (_, i) =>
      String.fromCharCode(97 + start - (i * (i + 1)) / 2),
    );

    return {
      data: { sequence: [...sequence, "_"].join(" ") },
      answer: String.fromCharCode(97 + start - 15),
    };
  },
  "alphabet-increasing-step": () => {
    const start = randomInteger(0, 5);

    const sequence = Array.from({ length: 5 }, (_, i) =>
      String.fromCharCode(97 + start + (i * (i + 1)) / 2),
    );

    return {
      data: { sequence: [...sequence, "_"].join(" ") },
      answer: String.fromCharCode(97 + start + 15),
    };
  },
  "alphabet-repeating-cycle": () => {
    const cycleLength = randomInteger(2, 3);
    const start = randomInteger(0, 25);

    const cycle = Array.from({ length: cycleLength }, (_, i) =>
      String.fromCharCode(97 + start + i),
    );

    const sequence = Array.from(
      { length: 5 },
      (_, i) => cycle[i % cycleLength],
    );

    return {
      data: { sequence: [...sequence, "_"].join(" ") },
      answer: cycle[5 % cycleLength],
    };
  },
  "alphabet-constant-reverse-step": () => {
    const step = randomInteger(2, 4);
    const start = randomInteger(step * 5, 25);

    const sequence = Array.from({ length: 5 }, (_, i) =>
      String.fromCharCode(97 + start - i * step),
    );

    return {
      data: { sequence: [...sequence, "_"].join(" ") },
      answer: String.fromCharCode(97 + start - 5 * step),
    };
  },
  "alphabet-constant-step": () => {
    const step = randomInteger(2, 4);
    const start = randomInteger(0, 25 - step * 5);

    const sequence = Array.from({ length: 5 }, (_, i) =>
      String.fromCharCode(97 + start + i * step),
    );

    return {
      data: { sequence: [...sequence, "_"].join(" ") },
      answer: String.fromCharCode(97 + start + 5 * step),
    };
  },

  "addition-single-digit-no-carry": () => {
    const a = randomInteger(1, 8);
    const b = randomInteger(1, 9 - a);

    return {
      data: { a, b },
      answer: a + b,
    };
  },
  "addition-single-digit-carry": () => {
    const a = randomInteger(1, 9);
    const b = randomInteger(10 - a, 9);

    return {
      data: { a, b },
      answer: a + b,
    };
  },
  "addition-single-double-digit-under-20": () => {
    const a = randomInteger(1, 9);
    const b = randomInteger(10, 19 - a);

    return {
      data: { a, b },
      answer: a + b,
    };
  },
  "addition-double-digit-under-100": () => {
    const a = randomInteger(10, 89);
    const b = randomInteger(10, 99 - a);

    return {
      data: { a, b },
      answer: a + b,
    };
  },
  "addition-two-digit-three-digit": () => addition(2, 3),
  "addition-two-digit-four-digit": () => addition(2, 4),
  "addition-four-digit-four-digit": () => addition(4, 4),
  "addition-four-digit-five-digit": () => addition(4, 5),
  "addition-four-digit-six-digit": () => addition(4, 6),

  "subtraction-single-digit-no-borrow": () => {
    const a = randomInteger(1, 9);
    const b = randomInteger(1, a);

    return {
      data: { a, b },
      answer: a - b,
    };
  },
  "subtraction-double-single-digit-under-20": () => {
    const a = randomInteger(11, 18);
    const b = randomInteger((a % 10) + 1, 9);

    return {
      data: { a, b },
      answer: a - b,
    };
  },
  "subtraction-double-digit-under-100": () => {
    const a = randomInteger(11, 99);
    const b = randomInteger(10, a);

    return {
      data: { a, b },
      answer: a - b,
    };
  },
  "subtraction-two-digit-three-digit": () => subtraction(2, 3),
  "subtraction-two-digit-four-digit": () => subtraction(2, 4),
  "subtraction-four-digit-four-digit": () => subtraction(4, 4),
  "subtraction-four-digit-five-digit": () => subtraction(4, 5),
  "subtraction-four-digit-six-digit": () => subtraction(4, 6),

  "multiplication-by-2-3-4-5-10": () => {
    const a = randomInteger(1, 10);
    const b = [2, 3, 4, 5, 10][randomInteger(0, 4)];

    return {
      data: { a, b },
      answer: a * b,
    };
  },
  "multiplication-by-6-7-8-9": () => {
    const a = randomInteger(1, 10);
    const b = randomInteger(6, 9);

    return {
      data: { a, b },
      answer: a * b,
    };
  },
  "multiplication-product-up-to-1-million": () => {
    const a = randomInteger(1, 1000);
    const b = randomInteger(1, Math.floor(1_000_000 / a));

    return {
      data: { a, b },
      answer: a * b,
    };
  },

  "division-by-2-3-4-5-10": () => {
    const divisor = [2, 3, 4, 5, 10][randomInteger(0, 4)];
    const quotient = randomInteger(1, 10);

    return {
      data: {
        a: divisor * quotient,
        b: divisor,
      },
      answer: quotient,
    };
  },
  "division-by-6-7-8-9": () => {
    const divisor = randomInteger(6, 9);
    const quotient = randomInteger(1, 10);

    return {
      data: {
        a: divisor * quotient,
        b: divisor,
      },
      answer: quotient,
    };
  },
  "division-2digit-by-1digit-remainder": () => {
    const b = randomInteger(2, 9);
    const a = randomInteger(10, 99);
    const remainder = a % b;

    return {
      data: { a, b },
      answer: remainder,
    };
  },
  "division-3digit-by-1digit": () => {
    const b = randomInteger(2, 9);
    const min = Math.ceil(100 / b);
    const max = Math.floor(999 / b);
    const quotient = randomInteger(min, max);

    return {
      data: {
        a: b * quotient,
        b,
      },
      answer: quotient,
    };
  },
  "division-4digit-by-2digit": () => {
    const b = randomInteger(11, 19);
    const quotient = randomInteger(Math.ceil(1000 / b), Math.floor(9999 / b));

    return {
      data: {
        a: b * quotient,
        b,
      },
      answer: quotient,
    };
  },

  "count-10-random-dots": () => generateRandomDots(1, 10),
  "count-20-random-dots": () => generateRandomDots(11, 20),

  "count-20-50-dots-in-columns": () => {
    const columns = randomInteger(4, 6);
    return generateDotsInColumns(20, 40, columns);
  },

  "ordinal-before-after-10": () => {
    const n = randomInteger(2, 9);
    const direction = randomInteger(0, 1);

    return {
      data: { n, direction },
      answer: ordinal(direction === 0 ? n - 1 : n + 1),
    };
  },

  "place-value-2-digit": () => {
    let number;
    do {
      number = randomInteger(10, 99);
    } while (Math.floor(number / 10) === number % 10);
    const place = Math.random() > 0.5 ? "tens" : "ones";
    const digit = place === "tens" ? Math.floor(number / 10) : number % 10;

    return {
      data: { number, digit },
      answer: place,
    };
  },

  "count-coins-20": () => {
    let ones, fives, tens, total;

    do {
      ones = randomInteger(0, 5);
      fives = randomInteger(0, 3);
      tens = randomInteger(0, 2);

      total = ones + fives * 5 + tens * 10;
    } while (total === 0 || total > 20);

    return {
      data: { ones, fives, tens },
      answer: total,
    };
  },
  "count-money-100": () => {
    let ones, fives, tens, fifties, total;

    do {
      ones = randomInteger(0, 5);
      fives = randomInteger(0, 3);
      tens = randomInteger(0, 2);
      fifties = randomInteger(0, 2);

      total = ones + fives * 5 + tens * 10 + fifties * 50;
    } while (total < 21 || total > 100);

    return {
      data: { ones, fives, tens, fifties },
      answer: total,
    };
  },
};

export function forge(id) {
  if (!generators[id]) {
    throw new Error(`Unknown problem: ${id}`);
  }

  return generators[id]();
}

export function ids() {
  return Object.keys(generators);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ordinal(n) {
  const suffix =
    n % 100 >= 11 && n % 100 <= 13
      ? "th"
      : ["th", "st", "nd", "rd"][n % 10] || "th";

  return `${n}${suffix}`;
}

function generateRandomDots(minCount, maxCount) {
  const count = randomInteger(minCount, maxCount);
  const minDistance = 0.1;
  const dots = [];

  while (dots.length < count) {
    const dot = {
      x: Math.random(),
      y: Math.random(),
    };

    if (
      dots.every((d) => Math.hypot(d.x - dot.x, d.y - dot.y) >= minDistance)
    ) {
      dots.push(dot);
    }
  }

  return {
    data: { dots },
    answer: count,
  };
}

function generateDotsInColumns(min, max, columns) {
  const count = randomInteger(min, max);
  const dots = [];
  const rows = Math.ceil(count / columns);

  for (let i = 0; i < count; i++) {
    const column = i % columns;
    const row = Math.floor(i / columns);

    dots.push({
      x: (column + 0.5) / columns,
      y: (row + 0.5) / rows,
    });
  }

  return {
    data: { dots },
    answer: count,
  };
}
const randomOrder = (a, b) => (Math.random() > 0.5 ? [a, b] : [b, a]);

const addition = (digitsA, digitsB) => {
  const min = (digits) => 10 ** (digits - 1);
  const max = (digits) => 10 ** digits - 1;

  const n1 = randomInteger(min(digitsA), max(digitsA));
  const n2 = randomInteger(min(digitsB), max(digitsB));
  const [a, b] = randomOrder(n1, n2);

  return {
    data: { a, b },
    answer: a + b,
  };
};

const subtraction = (digitsA, digitsB) => {
  const min = (digits) => 10 ** (digits - 1);
  const max = (digits) => 10 ** digits - 1;

  const n1 = randomInteger(min(digitsA), max(digitsA));
  const n2 = randomInteger(min(digitsB), max(digitsB));
  const [a, b] = n1 >= n2 ? [n1, n2] : [n2, n1];

  return {
    data: { a, b },
    answer: a - b,
  };
};
