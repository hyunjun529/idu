var expect = chai.expect;
var should = chai.should();

describe('Extract Img Tag', function(){

  const extractor = {
    res : imgTagExtraction(),
    check : (str => res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){

    it('extract .png to Img Tag', function(){
      extractor.check('.png').should.exist;
    });
    
    it('extract .jpg to Img Tag', function(){
      extractor.check('.jpg').should.exist;
    });
    
    it('extract .gif to Img Tag', function(){
      extractor.check('.gif').should.exist;
    });
    
    it('extract .jpeg to Img Tag', function(){
      extractor.check('.jpeg').should.exist;
    });
  });

  describe('exception handling extracted url from src', function(){

    it('filter location hash to URL', function(){
      should.not.exist(extractor.check('#'));
    });

    it('parsing relative path', function(){
      extractor.check('.jpg').should.exist;
    });
    
    xit('twitter:large img; PENDING: twitter img thumb path is so exceptional', function(){
    });
  });

});

describe('Extract Video Tag', function(){

  const extractor = {
    res : videoTagExtraction(),
    check : (str => res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){

    it('extract .mp4 to Video Tag has Source Tag', function(){
      extractor.check('.mp4').should.exist;
    });

    it('extract .webm to Video Tag has src attr', function(){
      extractor.check('.webm').should.exist;
    });
  });
});

describe('Extract CSS Prop', function(){

  const extractor = {
    res : cssBackgroundExtraction(),
    check : (str => res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){
    
    it('extract .png to CSS', function(){
      extractor.check('.png').should.exist;
    });

    it('extract .jpg to CSS', function(){
      extractor.check('.jpg').should.exist;
    });
    
    it('extract .gif to CSS', function(){
      extractor.check('.gif').should.exist;
    });
    
    it('extract .jpeg to CSS', function(){
      extractor.check('.jpeg').should.exist;
    });    
  });

  describe('is removed property that not formated url?', function(){
    
    it('filter inherit to CSS', function(){
      should.not.exist(extractor.check('inherit'));
    });
    
    it('filter initial to CSS', function(){
      should.not.exist(extractor.check('initial'));
    });
    
    it('complete URL to relative path', function(){
      should.not.exist(extractor.check('..'));
    });
    
    it('complete URL to withour root url ', function(){
      var hasNotHTTP = extractor.res.map(e => e.search("http") !== -1);
      hasNotHTTP.should.not.contain(false);
    });

    it('filter color', function(){

    });
  });
});