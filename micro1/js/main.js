var generateRandomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

var listener = function() {	
	var progress = document.getElementById('prog');
	progress.value= generateRandomNumber(0, 100);
};

var button = document.getElementById('change');
button.addEventListener("click", listener);
