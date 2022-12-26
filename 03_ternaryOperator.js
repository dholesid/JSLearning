console.log(`================= Eligiblity Criteria for company =================\n`);
var eligiblityForInterview= function(gradScore,hscScore,sscScore,candidateName){
var result= gradScore>=70 || hscScore>=80 || sscScore>=90 ?`*Congrates ${candidateName} you are eligible for TCS interview` : `*Unfortunately you are not eligible for interview`
console.log(result);
}
eligiblityForInterview(80,86,90,"Siddharth")
eligiblityForInterview(70,65,55,"Ranjit")
eligiblityForInterview(60,79,88,"Ganesh")
