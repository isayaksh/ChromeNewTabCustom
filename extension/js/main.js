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
        addMemoToBoard(obj.date, obj.url);

    });

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const urls = message.urls;
    // index.html로 데이터를 전달
    const urlsElement = document.getElementById('urls');
    urlsElement.textContent = urls.join(', '); // 예시: 배열을 문자열로 변환하여 출력
});

// memo를 만듭니다.
function createMemo(title, body) {
    const memo = document.createElement('div');
    memo.classList.add('memo');

    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = title;

    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');

    const bodyLink = document.createElement('a');
    bodyLink.href = body;
    bodyLink.textContent = body;
    bodyLink.target = '_blank'

    bodyDiv.appendChild(bodyLink);
    memo.appendChild(header);
    memo.appendChild(bodyDiv);

    return memo;
}

// board에 memo를 추가합니다.
function addMemoToBoard(title, body) {
    const board = document.getElementById('urls-list');
    const memo = createMemo(title, body);
    board.appendChild(memo);
}