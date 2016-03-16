var expect = chai.expect;
var should = chai.should();

describe('Extract Img Tag', function(){
  
  const extractor = {
    res : imgTagExtraction(),
    check : (str => res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){
    it('extract .png to Img Tag', function(){
      should.exist(extractor.check('.png'));
    });
    
    it('extract .jpg to Img Tag', function(){
      should.exist(extractor.check('.jpg'));
    });
    
    it('extract .gif to Img Tag', function(){
      should.exist(extractor.check('.gif'));
    });
    
    it('extract .jpeg to Img Tag', function(){
      should.exist(extractor.check('.jpeg'));
    });
  });
    
  describe('exception handling extracted url from src', function(){
    it('filter location hash to URL', function(){
      should.not.exist(extractor.check('#'));
    });

    it('parsing relative path', function(){
      should.exist(extractor.check('.jpg'));
    });
    
    it('how to twitter:large img?', function(){
      // twitter's img thumb path is so exceptional
      // ex) :large -> .jpg-large
    });
  });

});

describe('Extract Video Tag', function(){

  var res = videoTagExtraction();

  it('extract .mp4 to Video Tag has Source Tag', function(){
    var target = res.find( function(e){ return (e.search('.mp4') < 0)?(false):(true); });
    should.exist(target);
  });

  it('extract .webm to Video Tag has src attr', function(){
    var target = res.find( function(e){ return (e.search('.webm') < 0)?(false):(true); });
    should.exist(target);
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