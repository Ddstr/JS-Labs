'use strict';

//********************************1***************************************//

const obj = {a: 1, b: 2, c: 3};

const iterate = (obj, callback) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    callback(key, value, obj);
  }
}

iterate(obj, (key, value) => {
  console.log({ key, value, });
});
iterate({i: 4, j: 5, k: 6}, (key, value) => {
  console.log({ key, value});
});

//********************************2***************************************//

const store = (x) => () => x;

const read = store(120);
const value = read();
console.log(value);

//********************************3***************************************//

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const type = types[i];
    const typeName = type.name.toLowerCase();
    if (typeof arg !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const result = fn(...args);
  const type = types[types.length - 1];
  const typeName = type.name.toLowerCase();
  if (typeof result !== typeName) {
    throw new TypeError(`Result type ${typeName} expected`);
  }
  return result;
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res_1 = concatStrings('Hello ', 'world!');
console.dir(res_1);