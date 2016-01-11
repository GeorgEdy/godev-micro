var i = 0;
var store = (function () {
    // private

    //public
    var theUrl = "http://server.godev.ro:8080/api/george2/entries";

    var headers = {
        'Content-Type': 'application/json'
    };

    return {
        /*        getAll: function () {
         return new Promise(function (resolve, reject) {
         resolve(data);
         });*/
        getAll: function () {
            return new Promise(function (resolve, reject) {
                $.ajax(theUrl, {
                    type: 'GET',
                    headers: headers
                }).done(function (data) {
                    resolve(data.list);
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
                });
            });
        },
        update: function (id, updateData) {
            return new Promise(function (resolve, reject) {
                
                $.each(data, function (index) {
                    if (this.id == id) {
                        data[index] = updateData;
                        resolve(data);
                    }
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