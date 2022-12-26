console.log(`===========Switch Case===========\n`);
function monthOfYear(monthNumber){
    switch (monthNumber) {
            case 1:
              console.log(`"${monthNumber}" This Month is January`);
              break;
            case 2:
              console.log(`"${monthNumber}" This Month is February`);
              break;
            case 3:
              console.log(`"${monthNumber}" This Month is March`);
              break;
            case 4:
              console.log(`"${monthNumber}" This Month is April`);
              break;
            case 5:
              console.log(`"${monthNumber}" This Month is May`);
              break;
            case 6:
              console.log(`"${monthNumber}" This Month is June`);
              break;
            case 7:
              console.log(`"${monthNumber}" This Month is July`);
              break;
            case 8:
              console.log(`"${monthNumber}" This Month is Augest`);
              break;
            case 9:
              console.log(`"${monthNumber}" This Month is September`);
              break;
            case 10:
              console.log(`"${monthNumber}" This Month is October`);
              break;
            case 11:
              console.log(`"${monthNumber}" This Month is November`);
              break;
            case 12:
              console.log(`"${monthNumber}" This Month is December`);
              break;
            default:
              console.log(`"${monthNumber}" This Month is Invalid,Please Enter a Valid Month From 1 To 12`);
              break;
          }
        };
        monthOfYear(2);
        monthOfYear(5);
        monthOfYear(12);
        monthOfYear(15);
        monthOfYear(100);
        