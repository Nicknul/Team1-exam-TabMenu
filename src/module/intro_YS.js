// CSS 스타일을 추가하는 함수
function addStyles() {
    var style = document.createElement('style');
    style.innerHTML = "\n    .tab-content {\n      display: none;\n    }\n    .active {\n      display: block;\n    }\n  ";
    document.head.appendChild(style);
}
// HTML 구조를 생성하는 함수
function createHTMLStructure() {
    return "\n    <ul>\n      <li><a href=\"#tab1\">\uC774\uC5F0\uC2B9</a></li>\n      <li><a href=\"#tab2\">\uC815\uD638\uC5F0</a></li>\n      <li><a href=\"#tab3\">\uAD6C\uD558\uB9BC</a></li>\n      <li><a href=\"#tab4\">\uC1A1\uC774\uD604</a></li>\n      <li><a href=\"#tab5\">\uAE40\uC815\uC218</a></li>\n    </ul>\n\n    <div id=\"tab1\" class=\"tab-content\">\uC548\uB155\uD558\uC138\uC694 \uC81C \uC774\uB984\uC740 \uC774\uC5F0\uC2B9 \uC785\uB2C8\uB2E4.</div>\n    <div id=\"tab2\" class=\"tab-content\">\uC548\uB155\uD558\uC138\uC694 \uC81C \uC774\uB984\uC740 \uC815\uD638\uC5F0 \uC785\uB2C8\uB2E4.</div>\n    <div id=\"tab3\" class=\"tab-content\">\uC548\uB155\uD558\uC138\uC694 \uC81C \uC774\uB984\uC740 \uAD6C\uD558\uB9BC \uC785\uB2C8\uB2E4.</div>\n    <div id=\"tab4\" class=\"tab-content\">\uC548\uB155\uD558\uC138\uC694 \uC81C \uC774\uB984\uC740 \uC1A1\uC774\uD604 \uC785\uB2C8\uB2E4.</div>\n    <div id=\"tab5\" class=\"tab-content\">\uC548\uB155\uD558\uC138\uC694 \uC81C \uC774\uB984\uC740 \uAE40\uC815\uC218 \uC785\uB2C8\uB2E4.</div>\n  ";
}
// 콘텐츠를 업데이트하는 함수
function updateContent() {
    var hash = window.location.hash;
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
        if (hash && "#".concat(tab.id) === hash) {
            tab.classList.add('active');
        }
    });
    if (!hash) {
        tabs[0].classList.add('active'); // 기본적으로 첫 번째 탭을 활성화합니다.
    }
}
// 초기화 함수
function init() {
    var root = document.getElementById('root');
    if (root) {
        root.innerHTML = createHTMLStructure();
        window.addEventListener('hashchange', updateContent);
        updateContent();
    }
}
// 초기화 함수 호출
init();
