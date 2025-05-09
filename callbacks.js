let a=(n)=>5*n;
console.log(a(6));


//Object

let car={
    name:'swift',
    brand:'tata',
    price:18
};
car['modelYear']=2024
console.log(car);

// Object Reference

const n = {
    name: 'Kavitha',
    age: '22',
};
n.age = 23;
console.log(n);

//Constructor

function Add() {
    this.a = 5;
    this.b = 10;
    this.add = function (c) {
        return this.a + this.b + c;
    }
}

let sum = new Add();
console.log(sum.add(4));