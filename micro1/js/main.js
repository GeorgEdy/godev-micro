//Progress bar with randomly generated value
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


var button = document.getElementById('change');

button.addEventListener("click", function () {
    var progress = document.getElementById('prog');
    progress.value = generateRandomNumber(0, 100);
});
