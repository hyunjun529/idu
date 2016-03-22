var expect = chai.expect;
var should = chai.should();

describe('Extract Img Tag', function(){

  const extImg = {
    res : imgTagExtraction(),
    check : (str => extImg.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){
    it('extract .png to Img Tag', function(){
      extImg.check('.png').should.exist;
    });
    
    it('extract .jpg to Img Tag', function(){
      extImg.check('.jpg').should.exist;
    });
    
    it('extract .gif to Img Tag', function(){
      extImg.check('.gif').should.exist;
    });
    
    it('extract .jpeg to Img Tag', function(){
      extImg.check('.jpeg').should.exist;
    });
  });

  describe('exception handling extracted url from src', function(){
    it('filter location hash to URL', function(){
      should.not.exist(extImg.check('#'));
    });

    it('parsing relative path', function(){
      extImg.check('.jpg').should.exist;
    });
    
    xit('twitter:large img; PENDING: twitter img thumb path is so exceptional', function(){
    });
  });

});

describe('Extract Video Tag', function(){

  const extVideo = {
    res : videoTagExtraction(),
    check : (str => extVideo.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){
    it('extract .mp4 to Video Tag has Source Tag', function(){
      extVideo.check('.mp4').should.exist;
    });

    it('extract .webm to Video Tag has src attr', function(){
      extVideo.check('.webm').should.exist;
    });
  });
});

describe('Extract CSS Prop', function(){

  const extCSS = {
    res : cssBackgroundExtraction(),
    check : (str => extCSS.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', function(){

    it('extract .png to CSS', function(){
      extCSS.check('.png').should.exist;
    });

    it('extract .jpg to CSS', function(){
      extCSS.check('.jpg').should.exist;
    });
    
    it('extract .gif to CSS', function(){
      extCSS.check('.gif').should.exist;
    });
    
    it('extract .jpeg to CSS', function(){
      extCSS.check('.jpeg').should.exist;
    });    
  });

  describe('is removed property that not formated url?', function(){

    it('filter inherit to CSS', function(){
      should.not.exist(extCSS.check('inherit'));
    });
    
    it('filter initial to CSS', function(){
      should.not.exist(extCSS.check('initial'));
    });

    it('complete URL to relative path', function(){
      should.not.exist(extCSS.check('\\.\\.'));
    });

    it('complete URL to withour root url', function(){
      var hasNotHTTP = extCSS.res.map(e => e.search("http") !== -1);
      hasNotHTTP.should.not.contain(false);
    });

    xit('filter color; PENDING: this case is not found', function(){

    });

    xit('already complete URL; PENDING: itsuka...', function(){

    });
  });
});