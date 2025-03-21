//Symbols

let mySymbol =  Symbol('name');
let mySymbol2 =  Symbol('name');
//test if both variables are unique
mySymbol == mySymbol2;//false

// lets create obj with symbol

let obj1 = {
    mySymbol:'value'
};
console.log(obj1);

//we can convert a symbol to string using the toString method
let convertSym = mySymbol.toString();
alert(convertSym);