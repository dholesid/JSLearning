console.log(`=====Check Eligiblity for Voting by using if else block=====\n`);
var votingEligibility=function(age){
  if(age<0 || age>120)
  {
    console.log(`*)Invalid data:Because your age is ${age}`);
  }
  else{
    if(age>18)
    {
        console.log(`*)Your given age is ${age} : Congratulations you are eligible for voteing`);
    }
    else{
        console.log(`*)Your given age is  ${age} : Sorry you are not eligible for voteing`);
    }
  }
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);
console.log(`______________________________________________________________________________________________\n`);

var gradeCalculation= function(marks){
if(marks>=90 && marks<=100){
    console.log(`*) Funtastic marks  ${marks} :Your grade is "A+"`);
}
if(marks>=75 && marks<90){
    console.log(`*) Excellent marks ${marks} : Your grade is "A"`);
}
if(marks>=50 && marks<75){
    console.log(`*) Good marks ${marks} : Your grade is "B"`);
}
if(marks>=35 && marks<50){
    console.log(`*) Mark is ${marks} : Your grade is "C" need improvement`);
}
if(marks==0 || marks<0 || marks>100 || (typeof marks) != "number"){
    console.log(`*) Marks are ${marks} :Please provide the valid marks  `);
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty")
