var stars = document.getElementsByClassName('star');
var rating = document.getElementById('rating');
var theRating = document.getElementById('theRating');

for (var i = 0; i < stars.length; i++) {
    var star = stars[i];

    star.addEventListener('click', function () {
        rating = this.getAttribute("data-value");

        var length = parseInt(rating, 10);

        for (var j = 0; j < length; j++) {
            stars[j].classList.add('active');
        }
    });
}
var myTable = document.getElementById('my-table');
var tableBody = myTable.getElementsByTagName("tbody")[0];


var inputcity = document.getElementsByTagName('input');



var input = function () {
    var name = document.getElementById('name');
    name.innerHTML= tmpl("item");
    var city = document.getElementById('city');

};

var createRow = function () {
    var tr = document.createElement("tr");
    tr.innerHTML = tmpl("item_tmpl",{});
    tableBody.appendChild(tr);
};




var add = document.getElementById('add-row');

add.addEventListener('click', function (event) {
    event.preventDefault();
    input();
    createRow();
});



var rmv = document.getElementById('remove');

rmv.addEventListener("click", function () {

    var child = document.getElementById("trow");
    child.parentNode.removeChild(child);
});
