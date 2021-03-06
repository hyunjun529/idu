var expect = chai.expect;
var should = chai.should();

describe('Extract Img Tag', () => {

  const extImg = {
    res : TheFunctionInsertedInTheChromeExtensionForExtractImageURL.extractImgTag(),
    check : (str => extImg.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', () => {
    it('extract .png to Img Tag', () => {
      extImg.check('.png').should.exist;
    });
    
    it('extract .jpg to Img Tag', () => {
      extImg.check('.jpg').should.exist;
    });
    
    it('extract .gif to Img Tag', () => {
      extImg.check('.gif').should.exist;
    });
    
    it('extract .jpeg to Img Tag', () => {
      extImg.check('.jpeg').should.exist;
    });
  });

  describe('exception handling extracted url from src', () => {
    it('filter location hash to URL', () => {
      should.not.exist(extImg.check('#'));
    });

    it('parsing relative path', () => {
      extImg.check('.jpg').should.exist;
    });
    
    xit('twitter:large img; PENDING: twitter img thumb path is so exceptional', () => {
    });
  });

});

describe('Extract Video Tag', () => {

  const extVideo = {
    res : TheFunctionInsertedInTheChromeExtensionForExtractImageURL.extractVideoTag(),
    check : (str => extVideo.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', () => {
    it('extract .mp4 to Video Tag has Source Tag', () => {
      extVideo.check('.mp4').should.exist;
    });

    it('extract .webm to Video Tag has src attr', () => {
      extVideo.check('.webm').should.exist;
    });
  });

  describe('check list of extracting tags', () => {
    xit('none src video tag; PENDING: if you see this message then everything is ok', () => {
      
    });
  });
});

describe('Extract CSS Prop', () => {

  const extCSS = {
    res : TheFunctionInsertedInTheChromeExtensionForExtractImageURL.extractCssBackgroundImageProp(),
    check : (str => extCSS.res.find(e => e.search(str) >= 0))
  };

  describe('check list of extracting tags', () => {

    it('extract .png to CSS', () => {
      extCSS.check('.png').should.exist;
    });

    it('extract .jpg to CSS', () => {
      extCSS.check('.jpg').should.exist;
    });
    
    it('extract .gif to CSS', () => {
      extCSS.check('.gif').should.exist;
    });
    
    it('extract .jpeg to CSS', () => {
      extCSS.check('.jpeg').should.exist;
    });    
  });

  describe('is removed property that not formated url?', () => {

    it('filter none to CSS', () => {
      should.not.exist(extCSS.check('none'));
    });

    it('filter inherit to CSS', () => {
      should.not.exist(extCSS.check('inherit'));
    });
    
    it('filter initial to CSS', () => {
      should.not.exist(extCSS.check('initial'));
    });

    it('complete URL to relative path', () => {
      should.not.exist(extCSS.check('\\.\\.'));
    });

    it('complete URL to without root url', () => {
      var hasNotHTTP = extCSS.res.map(e => e.search("http") !== -1);
      hasNotHTTP.should.not.contain(false);
    });

    it('filter not url background-image props', () => {
      should.not.exist(extCSS.check('linear'));
    });
    
    it('complete URL to without url option', () => {
      extCSS.check('wiki').should.exist;
    });
    
    xit('filter prop that not URL()', () => {
      should.not.exist(extCSS.check('antiquewhite'));
    });

    xit('already complete URL; PENDING: itsuka... ex: -webkit-', () => {

    });
  });
});

describe('Category URLs', () => {

  const cate = categorization(TheFunctionInsertedInTheChromeExtensionForExtractImageURL.extractedURL);

  describe('about host', () => {

    it('check exist host', () => {
      cate.map(e=> e.host.should.not.null)
    });

    it('check external host', () => {
      cate.findIndex(e=> e.host == 'http://en.touhouwiki.net/').should.be.above(0)
    });

    xit('check complete host; PENDING: not found bug', () => {

    });
  });

  describe('about path', () => {

    it('check complete path', () => {

    });
    
    it('check complete path', () => {

    });

    it('searching same paths', () => {

    });
  });
  
  describe('about extension', () => {

    it('check all extension', () => {
      cate.map(e=> e.ext.should.not.null );
    });
    
    it('check all extensions count', () => {

    });
    
    it('check video or image', () => {

    });
  });
});