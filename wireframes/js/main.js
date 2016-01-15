var isEdited = null;
var cancel = $('.change-row-cancel');
var changeRow = $('.change-row');
var stele = $('.stars');
var myTable = $('#my-table');

var onSubmit = function () {
    if (isEdited) {
        store.update(isEdited.id, getFormData()).then(function () {
            drawTable(store);
            cancel.removeClass('display');
            changeRow.removeClass('display');
            isEdited = null;
        });
    } else {
        store.add(getFormData()).then(function () {
            drawTable(store);
        });
    }
    $('#form')[0].reset();
    stele.val("").change();
    return false;
};

function transform(bool) {
    if (bool == true) return 1;
    else return 0;
}

var getFormData = function () {
    return {
        name: $('[name="city"]').val(),
        stars: parseInt(stele.val()),
        visited: transform($('[name="check"]').is(":checked"))
    };
};
//table.find('tr') != $('tr')
// deseneaza tabel = drawForm()
var page = 1;
var totalPages = 1;

var drawTable = function (store) {
    store.getAll(page, sortField, sortDir).then(function (data) {
        $('tbody tr').remove();

        $.each(data.list, function () {
            var currentStars = '';
            for (i = 0; i <= this.stars - 1; i++) {
                currentStars = currentStars + "★";
            }
            this.stars = currentStars;
            this.visited = (this.visited == 0 ) ? "No" : "Yes";
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
var th = myTable.find('th');
var sortField = th.data('fieldname');
var sortDir = th.attr('data-sorttype');

var sortUp = $('.sort-up');
var sortDown = $('.sort-down');

th.click(function () {
    sortField = $(this).data('fieldname');

    if (sortDir == 'asc') {
        sortDir = 'desc';
        sortDown.attr('id', 'display');
        sortUp.attr('id', '');
    } else {
        sortDir = 'asc';
        sortDown.attr('id', '');
        sortUp.attr('id', 'display');
    }
    $(this).attr('data-sorttype', sortDir);

    drawTable(store);
});

function attachEvents() {
    $('.remove').on('click', function () {
        if (confirm("Are you sure?")) {
            var id = $(this).closest('tr').data('id');
            store.delete(id).then(function () {
                drawTable(store);
            });
        }

        return false;
    });

    var checked = $('input[name="check"]');
    $('.edit').on('click', function () {
        var id = $(this).closest('tr').data('id');
        store.get(id).then(function (data) {
            isEdited = data;
            $('input[name="city"]').val(data.name);
            stele.val(data.stars).change();

            if (data.visited == "1") {
                checked.prop("checked", true);
            } else {
                checked.prop("checked", false);
            }
        });
        changeRow.addClass('display');
        cancel.addClass('display');
    });
}

cancel.click(function () {
    $('#form')[0].reset();
    cancel.removeClass('display');
    changeRow.removeClass('display');
    stele.val("").change();
    isEdited = null;

    return false;

});

$('.icon').click(function () {
    $('.overlay').attr('id', '');
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

    $('#form').submit(onSubmit);
    drawTable(store);
    $('[name="stea"]').stars({
        stars: 5
    });

    var tbody = $('tbody');
    tbody.on('click', '.nume', function () {
        var text = $(this).text();
        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?q=" + text + "&api_key=dc6zaTOxFJmzC&limit=1",
            type: 'GET',
            'Content-Type': 'application/json'
        }).done(function (data) {
            if (data.data.length == 0) {
                alert('Sorry, no gif found');
            } else {
                $(".overlay").attr('id', 'display');
                $.each(data.data, function (index) {
                    var gifImage = data.data[index].images.original.url;
                    $('.gif-here').html('<img src = "' + gifImage + '">');
                });
            }
        });
    });
});


/*
 q - search query term or phrase
 limit - (optional) number of results to return, maximum 100. Default 25
 offset - (optional) results offset, defaults to 0
 rating - limit results to those rated (y,g, pg, pg-13 or r).
 fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)




 */











