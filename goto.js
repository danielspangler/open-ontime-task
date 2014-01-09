
function openOnTime(info, tab) {
  var selection = info.selectionText.trim();
  selection = selection.replace(/ot/gi, '');
  var subdomain = localStorage["subdomain"];
  if (!subdomain) {
  	alert("Please set a subdomain in the extension options");
  } else {
	  var newURL = "https://" + subdomain + ".ontimenow.com/viewitem.aspx?type=tasks&id=" + selection;
	  chrome.tabs.create({ index: tab.index+1, url: newURL });  
  }
}

var id = chrome.contextMenus.create({"title": "OnTime - Task", "contexts":["selection"],
                                       "onclick": openOnTime});


