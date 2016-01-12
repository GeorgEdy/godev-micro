var isEdited = null;
var onSubmit = function () {
    if (isEdited) {
        store.update(isEdited.id, getFormData()).then(function () {
            drawTable(store);

        });
    } else {
        store.add(getFormData()).then(function () {
            drawTable(store);
        });
    }
    $('#form')[0].reset();
    $('.stars').val("").change();
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
var page = 1;
var totalPages = 1;

var drawTable = function (store) {
    store.getAll(page).then(function (data) {
        $('tbody tr').remove();

        $.each(data.list, function () {
            var tr = tmpl("item_tmpl", this);
            $('table tbody').append(tr);
            $('#pagins').text(data.page);
        });

        totalPages = data.totalPages;
        $('#totalpagins').text(totalPages);
        attachEvents();
    });
};

$('#next').click(function () {
    if (page < totalPages) {
        page++;

        drawTable(store);
    }

    return false;
});

$('#prev').click(function () {
    if (page > 0) {
        page--;

        drawTable(store);
    }

    return false;
});

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
        $('.change-row-cancel').addClass('display');
    });
}

$('.change-row-cancel').click(function () {
    $('#form')[0].reset();
    $('.change-row-cancel').removeClass('display');
    $('.change-row').removeClass('display');
    $('.stars').val("").change();
    isEdited = null;

    return false;

});
$(function () {
    var gif = $(".gif");

    $(document).on({
        ajaxStart: function () {
            gif.addClass("display");
        },
        ajaxStop: function () {
            gif.removeClass("display");
        }
    });
    $('#form').not('.change-row-cancel').submit(onSubmit);
    drawTable(store);

});

$(function () {
    $('[name="stea"]').stars({
        stars: 5
    });
});
















