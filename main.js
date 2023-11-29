chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.executeScript(null, {code: `let e=window.open();e.location.href="javascript:chrome=opener.chrome;chrome.developerPrivate.loadUnpacked();";e.close();`});
});