var operator = document.getElementById('select');
var a = document.getElementById('A');
var b = document.getElementById('B');

var listener = function() {

	var a = document.getElementById('A');
	var avalue =parseInt(a.value);

	var b = document.getElementById('B');
	var bvalue =parseInt(b.value);

	var result = document.getElementById('result');
	console.log(avalue,bvalue);
	if ( avalue && bvalue){
		if (operator.value == "+") {
			result.value = avalue + bvalue;
		}
		else if ( operator.value == "-") {
			result.value = avalue - bvalue;
		}
		else if ( operator.value == "*") {
			result.value = avalue * bvalue;
		}
		else if ( operator.value == "/") {
			result.value = avalue / bvalue;
		}
	}
	else {
	 result.value =	"Error!";
	}

};
operator.addEventListener("input", listener );
a.addEventListener("input", listener );
b.addEventListener("input", listener );


