'use strict';

//*************************1**********************************//

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('Arguments must be functions');
    }
  }
  return (x) => fns.reduce((value, fn) => fn(value), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
// const f_err = pipe(inc, 7, cube)
const f = pipe(inc, twice, cube);
console.log(f(4));

//*************************2**********************************//

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    if (fns.length === 0) return x;
    const last = fns.length - 1;
    let res = x;
    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  }
  composed.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  }
  return composed;
}

const f2_err = compose(inc, 7, cube);
const f2 = compose(inc, twice, cube);
console.log(f2(4));
console.log(f2_err(4));