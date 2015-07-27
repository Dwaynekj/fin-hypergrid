'use strict';

(function() {

    Polymer('fin-hypergrid-data-model-decorator-cell-provider', { /* jshint ignore:line  */

        getCellRenderer: function(config, x, y, untranslatedX, untranslatedY) {
            var renderer;
            var provider = this.getCellProvider();
            config.x = x;
            config.y = y;
            config.untranslatedX = untranslatedX;
            config.untranslatedY = untranslatedY;
            if (config.untranslatedX < 1 || config.untranslatedY < 2) {
                renderer = provider.cellCache.simpleCellRenderer;
            } else {
                renderer = provider.getCell(config);
            }
            renderer.config = config;
            return renderer;
        },

    });

})();
