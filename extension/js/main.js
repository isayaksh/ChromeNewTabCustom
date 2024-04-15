window.onload = function() {
    document.getElementById("search").focus(); // input 요소에 포커스 설정
};

function searchGoogle() {
    var query = document.getElementById("search").value; // 입력된 검색어 가져오기
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query); // 현재 창에서 Google 검색 페이지로 이동
}

chrome.storage.local.get('urls', (data) => {
    const urls = data.urls;

    const ulElement = document.getElementById('urls-list');
    
    urls.forEach(obj => {
        const liElement = document.createElement('li');
        const textNode = document.createTextNode(`${obj.date}: ${obj.url}`);
        liElement.appendChild(textNode);
        ulElement.appendChild(liElement);
    });

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const urls = message.urls;
    // index.html로 데이터를 전달
    const urlsElement = document.getElementById('urls');
    urlsElement.textContent = urls.join(', '); // 예시: 배열을 문자열로 변환하여 출력
});