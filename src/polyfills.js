"use strict";
/**
 * Created by Administrator on 2017/3/23.
 */
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
}
else {
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map