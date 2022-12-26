console.log("===================function Expression===============");
console.log("1)");
var squareOfNum= function(value1,value2,value3,value4){
console.log("*1) The Square of 5 is",value1*value1);
console.log("*2) The Square of 6 is",value2*value2);
console.log("*3) The Square of 25 is",value3*value3);
console.log("*4) The Square of 100 is",value4*value4);
}
squareOfNum(5,6,25,100);
console.log("------------------------------------------------------");
console.log("2)");
var funtype=(typeof squareOfNum)
console.log("*1) The typeOf square is -:",funtype);
console.log("------------------------------------------------------");
console.log("3)");
var areaOfRect= function(length,width){
    console.log("*1) Area of rectangle -:",length*width,"Sq.Units");
}
areaOfRect(499,917);
console.log("------------------------------------------------------");
console.log("4)");
var swapVal= function(value1,value2) {
    console.log("Before Swap-:",value1,value2);
    var temp= value1;
    value1= value2;
    value2= temp;
    console.log("After Swap-:",value1,value2);
}
swapVal("Allu","Sneha")
swapVal(1000,2000);
console.log("------------------------------------------------------");
console.log("5)");
var stringAssig = function(value){
    console.log("*1) String is-:",value);
    console.log("*2) Total character in the string is -:",value.length);
    console.log("*3) Char at index 6 -:",value.charAt(6));
    console.log("*4) Char at index 11 -:",value.charAt(11));
    var lengthTotal = value.length;
    console.log("*5) Char at last index -:",value.charAt(lengthTotal-1));
    console.log("*6) Char at first index -:",value.charAt(0));
    var totallength = value.length;
    console.log(`*7) Square of the given string length is -: ${totallength * totallength}`);  
}
stringAssig("JS is the most popular language");


 

