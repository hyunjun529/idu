var expect = chai.expect;
var should = chai.should();

describe('Compare Numbers', function() {
  it('1 should equal 1', function() {
    expect(1).to.equal(1);
  });
  it('2 should be greater than 1', function() {
    expect(2).to.be.greaterThan(1);
  });
});

describe('Is Even Tests', function() {
  it('Should always return a boolean', function() {
    expect(isEven(2)).to.be.a('boolean');
  });
  it('Calling isEven(76) sould return true.', function() {
    expect(isEven(76)).to.be.true;
  });

  it('Calling isEven(77) sould return false.', function() {
    expect(isEven(77)).to.be.false;
  });
});

describe('Extract HTML Tag', function(){
  var res = imgTagExtraction();
  it('extract .png to HTML Tag', function(){
    var target = res.find( function(e){ return (e.search('.png') < 0)?(false):(true); });
    should.exist(target);
  });
  it('extract .jpg to HTML Tag', function(){
    var target = res.find( function(e){ return (e.search('.jpg') < 0)?(false):(true); });
    should.exist(target);
  });
  it('extract .gif to HTML Tag', function(){
    var target = res.find( function(e){ return (e.search('.gif') < 0)?(false):(true); });
    should.exist(target);
  });
  it('extract .jpeg to HTML Tag', function(){
    var target = res.find( function(e){ return (e.search('.jpeg') < 0)?(false):(true); });
    should.exist(target);
  });
});

describe('Extract Video Tag', function(){
  it('extract .mp4 to Video Tag', function(){

  });
  it('extract .webm to Video Tag', function(){

  });
});

describe('Extract CSS Prop', function(){
  it('extract .png to CSS', function(){

  });
  it('extract .jpg to CSS', function(){

  });
  it('extract .gif to CSS', function(){

  });
  it('extract .jpeg to CSS', function(){

  });
  it('filter inherit to CSS', function(){

  });
  it('filter initial to CSS', function(){

  });
  it('complete URL to relative path', function(){

  });
  it('complete URL to withour root url ', function(){

  });
  it('filter color', function(){

  });
});