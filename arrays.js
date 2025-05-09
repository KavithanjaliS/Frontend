let veg = ['apple', 'orange', 'grapes'];

for (let i = 0; i < 3; i++) {
    console.log(veg[i]);

}
// map

let map = new Map();

map.set(1, 'kavi')
    .set(2, 'anji')
    .set(3, 'undefined');

for (key of map) {
    console.log(key);
}


let set =new Set();

set.add(9)
.add(8)
.add(7)
.add(6)
.add(5)
.add(6)
.add(0)
.add(7);
console.log(set);