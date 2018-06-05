const compose = (...fns) => {
  const [f, ...rest] = fns;

  if (rest.length === 1) {
    const [g] = rest;
    return x => f(g(x));
  }

  return x => f(compose(...rest))(x);
};

export default compose;