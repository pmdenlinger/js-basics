//SETS in JavaScript

let set = new Set();

let tom = { name: "Tom" };
let morgan = { name: "Morgan" };
let angelina = { name: "Angelina" };

// adding the values to the set
set.add(tom);
set.add(morgan);
set.add(angelina);

//prints the entire set Set(3) {{…}, {…}, {…}}
console.log(set);
//returns the number of elements
console.log(set.size);//3

//loops over the elements
for (let actor of set) {
    console.log(actor.name);
}
/*
Tom
Morgan
Angelina
*/

//iterate over sets using foreach
set.forEach((value,)=>{
    console.log(value.name);
})