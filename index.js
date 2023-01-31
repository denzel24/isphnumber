'use strict';

module.exports = function isPhNumber(value) {
    if(!value) {
        throw new TypeError('expected a value');
    }
    const n = value.toString();
    const pattern = /^(09|\+639|639)\d{9}$/gm;
    
    
    return n.match(pattern) ? true : false;
}