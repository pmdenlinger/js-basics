//JavaScript Maps

let map = new Map();

map.set('1', 1);   // key is from type string where we store numerical value
map.set(1, 'String');     // a numeric key where we store string
map.set(true, 'Hi'); // a boolean key where we store string

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get('1')   ); // Output: 1
console.log( map.get(1) ); // Output: '1'

console.log( map.size ); // 3

//Map can also use objects as keys.
let tom = { firstName: 'Tom', lastName: 'Cruise'};

//for every actor, let's store how many oscars they won
let oscars = new Map();

// tom is the key for the map
oscars.set(tom, 8);

console.log( oscars.get(tom) ); // 8

//construct an empty map
const newMap = new Map (); // empty map

newMap.set('first',1);
newMap.set(2,'second');
newMap.set(true, 'third');
//delete the last key
newMap.delete(true);//returns true

if(newMap.has(true)){
    console.log('Something must be wrong, they key is not deleted!')
}
else{
    console.log(`The key is not found. This means that there is no such
    key or it has been deleted`);
}
//looping through map with for/of
for(const [key,value] of newMap){
    console.log(`The key is: ${key}, and the value is: ${value}`);
}

//iterate through map with forEach
newMap.forEach((key,value)=>{
    console.log(`The key is: ${key}, and the value is: ${value}`);
})

//map chainin
let map = new Map();
map.set(1, 'one')
  .set(2, 'two')
  .set(3, 'three');


//advanced iteration
let actors = new Map([
['Tom Cruise', 7],
['Morgan Freeman', 10],
['Tom Hanks',    13],
['Tom Hardy', 3],
['Cillian Murphy', 2],
['Angelina Jolie',    6],
]);

// 1)map.keys() iterate over keys (actor)
for (let actor of actors.keys()) {
console.log(actor);
}
/*
Output:
Tom Cruise
Morgan Freeman
Tom Hanks
Tom Hardy
Cillian Murphy
Angelina Jolie
*/

// 2)map.values() iterate over values (oscars won)
for (let oscars of actors.values()) {
console.log(oscars); 
}

/*
Output:
7
10
13
3
2
6 
*/
//3) map.entries() iterate over [key, value] entries
for (let entry of actors.entries()) { 
console.log(entry); 
}

/*
Output:
(2) ['Tom Cruise', 7]
(2) ['Morgan Freeman', 10]
(2) ['Tom Hanks', 13]
(2) ['Tom Hardy', 3]
(2) ['Cillian Murphy', 2]
(2) ['Angelina Jolie', 6]
*/