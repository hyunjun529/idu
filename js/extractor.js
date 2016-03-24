var extractedURL = [];

function imgTagExtraction(){
  var tags;
  
  tags = Array.from(document.querySelectorAll('img'));
  tags = tags.map(e => e.src.split("#")[0]);
  tags = tags.filter(v => v != "");
  return tags;
}

 function videoTagExtraction(){
  var tags;
  
  tags = Array.from(document.querySelectorAll('video'));
  tags = tags.map(e => {
    var href;
    
    href = e.src;
    if(!href || href === ""){
      href = e.getElementsByTagName("source")[0].src;
    }
    href = href.split("#")[0];
    return href;
  });
  tags = tags.filter(v => v != "");
  tags = tags.filter(function(val, key, ary){ return ary.indexOf(val) == key; });
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

extractedURL = imgTagExtraction()
.concat(cssBackgroundExtraction())
.concat(videoTagExtraction());

chrome.extension.sendRequest(extractedURL);