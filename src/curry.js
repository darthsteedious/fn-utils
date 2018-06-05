export default (fn) => {
  const inner = (args) => (...x) => {
    const newArgs = [...args, ...x];
    if (newArgs.length < fn.length) return inner(newArgs);

    return fn(...newArgs);
  };

  return inner([]);
};