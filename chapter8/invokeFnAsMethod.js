//Invoking a Function as a Method
const personDetails = {
    firstName:"Tom",
    lastName: "Hardy",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  personDetails.fullName();         // Will return "Tom Hardy"
  