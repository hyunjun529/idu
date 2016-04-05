var extractedURL = [];
var regForDataImage = new RegExp(/data:image/i);

function imgTagExtraction(){
  var tags;

  tags = Array.from(document.querySelectorAll('img'));
  tags = tags.map(e => e.src.split("#")[0]);
  
  return tags;
}

function videoTagExtraction(){
  var tags;
  
  tags = Array.from(document.querySelectorAll('video'));
  tags = tags.map(e => {
    var videoSrc;
    
    videoSrc = e.src;
    
    if(!videoSrc || videoSrc === ""){
      if(e.getElementsByTagName("source").length <= 0){
        videoSrc = "";
      } else {
        if(e.getElementsByTagName("source")[0].hasAttribute('src'))
          videoSrc = e.getElementsByTagName("source")[0].src;
      }
    }
    
    videoSrc = videoSrc.split("#")[0];
    
    return videoSrc;
  });

  return tags;
}

function cssBackgroundExtraction(){
  var links = [];
  var aryPathname = window.location.pathname.split('/').filter(v => v !== "");
  var i, j;

  for (i = 0; i < document.styleSheets.length; i++) {
    var cssRules = document.styleSheets[i].cssRules;

    if (cssRules) {
      for (j = 0; j < cssRules.length; j++) {
        var style = cssRules[j].style;

        if (style) {
          if(style.backgroundImage){
            if(style.backgroundImage.search('url') < 0){
              continue;
            }
            links.push(style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''));
          }
        }
      }
    }
  }

  links = links.filter(v => v !== "none");
  links = links.filter(v => v !== "initial");
  links = links.filter(v => v !== "inherit");
  links = links.map(e =>{
    
    var cntCallingParent;
    var fullUrl;

    cntCallingParent = e.split('..').length;
    
    fullUrl = window.location.protocol + "//" + window.location.host;
    
    if(e.search('http') > -1) {
      fullUrl = e;
    } else if(e.search('//') > -1){
      fullUrl = window.location.protocol + e;
    } else if(e[0] === '/'){
      fullUrl += e;
    } else {
      for(var i = 0; i < cntCallingParent - 1; i++){
        fullUrl += '/' + aryPathname[i];
      }
      for(var i = 0; i < cntCallingParent - 1; i++){
        e = e.substring(3);
      }
      fullUrl += '/' + e;
    }

    return fullUrl;
  });

  return links;
}

extractedURL =
imgTagExtraction()
.concat(cssBackgroundExtraction())
.concat(videoTagExtraction());

extractedURL = extractedURL.filter(v => v != "");
extractedURL = extractedURL.filter(v => !regForDataImage.test(v));

extractedURL = extractedURL.filter((i, v) => extractedURL.indexOf(i) == v);

chrome.extension.sendRequest(extractedURL);