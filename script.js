console.clear();
console.log("hello world");

var aud = document.getElementById("myAudio");

$("input").change(onChange);

function onChange(evt){
  let start = $(this).data("start");
  let duration = $(this).data("duration");
  console.log(start,duration);
  aud.currentTime = start;
  aud.play();
  setTimeout(function(){ aud.pause(); }, duration);
}