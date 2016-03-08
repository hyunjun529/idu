function imgTagExtraction(){
  var tags = [].slice.apply(document.getElementsByTagName('img'));

  tags = tags.map(function(element) {
    var href = element.src;
    var hashIndex = href.indexOf('#');
    if (hashIndex >= 0) {
      href = href.substr(0, hashIndex);
    }
    return href;
  });
  tags = tags.filter(function(val){ return (val != '')?(true):(false); });
  tags = tags.filter(function(val, key, ary){ return ary.indexOf(val) == key; });
  return tags;
}

 function videoTagExtraction(){
  var tags = [].slice.apply(document.getElementsByTagName('video'));

  tags = tags.map(function(element) {
    var href = element.src;
    var hashIndex = href.indexOf('#');
    if (hashIndex >= 0) {
      href = href.substr(0, hashIndex);
    }
    return href;
  });
  tags = tags.filter(function(val){ return (val != '')?(true):(false); });
  tags = tags.filter(function(val, key, ary){ return ary.indexOf(val) == key; });
  return tags;
}

function cssBackgroundExtraction(){
  var links = [];
  for (var i = 0; i < document.styleSheets.length; i++) {
    var cssRules = document.styleSheets[i].cssRules;
    if (cssRules) {
      for (var j = 0; j < cssRules.length; j++) {
        var style = cssRules[j].style;
        if (style) {
          if(style.backgroundImage){
            links.push(style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''));
          }
        }
      }
    }
  }
  return links;
}
var res = imgTagExtraction()
.concat(cssBackgroundExtraction())
.concat(videoTagExtraction());

chrome.extension.sendRequest(res);

//--

function isEven(num) {
  if (num%2 !== 0) return false;
  return true;
}