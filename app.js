/*
  By @ljelectrar
*/
// Variables
var today = new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var greetings;

if (hourNow > 18){
  greetings = "Good Evening, " + hourNow + " " + minuteNow;
}
else if (hourNow > 12){
  greetings  = "Good Afternoon, " + hourNow + " " + minuteNow;
}
else if (hourNow > 0) {
  greetings = "Good Morning, " + hourNow + " " + minuteNow;
}
else {
  greetings = "Welcome, " + hourNow + " " + minuteNow ;
}

document.write(greetings);
