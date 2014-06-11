module.exports = function(bh) {

    bh.match('select_type_radio', function(ctx) {
        if(ctx.tParam('_checkedOptions')) {
            var checkedOptions = ctx.tParam('_checkedOptions'),
                firstOption = ctx.tParam('_firstOption');

            if(!checkedOptions.length) {
                firstOption.checked = true;
                checkedOptions.push(firstOption);
            }

            ctx.content({
                elem : 'control',
                val : checkedOptions[0].val
            });
        }
    });

    bh.match('select__button', function(ctx) {
        ctx.content({
            elem : 'text',
            content : ctx.tParam('_checkedOption').text
        });
    });

};
