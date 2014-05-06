var BEM = require('bem'),
    Q = BEM.require('Q'),
    logger = require('bem/lib/logger'),
    htmlDiffer = require('html-differ'),
    diffLogger = require('html-differ/lib/diff-logger'),
    readFile = BEM.util.readFile;

exports.API_VER = 2;

exports.techMixin = {

    storeBuildResults : function(output) {
        return Q.all([
            readFile(output + '.html', 'utf-8'),
            readFile(output + '.bh.html', 'utf-8')
        ]).spread(function(html1, html2) {
            var opts = { ignoreHtmlAttrs : ['id', 'for'] },
                isEqual = htmlDiffer.isEqual(html1, html2, opts);

            if(isEqual) return;
            console.log('----------------------------------------');
            logger.error('Difference in ', output);
            diffLogger.log(htmlDiffer.diffHtml(html1, html2, opts));
            console.log('----------------------------------------');
        });
    },

    getDependencies : function() {
        return ['bemjson.js', 'html', 'bh.html'];
    }

};
