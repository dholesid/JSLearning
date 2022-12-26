console.log(`================== do while loop =================\n`);
console.log(`Number is incrementing 5 to 15 by 1\n`);
var i= 5;  
do {
    console.log(i);
    i++;
} while (i<=15);

console.log(`________________________________________________________________________________________\n`);
console.log(`Number is decrementing 50 to 40 by 1\n`);
var i= 50;  
do {
    console.log(i);
    i--;
} while (i>=40);

console.log(`________________________________________________________________________________________\n`);
console.log(`First 15 odd numbers\n`);
var i= 1;  
do {
    if(i%2!=0){
        console.log(i)
    }
    i++;
} while (i<=20);

console.log(`________________________________________________________________________________________\n`);
    
console.log(`First 10 even numbers\n`);
var i= 1;  
do {
    if(i%2==0){
        console.log(i)
    }
    i++;
} while (i<=20);
console.log(`________________________________________________________________________________________\n`);
console.log(`Table of 5\n`);
var i= 5;  
do {
    console.log(i);
    i=i+5;
} while (i<=50);

console.log(`________________________________________________________________________________________\n`);
console.log(`Table of 10 \n`);
var i= 10;  
do {
    console.log(i);
    i=i+10;
} while (i<=100);

console.log(`________________________________________________________________________________________\n`);
console.log(`Table of 10 in reverse order \n`);
var i= 100;  
do {
    console.log(i);
    i=i-10;
} while (i>=10);

