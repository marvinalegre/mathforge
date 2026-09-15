const generators = {
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
