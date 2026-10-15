'use strict';

//********************************1***************************************//

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(1, 10));
console.log(random(10));

//********************************2***************************************//

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
const generateKey = (length, characters) => {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[Math.floor(Math.random() * characters.length)];
    }
    return key;
}

console.log(generateKey(16, characters));

//********************************3***************************************//

const ipToInt = (ip) => {
    return ip.split(".").map(Number).reduce((acc, num, index) => {
            return acc + (num << (8 * (3 - index)));
        }, 0)
}

console.log(ipToInt("127.0.0.1"));
console.log(ipToInt("10.0.0.1"));
console.log(ipToInt("8.8.8.8"));

//********************************4***************************************//

const iface = {
    m1: (x) => [x],
    m2: function(x, y) {
        return [x, y];
    },
    m3(x, y ,z) {
        return [x, y ,z];
    },
};

const introspect = (iface) => {
    const arr = [];

    for(const i in iface) {
        arr.push([i, iface[i].length]);
    }
    return arr;
}

console.log(introspect(iface));