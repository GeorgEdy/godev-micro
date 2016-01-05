var red = document.getElementById('R');
var green = document.getElementById('G');
var blue = document.getElementById('B');

red.addEventListener("input", function() {

	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;

});

green.addEventListener("input", function() {

	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;

});
blue.addEventListener("input", function() {

	var redd = red.value;
	var greenn = green.value;
	var bluee = blue.value;
	var rgb = "RGB("+ redd + ","+greenn + ","+bluee +")";
	document.body.style.backgroundColor = rgb;
});