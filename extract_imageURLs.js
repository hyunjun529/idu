(function() {
	'use strict';

	// img 태그 추출
	var links = [].slice.apply(document.getElementsByTagName('img'));;
	
	links = links.map(function(element) {
	  var href = element.src;
	  var hashIndex = href.indexOf('#');
	  if (hashIndex >= 0) {
		href = href.substr(0, hashIndex);
	  }
	  return href;
	});
	
	// 유요하지 않은 링크
	links = links.filter(function(val){ return (val != '')?(true):(false); });
	
	// 중복되는 링크
	links = links.filter(function(val, key, ary){ return ary.indexOf(val) == key; });
	
	// css background-image url('') 추출
	var links2 = [];
	for (var i = 0; i < document.styleSheets.length; i++) {
		var cssRules = document.styleSheets[i].cssRules;
		if (cssRules) {
			for (var j = 0; j < cssRules.length; j++) {
				var style = cssRules[j].style;
				if (style) {
					if(style.backgroundImage){
						links2.push(style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, ''));
					}
				}
			}
		}
	}
	// 상대경로 체크
	
	// css background, tags인지 구분할 것
	chrome.extension.sendRequest(links);

}());