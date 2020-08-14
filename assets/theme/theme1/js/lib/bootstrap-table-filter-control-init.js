$(document).ready(function() {
    var $table = $('#table');
    var data = [];

    for (var i = 1; i <= 10; i++) {
        data.push({
            "id": i,
            "name": "Status " + i,
            "price": "$" + Math.ceil(Math.random() * 100)
        });
    }

    $table.bootstrapTable({
        iconsPrefix: 'mb-icon',
        icons: {
            paginationSwitchDown:'mb-icon-arrow-square-down',
            paginationSwitchUp: 'mb-icon-arrow-square-down up',
            refresh: 'mb-icon-refresh',
            toggle: 'mb-icon-list-square',
            columns: 'mb-icon-list-rotate',
            export: 'mb-icon-download',
            detailOpen: 'mb-icon-plus',
            detailClose: 'mb-icon-minus-1'
        },
        paginationPreText: '<i class="mb-icon mb-icon-arrow-left"></i>',
        paginationNextText: '<i class="mb-icon mb-icon-arrow-right"></i>',
        data: data
    });

    $('#table select').selectpicker({
        style: '',
        width: '100%',
        size: 8
    });
});
