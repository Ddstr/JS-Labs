'use strict';

//*************************1**********************************//

let name = "Dmytro";
const birth_year = 2008;

const greeting = (name) => {
    return console.log(`Hello ${name}`);
}

greeting(name);

//*************************2**********************************//

const range = (start, end) => {
    if (start > end) {
        let reserve = end;
        end = start; 
        start = reserve;
    }

    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return console.log(arr);
}

range(15, 30);

const rangeOdd = (start, end) => {
    if (start > end) {
        let reserve = end;
        end = start; 
        start = reserve;
    }

    let arrOdd = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            arrOdd.push(i);
        }
    }

    return console.log(arrOdd);
    }    
    
rangeOdd(15, 30);

//*************************3**********************************//

const average = (a, b) => {
    return (a + b) / 2;
}

const square = (x) => {
    return x ** 2;
}

const cube = (x) => {
    return x ** 3;
}

const calculate = () => {
    let calc_arr = [];
    for (let i = 0; i < 10; i++) {
        calc_arr.push(average(square(i), cube(i)));
    }
    return calc_arr;
}

console.log(calculate());

//*************************4**********************************//

const fn = () => {
    let obj_1 = {name: "Dmytro"};
    const obj_2 = {name: "John"};
    console.log(obj_1.name);
    console.log(obj_2.name);

    obj_1.name = "Jack";
    console.log(obj_1.name);

    obj_1 = {name: "Vladislav"};
    console.log(obj_1.name);
}

fn();

const createUser = (name, city) => {
    return {name, city};
}

console.log(createUser("Dmytro", "Kyiv"));

//*************************5**********************************//

const phoneBookArray = [
    {name: "Dmytro", phone: "123-456-7890"},
    {name: "John", phone: "987-654-3210"},
    {name: "Jack", phone: "555-555-5555"},
    {name: "Vladislav", phone: "111-222-3333"}
];

const findPhoneByName = (name) => {
    for (const argument of phoneBookArray) {
        if (argument.name === name) {
            return argument.phone;
        }
    }
}

console.log(findPhoneByName("Jack"));
console.log(findPhoneByName("Vladislav"));

const phoneBookHash = {
    "Dmytro": "123-456-7890",
    "John": "987-654-3210",
    "Jack": "555-555-5555",
    "Vladislav": "111-222-3333"
};

const findPhoneByNameHash = (name) => {
    return phoneBookHash[name];
}

console.log(findPhoneByNameHash("John"));
console.log(findPhoneByNameHash("Jack"));