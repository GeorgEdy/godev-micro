var stars = document.getElementsByClassName('star');
var rating = document.getElementById('rating');
var theRating = document.getElementById('theRating');

for(var i =0; i <stars.length; i++) {
		var star = stars[i];

	star.addEventListener('mouseover',function () {
		rating = this.getAttribute("data-value");
		var length = parseInt(rating, 10);

		for (var i = 0; i < length; i++) {
			stars[i].classList.add('active');
		});

	star.addEventListener('mouseout', function() {
		for (var j=0; j<stars.length; j++) {
			stars[j].classList.remove('active');
		}
	});

}