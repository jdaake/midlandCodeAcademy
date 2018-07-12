// For In Loop

var arr = [1,2,'B', 4, true, {a:1, b:2}, 5];

for(var i=0; i <arr.length; i ++){
    console.log(arr[i]);
}

//For in to the rescue!

for(var i in arr){
    console.log(arr[i]);
}

//Works with objects too!

var obj = {a: 1, b: true, c: [1,2,3]};

for(var i in obj){
    console.log(obj[i]);
}

// for Event Listeners e.target is great but what about if you don't want to pass the Event?
var btn = document.getElementById('btn');
//Old Way
btn.addEventListener('click', function(e){
    console.log("Using e.target: ", e.target);
});

//Using 'this'
btn.addEventListener('click', function(){
    console.log("Using this: ", this);
});


//Saving variables and calling functions;

//This is selecting an element into a variable
//You'll get an error of on() is not a function
/*
    var btn2 = document.getElementById('btn2');
    btn2.on('click', function(){
        console.log(this);
    });
*/

//If you select it with jQuery though...
var btn2 = $('#btn2');
    btn2.on('click', function(){
        console.log(this);
    });



//Classes!

//Classes are always capitalized
class Rectangle{
    //Requires a constructor function.
    //You can have default values (for all functions)
    constructor(height = 1, width = 1){
        this.height = height;
        this.width = width;
    }
    getArea(){
        console.log(`The area is ${this.height * this.width}`)
    }
}

//Declare it with the new keyword
var myRectangle = new Rectangle();
var myOtherRectangle = new Rectangle(10,5);


//Classes that extend other classes...

class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
    getArea(){
        super.getArea();
    }
}

var mySquare = new Square(5);