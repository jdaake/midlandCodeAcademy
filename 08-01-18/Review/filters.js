var arr = [
  { name: "mike", age: 30, birthdate: "11/12/1987" },
  { name: "steve", age: 40, birthdate: "09/03/1977" },
  { name: "rebecca", age: 25, birthdate: "05/12/1987" },
  { name: "elizabeth", age: 18, birthdate: "01/30/2000" }
];

// Remember when you filter an array to store it into a new variable (or the old one). 
// The original array is not mutated or changed in any way from filtering

// Filtering can be done with an anonymous function like this:

//the argument in the anonymous function is whatever element in the array is currently being iterated on. You can name the parament whatever you'd like
var olderThan29 = arr.filter(function(element){  
    //The return value needs to be of type boolean. True means you want to include it in the filteredArray, false means you exclude it soo
    return element.age > 29;
})

//or with a passed function (make sure you don't invoke it if you pass it as an argument though)

function underThirtyFilter(element){
    return element.age < 30;
}

var youngerThan30 = arr.filter(underThirtyFilter);


//To filter by dates you need to compare Date objects to Date objects for the boolean. So to see if their birthday is before 08/02/1997

var beforeASetDate = arr.filter(function(element){
    var compareToDate = new Date("08/02/1997") //how you make a date based off a string version of a date
    var birthdate = new Date(element.birthdate);
    return birthdate < compareToDate // will include anyone with a birthdate before our specified date.
});
