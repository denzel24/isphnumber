'use strict';

module.exports = function isPhNumber(value) {
    if(!value) {
        throw new TypeError('expected a value');
    }
    const n = value.toString();
    const pattern = /(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})/g;
    
    
    return n.match(pattern) ? true : false;
}