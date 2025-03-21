//Invoking a Function with a Function Constructor


// This is a function constructor:
function printDetails(x, y) {
this.firstName = x;
this.lastName  = y;
}

// This creates a new object
const morganObject = new printDetails("Morgan", "Freeman");

// This will return "Moragn"
morganObject.firstName;
// This will return "Freeman"
morganObject.lastName;