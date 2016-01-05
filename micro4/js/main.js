//Mouse position determines background color in HSL
var width = window.innerWidth;
var height = window.innerHeight;

document.addEventListener("mousemove", function (event) {
  console.log(event);
  var clientX = event.clientX;
  var clientY = event.clientY;

  var hue =Math.round(clientX/width *360);
  var saturation = Math.round(clientY/height *100) + "%";
var hsl = "hsl(" +hue + "," + saturation +", 50%)";
document.body.style.backgroundColor = hsl;
  console.log(hsl);
});
