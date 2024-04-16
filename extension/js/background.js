chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        title: 'Save page URL',
        id: 'Save',
        contexts: ['all'],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'Save') {

        const url = tab.url; // 현재 페이지의 URL 가져오기
        let today = getCurrentDateTime();

        chrome.storage.local.get('urls', (data) => {
            const urls = data.urls || [];

            urls.push({date: today, url: url});

            chrome.storage.local.set({ 'urls': urls }, () => {
                console.log('URL 저장 완료!');
            });

        })

    }
});

function getCurrentDateTime() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}