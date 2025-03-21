//Exceptions in JavaScript
//Syntax
/*
try {
    tryCode - Block of code to try
  }
  catch(err) {
    catchCode - Block of code to handle errors
  }
  finally {
    finallyCode - Block of code to be executed regardless of the try / catch result
  }
  */


  //Try,Catch, Finally example
const numerator = 10, denominator = 'string';

try {
     console.log(numerator/denominator);
     console.log(x);
}
catch(error) {
    console.log('Code that will caught the error'); 
    console.log('The ERROR message: ' + error);  
}
finally {
     console.log('Finally clause will be executed regardless of try/catch block');
}