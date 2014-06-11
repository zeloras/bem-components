module.exports = function(bh) {

    bh.match('select', function(ctx, json) {
        if(!ctx.mod('type')) throw Error('Can\'t build select without type modifier');

        var options = json.options,
            i = 0, j,
            optionOrGroup, option, firstOption, checkedOptions = [];

        while(optionOrGroup = options[i++]) { // NOTE: because of possible performance bust
            if(optionOrGroup.group) {
                j = 0;
                while(option = optionOrGroup[j++]) {
                    i === 1 && j === 1 && (firstOption = option);
                    option.checked && checkedOptions.push(option);
                }
            } else {
                i === 1 && (firstOption = optionOrGroup);
                optionOrGroup.checked && checkedOptions.push(optionOrGroup);
            }
        }

        ctx.tParam('_select', json);
        ctx.tParam('_checkedOptions', checkedOptions);
        ctx.tParam('_firstOption', firstOption);

        ctx.js({
            name : ctx.name,
            optionsMaxHeight : ctx.optionsMaxHeight
        });

        ctx.content([
            { elem : 'button' },
            {
                block : 'popup',
                mods : { theme : ctx.mod('type'), autoclosable : true },
                js : { directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] },
                content : { block : json.block, mods : ctx.mods(), elem : 'menu' }
            }
        ], true);

    });

};
