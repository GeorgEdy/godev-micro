/**
 * Created by George Dinu on 07.01.2016.
 */
    var i=1;
var store = (function () {
    // private
    var data = [
        {
            name: 'bucharest',
            visited: 1,
            id: i
        }
    ];

    //public
    return {
        getAll: function () {
            return new Promise(function (resolve, reject) {
                resolve(data);
            });
        },
        add: function (item) {
            return new Promise(function (resolve, reject) {
                data.push(item);
                item.id = ++i;
                resolve(data);
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
                $.each(data, function (index) {
                    if (this.id == id) {
                        data.splice(index, 1);
                        resolve(data);
                    }
                });
            });
        }
    };
})();