// For removing or changing multiple keys in an array of objects
// Your best option is to use the .map function which can use an anonymous functiona

var people = [{name:"mike", age:20}, {name:"mikeee", age:30}, {name:"Pike", age:10}];

//.map doesn't mutate the original array so you need to assign it to a variable
//If we wanted to add 10 years to each persons age it'd be as follows
//The argument in the mapping function can be called anything but its value
//Will be whatever value is for the item in the array that is being iterated over
var peoplePlus10Years = people.map(function(person){
  //Add 10 to the age and reassign
  person.age = person.age + 10
//Then we have to return the newly changed person value
  return person;
})
