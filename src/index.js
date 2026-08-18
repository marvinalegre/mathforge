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
