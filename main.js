chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.get(null, (tab) => {
		if (tab.href.includes("chrome://extensions")) chrome.tabs.executeScript(id, {code: 'let e=window.open;e.location.href="javascript:opener.console.log(opener.chrome);";e.close();'});
	});
});
