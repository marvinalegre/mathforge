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
