chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: 'Save page URL',
        id: 'Prettier',
        contexts: ['all'],
    });
});