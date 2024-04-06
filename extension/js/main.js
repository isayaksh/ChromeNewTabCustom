window.onload = function() {
    document.getElementById("search").focus(); // input 요소에 포커스 설정
};

function searchGoogle() {
    var query = document.getElementById("search").value; // 입력된 검색어 가져오기
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query); // 현재 창에서 Google 검색 페이지로 이동
}