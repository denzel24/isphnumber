'use strict';

module.exports = function isPhNumber(value) {
    if(!value) {
        throw new TypeError('expected a value');
    }
    let val = value.toString();
    const n = val.replace(/\s/g, ""); //remove white space
    const pattern = /^(09|\+639|639)\d{9}$/gm;
    
    return n.match(pattern) ? true : false;
}