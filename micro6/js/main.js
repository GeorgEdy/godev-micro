
var text = document.getElementById('textul');
text.addEventListener("keyup", function() {
	var cuvinte = text.value.trim().split(" ");
	var isValid = true;

	if (cuvinte.length != 2) {
		isValid = false;
	}

	if (cuvinte[0].length < 3) {
		isValid = false;
	}
	if  (cuvinte.length == 2 && cuvinte[1].length < 3) {
		isValid = false;
	}

	console.log(isValid);

	if (isValid) {
		document.getElementById('container').classList.add("valid");

	}
	else {

		document.getElementById('container').classList.remove("valid");
	}

});

