'use strict';

//****************1**********************//

const inc = (n) => {
    return ++n;
}

const a = 4;
const b = inc(a);
console.log({a, b});

//****************2**********************//

const inc2 = (num) =>{
    return num.n2++;
}

const obj = { n2: 7 };
inc2(obj);
console.log(obj);

//****************3**********************//

const arr = [2, 3, "true", true, false, "56", "node", 43, 54];
const collection = {
    numbers: 0,
    strings: 0,
    booleans: 0,
};

for(const amount of arr){
    if(typeof amount === "number"){
        collection.numbers++;
    } else if(typeof amount === "string"){
        collection.strings++;
    } else if(typeof amount === "boolean"){
        collection.booleans++;
    }
}
console.log(collection);

//****************4**********************//

const arr2 = [2, 3, "true", true, false, "56", "node", 43, 54, false, "world"];
const collection2 = {};

for(const amount2 of arr2){
    if(typeof amount2 === "number"){
        collection2.numbers = (collection2.numbers || 0) + 1;
    } else if(typeof amount2 === "string"){
        collection2.strings = (collection2.strings || 0) + 1;
    } else if(typeof amount2 === "boolean"){
        collection2.booleans = (collection2.booleans || 0) + 1;
    }
}
console.log(collection2);