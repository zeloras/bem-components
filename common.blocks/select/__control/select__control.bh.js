module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('name'),
                value : json.val
            });
    });
// value : JSON.stringify(this.ctx.val)
};
