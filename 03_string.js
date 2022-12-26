console.log("1)");
function squareOfWordLength(val1,val2,val3){
    console.log("The length of word is -:",val1.length);
    var lengthSquare= val1.length;
    console.log("Its length square is -:",lengthSquare*lengthSquare);
    console.log("The length of word is -:",val2.length);
    var lengthSquare= val2.length;
    console.log("Its length square is -:",lengthSquare*lengthSquare);
    console.log("The length of word is -:",val3.length);
    var lengthSquare= val3.length;
    console.log("Its leng3h square is -:",lengthSquare*lengthSquare);
}
squareOfWordLength("JavaScript","Google Chrome","Developer Smart");
console.log("==========================================================");

var stringL= function(){
console.log("I am Angular Developer");
var myStr= "I am Angular Developer";
console.log(`The length of string is -: ${myStr.length}`);
var wordCount= myStr.split(" ");
console.log(`total number of words -: ${wordCount.length}`);
console.log(`2)Length of string is = ${myStr.length} Total no of words in string are -: ${wordCount.length}`);
console.log(`After dividing string length by total no of words is -: ${myStr.length/wordCount.length}`);
console.log(`=====================================================`);
console.log(`String length is multiplued by total word count -:${myStr.length*wordCount.length}`);
}
stringL();

//     console.log(`=====================================================`);
//     console.log(`2.2 Multiplying string length with total words = ${myStr.length*wordCount.length}`);