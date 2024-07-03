document.addEventListener('DOMContentLoaded', () => {
  // 스타일을 추가하는 함수
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .tab-menu {
        display: flex;
        list-style: none;
        padding: 0;
      }
      .tab-menu li {
        margin: 0 10px;
        cursor: pointer;
      }
      .tab-content {
        display: none;
      }
      .tab-content.active {
        display: block;
      }
    `;
    document.head.appendChild(style);
  }

  // 탭 메뉴 아이템 목록
  const tabItems = [
    { id: 'guha-rim', name: '구하림', content: '구하림의 콘텐츠' },
    { id: 'kim-jeong-su', name: '김정수', content: '김정수의 콘텐츠' },
    { id: 'song-yi-hyun', name: '송이현', content: '송이현의 콘텐츠' },
    { id: 'lee-yeon-seung', name: '이연승', content: '이연승의 콘텐츠' },
    { id: 'jeong-ho-yeon', name: '정호연', content: '정호연의 콘텐츠' },
  ];

  // 탭 메뉴와 콘텐츠를 생성하는 함수
  function createTabMenu() {
    const tabMenu = document.createElement('ul');
    tabMenu.className = 'tab-menu';

    const tabContentContainer = document.createElement('div');
    tabContentContainer.id = 'tab-content-container';

    tabItems.forEach((item) => {
      // 탭 메뉴 아이템 생성
      const tabMenuItem = document.createElement('li');
      tabMenuItem.dataset.tab = item.id;
      tabMenuItem.textContent = item.name;
      tabMenu.appendChild(tabMenuItem);

      // 탭 콘텐츠 생성
      const tabContent = document.createElement('div');
      tabContent.id = item.id;
      tabContent.className = 'tab-content';
      tabContent.textContent = item.content;
      tabContentContainer.appendChild(tabContent);
    });

    document.body.appendChild(tabMenu);
    document.body.appendChild(tabContentContainer);
  }

  // 탭 콘텐츠 표시 함수
  function showTabContent(tabId: string) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach((content) => {
      if (content.id === tabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  // 해시 변경 이벤트 처리 함수
  function handleHashChange() {
    const hash = window.location.hash.substring(1); // 해시에서 '#' 제거
    if (hash) {
      showTabContent(hash);
    }
  }

  // 초기화 함수
  function init() {
    addStyles(); // 스타일 추가
    createTabMenu();
    handleHashChange();

    const tabMenu = document.querySelectorAll('.tab-menu li');
    tabMenu.forEach((tab) => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        if (tabId) {
          window.location.hash = tabId;
        }
      });
    });

    window.addEventListener('hashchange', handleHashChange);
  }

  // 초기화 함수 호출
  init();
});
