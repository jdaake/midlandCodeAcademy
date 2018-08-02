var arr = [
    { name: "Mike", age: 30, birthdate: "11/12/1987" },
    { name: "Steve", age: 40, birthdate: "09/03/1977" },
    { name: "Rebecca", age: 25, birthdate: "05/12/1987" },
    { name: "Elizabeth", age: 18, birthdate: "01/30/2000" }
  ];

// Similar to filters you can do sorts as an anonymous function or as a function passed as an argument.
// Either way the function takes two arguments 
    // the first item (usually seen as a)
    // the second item its being compared to (usually seen as b)
// And expects one of three return values
    // A number greater than 0 (usually just 1 if you're not comparing numbers) if a>b
    // 0  if a == b
    // A number less than 0 (usually just -1 if you're not comparing numbers) if a<b

// Remember that it WILL mutate the original array 
// If you don't want that make sure you .slice it to a new variable and then sort the new variable first
// To sort by age you would do the following:

arr.sort(function(a,b){
    // Since we're comparing numbers if a is greater the return value will be > 0
    // This is sort the array ascending. To sort it descending simply return b-a instead of a-b
    return a.age-b.age;
})

// To sort by alphabetical order you need to make sure that all values are in the same case
// Then you need to check to see if one is greater and return the appropriate value

arr.sort(function(a,b){
    // The below will sort ascending and if they're the same name it will treat it as if the first passed element is larger.
    // Practially this has no effect on how it looks to a user
    return a.name.toLowerCase > b.name.toLowerCase ? 1 : -1

    // If you wanted to sort descending, simply reverse the 1 and -1
    return a.name.toLowerCase > b.name.toLowerCase ? -1 : 1
})


// To sort dates, similar to the filter you need to convert them to Date objects but otherwise it would be nearly identical to sorting by alphabtical order
arr.sort(function(a,b){
    // The below will sort ascending and if they're the same name it will treat it as if the first passed element is larger.
    // Practially this has no effect on how it looks to a user
    return new Date(a.birthdate) > new Date(b.birthdate) ? 1 : -1

    // If you wanted to sort descending, simply reverse the 1 and -1
    return new Date(a.birthdate) > new Date(b.birthdate) ? -1 : 1
})