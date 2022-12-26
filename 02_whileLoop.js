// var sentence = "Yes Just do it man, I know you can";
// var counter = 0;
// for (let index = 0; index < sentence.length; index++) {
//     var char = sentence.charAt(index);
//     if (char=='a','A' || char=='e','E' || char=='i','I' || char=='o','O' || char=='u','U') {
//         // char=='A' || char=='E' || char=='I' || char=='O' || char=='U') {
//         console.log(char);
//         counter = counter +1;
//     }   
// }
// console.log(`Total vowels in string is : ${counter}`);


console.log(`================== while loop =================\n`);
console.log(`Number is incrementing by 1\n`)
var i=5;
while (i<=15) {
    console.log(i)
    i++;
}

console.log(`_____________________________________________________________________________________________\n`);
console.log(`Number is decrementing by 1\n`)
var i=50;
while (i>=40) {
    console.log(i);
    i--;
}

console.log(`_____________________________________________________________________________________________\n`);
console.log(`First 15 odd numbers are\n`);
var i= 1;
while (i<=15) {
   if(i%2!=0){
        console.log(i)
    }
    i++;
    
}
console.log(`_____________________________________________________________________________________________\n`);

console.log(`First 10 even numbers are\n`);
var i = 1;
while (i<=20){
    if(i%2==0){
    console.log(i)
    }
    i++;
  }
  console.log(`_____________________________________________________________________________________________\n`);
  console.log(`Table of 5 is\n`);
  var i=5;
  while (i<=50) {
      console.log(i);
      i=i+5;
  }
  console.log(`_____________________________________________________________________________________________\n`);
  console.log(`Table of 10 is\n`);
  var i=10;
  while (i<=100) {
      console.log(i);
      i=i+10;
  }
  
  console.log(`_____________________________________________________________________________________________\n`);
  console.log(`Table of 10 in reverse\n`);
  var i=100;
  while (i>=10) {
      console.log(i);
      i=i-10;
  }
  