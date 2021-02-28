// Set the date we're counting down to
var secs = 600;
var Minutes = Math.floor(secs / 60);
var Seconds = Math.floor(secs % 60);
document.getElementById("timer").innerHTML = Minutes + "m " + Seconds + "s";

function timerFunc(){
	
  setInterval(function() {

  

  // Find the distance between now and the count down date
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor(secs / 60);
  var seconds = Math.floor(secs % 60);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s";
  secs--;
  // If the count down is finished, write some text
  if (secs < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
	alert("Time's Up!");
	
  }
}, 1000);
	
}
