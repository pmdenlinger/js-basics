//JSON Serialization and Parsing
//JSON Object declaration
studentJSON = '{"firstName":"Danial", "lastName":"Craig", "age":50, "jamesBond":false}';
// the name/value pair jamesBond is false because Daniel Craig will no longer be James Bond :)

//JSON array declaration
countriesJSON = '["Australia", "USA", "Macedonia", "Germany", "Holland", "Belgium", "Brazil", "Cameroon", "Canada", "Chile", "Denmark"]';

//JSON methods parse and stringify
const personObj = {
    name: 'Daniel',
    age: 54,
    favoriteDrink: 'Martini',
    favouriteMovie: 'James Bond',
    married: true
  };
  //create a JSON string format using stringify
  const personObjJSON = JSON.stringify(personObj);
  console.log('JSON String')
  console.log(personObjJSON);

  //Convert the personObjJSON back to a javaScript Object
  const personObj1 = JSON.parse(personObjJSON);
  console.log('Again the same JavaScript Object');
  console.log(personObj1);
