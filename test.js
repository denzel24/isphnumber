'use strict';

require('mocha');
const assert = require('assert');
const isPhNumber = require('./');

describe('isPhNumber', function() {
    it('should return true if the value is Philippine number format:', function() {
      assert(isPhNumber(639123456789));
    });
  
    it('should work with strings:', function() {
      assert(isPhNumber('639123456789'));
      assert(isPhNumber('09123456789'));
      assert(isPhNumber('+639123456789'));
      assert(isPhNumber('+63 912 345 6789'));
      assert(isPhNumber('63 912 345 6789'));
      assert(isPhNumber('0912 345 6789'));
    });
  
    it('should throw an error when an invalid value is passed', function() {
      assert.throws(() => isPhNumber(), /expected a value/);
    });
  });