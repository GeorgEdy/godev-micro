var onSubmit = function () {
    store.add(getFormData()).then(function () {
        drawTable(store);
    });

    return false;
};

var getFormData = function () {
    return {
        name: $('[name="city"]').val(),
        visited: $('[name="check"]').is(":checked")
    };
};

var drawTable = function (store) {
    store.getAll().then(function (data) {
        $('tbody tr').remove();
        $.each(data, function () {
            var tr = tmpl("item_tmpl", this);
            $('table tbody').append(tr);
        });
        attachEvents();
    });

};

function attachEvents() {
    $('.remove').on('click', function () {
        var id = $(this).closest('tr').data('id');
        store.delete(id).then(function () {
            drawTable(store);
        });

        return false;
    });
    $('.edit').on('click',function (){

    });
}

$(function () {
    $('#form').submit(onSubmit);
    drawTable(store);
});


















