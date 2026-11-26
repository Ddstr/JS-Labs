'use strict';

//*************************1**********************************//

const seq = (f) => (g) => {
  if (typeof g === 'number') return f(g);
  return seq((x) => f(g(x)));
}

console.log(seq
   (x => x + 7)
   (x => x * 2)
   (5));

console.log(seq
   (x => x * 2)
   (x => x + 7)
   (5));

console.log(seq
   (x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)
   (7));

//*************************2**********************************//

const array = () => {
  const func_obj = [];
  const get = (a) => func_obj[a];
  get.push = (b) => func_obj.push(b);
  get.pop = () => func_obj.pop();
  return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1));
console.log(arr(2));
console.log(arr.pop());
console.log(arr.pop()); 
console.log(arr.pop()); 