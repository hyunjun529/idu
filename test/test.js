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
  it('extract .png', function(){
  });
  it('extract .jpg', function(){

  });
  it('extract .gif', function(){

  });
  it('extract .jpeg', function(){

  });
});

describe('Extract Video Tag', function(){
  it('extract .mp4', function(){

  });
  it('extract .webm', function(){

  });
});

describe('Extract CSS Prop', function(){
  it('extract ', function(){

  });
  it('extract ', function(){

  });
  it('extract ', function(){

  });
  it('extract ', function(){

  });
  it('extract ', function(){

  });
  it('filter initial', function(){

  });
  it('filter inherit', function(){

  });
  it('filter ', function(){

  });
  it('filter ', function(){

  });
});