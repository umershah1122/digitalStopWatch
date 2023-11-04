var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var timer = false;
// var strt = false;

function start() {
  timer = true;
  stopWatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("msec").innerHTML = "00";
}

function stopWatch() {
  if (timer == true) {
    msec = msec + 1;
    if (msec == 100) {
      sec = sec + 1;
      msec = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      sec = 0;
      min = 0;
    }
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var msecString = msec;
    if (msec < 10) {
      msecString = "0" + msecString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (hr < 10) {
      hrString = "0" + hrString;
    }

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("msec").innerHTML = msecString;
    setTimeout("stopWatch()", 10);
  }
}
