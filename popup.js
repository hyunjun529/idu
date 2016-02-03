var allLinks = [];
var visibleLinks = [];

function showLinks() {
  var linksTable = document.getElementById('list');
  while (linksTable.children.length > 1) {
    linksTable.removeChild(linksTable.children[linksTable.children.length - 1])
  }
  for (var i = 0; i < visibleLinks.length; ++i) {
    var row = document.createElement('div');
    var col0 = document.createElement('div');
    var col1 = document.createElement('div');
	  
	row.className += 'row';
	
	var checkbox = document.createElement('input');
    checkbox.checked = true;
    checkbox.type = 'checkbox';
    checkbox.id = 'check' + i;
	col0.className += 'col-chk';
    col0.appendChild(checkbox);
	  
	col1.className += 'col-txt';
    col1.innerText = visibleLinks[i];
	
	var col2 = document.createElement('div');
	var img = document.createElement('img');
	img.src = visibleLinks[i];
	img.addEventListener("click", function(){
		console.debug(this.src);
		chrome.downloads.download({url: this.src}, function(id) { });
	});
	col2.className += 'col-img';
	col2.appendChild(img);
	
    row.appendChild(col0);
    row.appendChild(col1);
	row.appendChild(col2);
	  
    linksTable.appendChild(row);
  }
}

chrome.extension.onRequest.addListener(function(links) {
  for (var index in links) {
    allLinks.push(links[index]);
  }
  allLinks.sort();
  visibleLinks = allLinks;
  showLinks();
});

window.onload = function() {
	chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'send_links.js', allFrames: true});
    });
  });
};