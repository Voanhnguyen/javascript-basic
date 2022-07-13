console.log('Hello world form HTML')

let day = "";
let a = 2;
switch (a) {
    case 0:
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case  7:
    day = "Saturday";
}
 console.log('check day: ', day, new Date().getDay())