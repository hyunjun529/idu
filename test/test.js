var assert = require('assert');

var jsdom = require('jsdom');
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
var win = doc.defaultView;
global.document = doc;
global.window = win;

global.chrome = require('sinon-chrome');

describe('HTML Extraction', function() {
  var stack = [ 'AssertionError.png'
  , 'at EventEmitter.<anonymous> (/usr/local/dev/test.js:16:12)'
  , 'at Context.<anonymous> (/usr/local/dev/test.js:19:5)'];

  describe('<img>', function() {
    it('is possible .png', function() {
      document.body.appendChild(document.createElement('img'));
      var tmp = document.getElementsByTagName('img');
      assert.notEqual([], tmp);
    });
    it('is possible .jpg', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('is possible .jpeg', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('is possible .gif', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('is possible .png', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
  });

  describe('<video>', function() {
    it('is possible .webm', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
    it('is possible .mp4', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
  });
});

describe('CSS Extraction', function() {
  describe('backgroundImage', function(){
    it('is possible load property', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
    });
  });
});