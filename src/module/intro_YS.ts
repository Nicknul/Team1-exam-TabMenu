// CSS 스타일을 추가하는 함수
function addStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
  .tab-content {
    display: none;
  }
  .active {
    display: block;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  li a {
    text-decoration: none;
    color: #333;
  }
  li a:hover {
    text-decoration: underline;
  }
  li.active {
    background-color: #ddd;
  }
`;
  document.head.appendChild(style);
}

// HTML 구조를 생성하는 함수
function createHTMLStructure(): string {
  return `
    <ul>
      <li><a href="#tab1">이연승</a></li>
      <li><a href="#tab2">정호연</a></li>
      <li><a href="#tab3">구하림</a></li>
      <li><a href="#tab4">송이현</a></li>
      <li><a href="#tab5">김정수</a></li>
    </ul>

    <div id="tab1" class="tab-content">안녕하세요 제 이름은 이연승 입니다.</div>
    <div id="tab2" class="tab-content">안녕하세요 제 이름은 정호연 입니다.</div>
    <div id="tab3" class="tab-content">안녕하세요 제 이름은 구하림 입니다.</div>
    <div id="tab4" class="tab-content">안녕하세요 제 이름은 송이현 입니다.</div>
    <div id="tab5" class="tab-content">안녕하세요 제 이름은 김정수 입니다.</div>
  `;
}

// 콘텐츠를 업데이트하는 함수
function updateContent() {
  const hash = window.location.hash;
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.classList.remove('active');
    if (hash && `#${tab.id}` === hash) {
      tab.classList.add('active');
    }
  });

  if (!hash) {
    tabs[0].classList.add('active'); // 기본적으로 첫 번째 탭을 활성화합니다.
  }
}

// 클릭 이벤트를 처리하는 함수
function handleClick(event: Event) {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const id = target.getAttribute('href');
  if (id) {
    window.location.hash = id;
  }
}

// 초기화 함수
function init() {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = createHTMLStructure();
    window.addEventListener('hashchange', updateContent);
    updateContent();

    const links = root.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });
  }
  addStyles();
}

// 초기화 함수 호출
init();
