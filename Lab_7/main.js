'use strict';

//*************************1**********************************//

const array = [1, 2, 3, 4, 5, 6, 7, "Tokyo", "New York", "London", "Paris", "Berlin"];

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
}

removeElement(array, 5);
removeElement(array, "London");
console.log(array);

//*************************2**********************************//

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
}

removeElements(array, 1, "Tokyo", "Berlin");
console.log(array);

//*************************3**********************************//

const array_1 = [1, 1, 1, 2, 3, 4, 4, "top", "top"];

const unique = (array) => {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

console.log(unique(array_1));

//*************************4**********************************//

const array1 = [7, -2, 10, 5, 0, "Beijing", "Kiev"];
const array2 = [0, 10, "Kiev"];

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) result.push(item);
  }
  return result;
}

console.log(difference(array1, array2));