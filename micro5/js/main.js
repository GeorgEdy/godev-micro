var red = document.getElementById('R');
var green = document.getElementById('G');
var blue = document.getElementById('B');

red.addEventListener("input", function() {
	console.log(red.value);
	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;

});

green.addEventListener("input", function() {
	console.log(green.value);
	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;

});
blue.addEventListener("input", function() {
	console.log(blue.value);
	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;
});