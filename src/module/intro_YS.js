'use strict';
// intro_YS.ts
Object.defineProperty(exports, '__esModule', { value: true });
exports.showTabContent = showTabContent;
function showTabContent() {
  // 모든 탭 콘텐츠를 숨깁니다.
  var contents = document.querySelectorAll('.tab-content');
  contents.forEach(function (content) {
    return content.classList.remove('active');
  });
  // 현재 해시에 해당하는 탭 콘텐츠를 보이게 합니다.
  var hash = window.location.hash;
  if (hash) {
    var activeTab = document.querySelector(hash);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  }
}
// 페이지가 로드될 때와 해시가 변경될 때 탭 콘텐츠를 보여줍니다.
window.addEventListener('load', showTabContent);
window.addEventListener('hashchange', showTabContent);
