var theTable = document.getElementById('the-table');
var tableBody = theTable.getElementsByTagName("tbody")[0];

var isAddBtn = function (target) {
    return target.classList.contains("add-btn");
};

var createRow = function () {
    var tr = document.createElement("tr");
    tr.innerHTML = tmpl("item_tmpl", {});
    tableBody.appendChild(tr);
};

tableBody.addEventListener("click", function (event) {
    if (isAddBtn(event.target)) {
        event.preventDefault();
        if (isValid()) {
            lockInputs();
            createRow();
        }
    }

});
var lockInputs = function () {
    var lastTr = getLastTr();
    var inputs = getInputs(lastTr);
    inputs[0].readOnly = true;
    inputs[1].readOnly = true;
};
var getInputs = function (tr) {
    return tr.getElementsByTagName("input");
};

var getLastTr = function () {
    var trs = tableBody.children;
    var length = trs.length;
    return trs[length - 1];
};
var isValid = function () {
    var lastTr = getLastTr();
    var values = getValues(lastTr);
    return !!(isValidName(values.name) && isValidEmail(values.email));

};
var isValidName = function (name) {
    return name.length >= 2;
};
var getValues = function (tr) {
    var inputs = tr.getElementsByTagName("input");
    var name = inputs[0].value;
    var email = inputs[1].value;
    return {
        name: name,
        email: email
    };

};

var isValidEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
