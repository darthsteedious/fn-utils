const { and, asBoolean, compose, curry, or, xor } = require('../lib');

const Compose_PlusOne_TimesTwo_IsFour = () => {
  const plusOne = x => x + 1;
  const timesTwo = x => x * 2;

  const plusOneTimesTwo = compose(timesTwo, plusOne);

  return plusOneTimesTwo(1) === 4; // Expected 4
};

const Curry_AddOneAndTwo_Returns3 = () => {
  const add = curry((x,y) => x+y);

  const partial = add(1);

  return typeof partial === 'function' && partial(2) === 3;
};

const Curry_AddXYZ_Returns6 = () => {
  const add = curry((x,y,z) => x+y+z);
  const results = [
    add(2)(2,2),
    add(2,2)(2),
    add(2)(2)(2),
    add(2, 2, 2),
  ];
  return results.every(r => r===6);
};

const And_TrueFalse_ReturnsFalse = () => {
  const t = () => true;
  const f = () => false;
  
  return !and(t, f)(null);
};

const And_TrueTrue_ReturnsTrue = () => {
  const t = () => true;

  return and(t, t)(null);
};

const And_FalseFalse_ReturnsFalse = () => {
  const f = () => false;

  return !and(f, f)(null);
};

const Xor_TrueTrue_ReturnsFalse = () => {
  const t = () => true;

  return !xor(t, t)(null);
};

const Xor_TrueFalse_ReturnsTrue = () => {
  const t = () => true;
  const f = () => false;

  return xor(t, f)(null);
};

const Xor_FalseFalse_ReturnsFalse = () => {
  const f = () => false;

  return !xor(f, f)(null);
};

const msg = (test, result) => `Test ${test}() result: ${result ? 'PASSED' : 'FAILED'}`;
const run = (...tests) => tests.map(exec_test => {
  try {
    return msg(exec_test.name, exec_test());
  } catch {
    return msg(exec_test.name, false);
  }
}).join('\n');

const testResults = run(
  And_TrueFalse_ReturnsFalse,
  And_TrueTrue_ReturnsTrue,
  And_FalseFalse_ReturnsFalse,
  Compose_PlusOne_TimesTwo_IsFour,
  Curry_AddXYZ_Returns6,
  Curry_AddOneAndTwo_Returns3,
  Xor_TrueFalse_ReturnsTrue,
  Xor_TrueTrue_ReturnsFalse,
  Xor_FalseFalse_ReturnsFalse,
);

console.log(testResults);