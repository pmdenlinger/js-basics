//Destructuring Assignment on arrays

let [valueA, valueB] = [10, 20];

console.log(valueA);
//Output: 10

console.log(valueB);
//Output: 20

let [valueC, valueD, ...restValues] = [10, 20, 30, 40, 50,60,70];

console.log(valueC);
//Output: 10
console.log(valueD);
//Output: 20
console.log(restValues);
//Output: Array [30,40,50,60,70]

//unmatched items are ignored
let [one,two,three] = [1,2,3,4];
console.log(one);//1
console.log(two);//2
console.log(three);//3

//more variables, less array elements and unmatched variables are set to undefined
let [first,second,third,forth,fifth] = [1,2,3,4];
console.log(first);
console.log(second);
console.log(third);
console.log(forth);
console.log(fifth);

//nested arrays destructuring
let [f, [e, d]] = [1, [2,3]]; 
console.log(f); //1
console.log(e);//2
console.log(d);//3

// rest operator
let [one, ...rest] = [1,2,3,4,5]; 
console.log(one); // 1
console.log(rest); // an array of 4 items [2,3,4,5]

//Destructuring Assignment on objects

let personObj = {
    firstName: 'Shia',
    lastName: 'labeouf',
    age: 38
};

let {firstName, lastName, age} = personObj;
console.log(firstName);
console.log(lastName);
console.log(age);

//nested object Destructuring
const user = {
    studentId: 12234772346,
    name: 'Thomas',
    age: 42,
    education: {
      degree: 'Masters of Information Technology',
    }
  };
  const {studentId, name, age, education: {degree}} = user;
  console.log(studentId);//prints: 12234772346
  console.log (name); //prints: Thomas
  console.log(age); // prints: 42
  console.log(degree); //prints: Masters

//adding a default value
const newObj = {
    occupation: 'Developer',
    works: {
        company: 'Google'
    }
}

const {occupation, works:company, where:{city} = {}} = newObj;