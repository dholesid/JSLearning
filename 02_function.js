console.log("===============function===============");

console.log("1)");
function details(){
    console.log("Myself Siddharth");
}
details();
console.log("---------------------------------");


function quality(){
    console.log("I am a good Actor");
}
quality();
console.log("=====================================================");

console.log("2)");

function personalDetails(firstName,lastName) {
    console.log(firstName);
    console.log(lastName);
}
personalDetails("Siddharth","Dhole")
console.log("=====================================================");

console.log("3)");
function swapValuesDude(value1,value2) {
    console.log("Before Swap-:",value1,value2);
    var temp= value1;
    value1= value2;
    value2= temp;
    console.log("After Swap-:",value1,value2);
}
swapValuesDude("Allu","Sneha")
swapValuesDude(1000,2000);

console.log("=====================================================");
console.log("4)");

function addThreeValues(value1,value2,value3) {
         console.log(value1+value2+value3); 
}
addThreeValues(10.23,600,40)
addThreeValues("Hello","Good","Morning")
