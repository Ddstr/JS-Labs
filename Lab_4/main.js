'use strict';

//****************1**********************//

const sum_for = (...args) => {
  let value = 0;
  for (let i = 0; i < args.length; i++) {
    value += args[i];
  }
  return value;
}

console.log(sum_for(1, 2, 3));


const sum_for_of = (...args) => {
  let value = 0;
  for (const val of args) {
     value += val;
  }
  return value;
}

console.log(sum_for_of(0));


const sum_while = (...args) => {
  let value = 0;
  while (args.length > 0) {
    value += args.pop();
  }
  return value;
}

console.log(sum_while());


const sum_do_while = (...args) => {
  if (args.length === 0) return 0;
  let value = 0;
  do {
    value += args.pop();
  } while (args.length > 0);
  return value;
}

console.log(sum_do_while(1, -1, 1));


const sum_reduce = (...args) => args.reduce((a, b) => (a + b), 0);

console.log(sum_reduce(10, -1, -1, -1));

//****************2**********************//

const arg = [[11, 2, 21], [14, 25, 6], [7, 18, 9]];

const max = (arg) => {
  let value = arg[0][0];
  for (let i = 0; i < arg.length; i++) {
    const row = arg[i];
    for (let j = 0; j < row.length; j++) {
      const coll = row[j];
      if (value < coll){
        value = coll;
      }
    }
  }
  return value;
}

console.log(max(arg));

//****************3**********************//

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
}

const life_expectancy = (persons) => {
  const age = {};
  for (const name in persons) {
    const person = persons[name];
    age[name] = person.died - person.born;
  }
  return age;
}

console.log(life_expectancy(persons));