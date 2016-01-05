var stars = document.getElementsByClassName('star');
var rating = document.getElementById('rating');
var theRating = document.getElementById('theRating');
var counter = document.getElementById("count");
var length;
var selected = 0;


for (var i = 0; i < stars.length; i++) {
    var star = stars[i];

    star.addEventListener('click', function () {
        rating = parseInt(this.getAttribute("data-value"), 10);
        length = parseInt(rating, 10);
        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.remove('active');
        }
        for (var j = 0; j < length; j++) {
            stars[j].classList.add('active');
        }
        selected = length;
    });


    star.addEventListener('mouseover', function () {
        rating1 = parseInt(this.getAttribute("data-value"), 10);
        length = parseInt(rating1, 10);
        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.remove('active');
        }
        for (var j = 0; j < length; j++) {
            stars[j].classList.add('active');
        }
    });
    star.addEventListener('mouseout', function () {
        rating1 = parseInt(this.getAttribute("data-value"), 10);
        length = parseInt(rating1, 10);
        for (var j = 0; j < length; j++) {
            stars[j].classList.remove('active');
        }
        for (var k = 0; k < selected; k++) {
            stars[k].classList.add('active');
        }
    });

}

var store = [];

var myTable = document.getElementById('my-table');
var tableBody = myTable.getElementsByTagName("tbody")[0];

var form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = input();

    if (isValidName(data)) {
        if (isValidCity(data)) {
            if (isValidRating(data)) {
                store.push(data);
                render(store);
                form.reset();
                var shows1 = document.getElementById('hidden1').style.display = "none";
                var shows2 = document.getElementById('hidden2').style.display = "none";
                var shows3 = document.getElementById('hidden3').style.display = "none";
                return shows1, shows2, shows3;
            }
            else {
                var show3 = document.getElementById('hidden3').style.display = "block";
                return show3;

            }
        }
        else {
            var show2 = document.getElementById('hidden2').style.display = "block";
            return show2;

        }
    }
    else {
        var show1 = document.getElementById('hidden1').style.display = "block";
        return show1;
    }


});

var isValidName = function (data) {
    return data.name != "";
};
var isValidCity = function (data) {
    return data.city != "";
};

var isValidRating = function (data) {
    return data.rating != null;
};

var render = function (store) {
    addRow(store);
    updateTotal(store);
    calculateAverage(store);
};

var addRow = function (store) {
    tableBody.innerHTML = '';
    for (var i = 0; i < store.length; i++) {
        var data = store[i];
        createRow(data);
    }
};

var updateTotal = function (arr) {
    counter.innerHTML = arr.length;
};

var calculateAverage = function () {

};
var input = function () {
    var input = document.getElementsByTagName('input');
    return {
        name: input[0].value,
        city: input[1].value,
        rating: rating
    }
};

var createRow = function (inputs) {
    var tr = document.createElement("tr");
    tr.innerHTML = tmpl("item_tmpl", inputs);
    tableBody.appendChild(tr);
};


tableBody.addEventListener('click', function () {
    if (rmv(event.target)) {
        removeRow(event.target);

    }
});

var rmv = function (target) {
    return target.classList.contains("remove");
};

var removeRow = function (target) {
    var index = getIndexOfButton(target);
    removeFromStore(store, index);
    render(store);
};

var getIndexOfButton = function (target) {
    var tr = target.parentNode.parentNode;
    var allTrs = tableBody.getElementsByTagName('tr');
    allTrs = [].slice.call(allTrs);
    var index = allTrs.indexOf(tr);
    return index;
};


var removeFromStore = function (store, index) {
    store.splice(index, 1);
};

// Create a map object and specify the DOM element for display.
function initMap() {
    var myLatLng = {lat: 44.4538, lng: 26.1047};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng
    });


    var geocoder = new google.maps.Geocoder();

    document.getElementById('add-row').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}

    function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('city').value;
        geocoder.geocode({'address': address}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                resultsMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }


