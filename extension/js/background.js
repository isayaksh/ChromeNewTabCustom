chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: 'Save page URL',
        id: 'Save',
        contexts: ['all'],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log("click");
    if (info.menuItemId === 'Save') {
        console.log("save");
    }
});