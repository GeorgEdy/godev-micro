var i = 0;
var store = (function () {
    // private

    //public
    var theUrl = "http://server.godev.ro:8080/api/george2/entries";

    var headers = {
        'Content-Type': 'application/json'
    };

    return {
        getAll: function (page) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl +"?page=" +page, {
                    type: 'GET',
                    headers: headers
                }).done(function (data) {
                    resolve(data);
                });
            });
        },
        get: function (id) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl + "/" + id, {
                    type: 'GET',
                    headers: headers
                }).done(function (data) {
                    resolve(data);
                }).fail(function(){
                    console.log('fail');
                });
            });
        },

        add: function (item) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl, {
                    type: 'POST',
                    headers: headers,
                    data: JSON.stringify(item)
                }).done(function (data) {
                    resolve(data);
                }).fail(function(){
                   alert('Wrong data input');
                });
            });
        },
        update: function (id, updateData) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl + "/" + id, {
                    type: 'PUT',
                    headers: headers,
                    data: JSON.stringify(updateData)
                }).done(function (data) {
                    resolve(data);
                }).fail(function(){
                    console.log('fail');
                });
            });
        },

        delete: function (id) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl + "/" + id, {
                    type: 'DELETE',
                    headers: headers
                }).done(resolve);
            });
        }
    };
})
();