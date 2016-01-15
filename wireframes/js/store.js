var i = 0;
var store = (function () {/*
 var data=[
 {
 name: 'bucuresti',
 stars: 5,
 visited: 1,
 id: 1
 }
 ];*/
    // private

    //public
    var theUrl = "http://server.godev.ro:8080/api/george2/entries";

    var headers = {
        'Content-Type': 'application/json'
    };

    return {
        /*                getAll: function () {
         return new Promise(function (resolve, reject) {
         resolve(data);
         });*/
        getAll: function (page, sortField, sortDir) {
            return new Promise(function (resolve, reject) {
                if(sortField == undefined && sortDir == undefined){
                    var urlto = theUrl + "?page=" + page;
                }else{
                    var urlto = theUrl + "?page=" + page + "&sortField=" + sortField + "&sortDir=" + sortDir;
                }
                $.ajax(urlto, {
                    type: 'GET',
                    headers: headers
                }).done(function (data) {
                    resolve(data);
                }).fail(function () {
                    alert('An unknown error occured');
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
                }).fail(function () {
                    alert('An unknown error occured');
                });
            });
        },

        add: function (item) {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl, {
                    type: 'POST',
                    headers: headers,
                    data: JSON.stringify(item),
                    statusCode: {
                        409: function() {
                            alert("Wrong data input");
                        }
                    }
                }).done(function (data) {
                    resolve(data);
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
                }).fail(function () {
                    console.log('An unknown error occured');
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