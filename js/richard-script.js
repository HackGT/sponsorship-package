$('#scroller table').each(function(){
    var table = $(this),
        fixedCol = table.clone(true),
        fixedWidth = table.find('th').eq(0).width(),
        tablePos = table.position();

    // Remove all but the first column from the cloned table
    fixedCol.find('th').not(':eq(0)').remove();
    fixedCol.find('tbody tr').each(function(){
        $(this).find('td').not(':eq(0)').remove();
    });

    // Set positioning so that cloned table overlays
    // first column of original table
    fixedCol.addClass('fixedCol');
    fixedCol.css({
        left: tablePos.left,
        top: tablePos.top
    });

    // Match column width with that of original table
    fixedCol.find('th,td').css('width',fixedWidth+'px');

    $('#scroller').append(fixedCol);
});