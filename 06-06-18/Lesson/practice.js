var myArr = [1,2,3,4,5,6,7,8,9,10];

for(var i=0;i < myArr.length; i++){
  console.log(myArr[i]);

}

var word = prompt("What is the word?!?!?!?!").toLowerCase();
//if(word.includes("e") || word.includes("E"))
  if(word.includes('e') || word.includes('a')){
  console.log("Your word contains a vowel");
}
else{
  console.log("Your word does NOT contain an e")
}

myArr.shift();
myArr.push(11);
