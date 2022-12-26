var stringhandsOn= function(){
var myString = "      Hey you are doing good, keep it up      "
console.log(`1)The given string is -: ${myString}`);
console.log(`2)The length of the given string is -: ${myString.length}`);
var myStar = myString.trim();
console.log(`3)After removeing leading & trailling extra spaces = ${myStar}`);
var onlyWords = myString.trim().split(" ");
console.log(`4)Count of removed extra spaces of th string = ${onlyWords.length}`);
console.log(`5)After trim first char of string is = ${myStar.charAt(0)} & the last char of string is = ${myStar.length-1}`);
console.log(`6) count total no of words available in the string after step 3 is = ${myStar.length}`);
console.log(`7) index of word "Good" from given string is = ${myStar.indexOf("Good")}`);
console.log(`8) substring starting from index 22 using Substring() & slice () = ${myStar.slice(22)} `);
console.log(`9) check is string ends up with word "up" after step 3 = ${myStar.endsWith("up")}`);

console.log(`10) check is string start with word "Hey" after trimming = ${myStar.startsWith("Hey")}`);
24
}
stringhandsOn();




// 

