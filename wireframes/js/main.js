var isEdited = null;
var onSubmit = function () {
    if (isEdited) {
        store.update(getFormData().then(function () {
            drawTable(store);
        });
    } else {
        store.add(getFormData()).then(function () {
            drawTable(store);
        });
    }
    return false;

};

function transform(bool) {
    if (bool == true) return 1;
    else return 0;
}

var getFormData = function () {
    return {
        name: $('[name="city"]').val(),
        stars: parseInt($('.stars').val()),
        visited: transform($('[name="check"]').is(":checked"))
    };
};

var drawTable = function (store) {
    /*if ($("#add-row").attr('edit') == "true") {
     var di = $("#add-row").attr('edit-id');
     $("tr[data-id='" + di + "'").children("td").eq(0).text($('#cities').val());

     } else {*/
    store.getAll().then(function (data) {

        $('tbody tr').remove();
        $.each(data, function () {
            var tr = tmpl("item_tmpl", this);
            $('table tbody').append(tr);
        });
        attachEvents();
    });
    //}
};

function attachEvents() {
    $('.remove').on('click', function () {
        var id = $(this).closest('tr').data('id');
        store.delete(id).then(function () {
            drawTable(store);
        });

        return false;
    });

    $('.edit').on('click', function () {
        var id = $(this).closest('tr').data('id');
        store.get(id).then(function (data) {
            isEdited = data;
            $('input[name="city"]').val(data.name);
            $('.stars').val(data.stars).change();
            if (data.visited == "1") {
                $('input[name="check"]').prop("checked", true);
            } else {
                $('input[name="check"]').prop("checked", false);
            }
        });
        $('.change-row').addClass('display');
    });
}
/*var tr = $(this).closest('tr');
 $('input[name="city"]').val(tr.children('td[name="nume"]').text());
 $('.stars-container').children().each(function (i) {
 if (i < tr.children('td[name="stele"]').text()) {
 $(this).addClass("hover");
 }
 });
 if (tr.children('td[name="vizitat"]').text() == "Yes") {
 $('input[name="check"]').prop("checked", true);
 } else {
 $('input[name="check"]').prop("checked", false);
 }
 $('.change-row').addClass('display');

 return false;
 });*/

$(function () {
    $('#form').submit(onSubmit);
    drawTable(store);
});

$(function () {
    $('[name="stea"]').stars({
        stars: 5
    });
});
















