


var x = document.getElementById("x");
var y = document.getElementById("y");
var xper = document.getElementById("xper");
var yper = document.getElementById("yper");
var width = window.innerWidth;
var height = window.innerHeight;

document.addEventListener("mousemove", function (event) {
  console.log(event);
  var clientX = event.clientX;
  var clientY = event.clientY;
  x.value = event.clientX;
  y.value = event.clientY;
  xper.value = Math.round(clientX/width *100) + "%";
  yper.value = Math.round(clientY/height *100) + "%";
});