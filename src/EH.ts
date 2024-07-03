interface Tab {
  id: string;
  name: string;
  content: string;
}

const tabs: Tab[] = [
  { id: "tab1", name: "이현", content: "여긴 송이현의 페이지야" },
  { id: "tab2", name: "하림", content: "여긴 구하림의 페이지야" },
  { id: "tab3", name: "정수", content: "여긴 김정수의 페이지야" },
  { id: "tab4", name: "연승", content: "여긴 이연승의 페이지야" },
  { id: "tab5", name: "호연", content: "여긴 정호연의 페이지야" },
];

let tabLinks: string = "";
let tabContents: string = "";
tabs.forEach((tab: Tab): void => {
  tabLinks += `<a href="#${tab.id}">${tab.name}</a>`;
  tabContents += `<div id="${tab.id}" class="tab-content">${tab.content}</div>`;
});

const root: HTMLElement | null = document.getElementById("root");
if (root) {
  root.innerHTML = `
    <div class="tabs">
      ${tabLinks}
    </div>
    ${tabContents}
  `;
}

// 스타일을 동적으로 추가
const style: HTMLStyleElement = document.createElement(
  "style"
) as HTMLStyleElement;
style.innerHTML = `
  .tabs {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #f0f0f0;
  }
  .tab-content {
    display: none;
  }
  .tab-content.active {
    display: block;
  }
`;
document.head.appendChild(style);

function showTabFromHash(): void {
  const hash: string = location.hash;
  const tabContents: NodeListOf<HTMLDivElement> =
    document.querySelectorAll<HTMLDivElement>(".tab-content");
  tabContents.forEach((tab: HTMLDivElement): void => {
    if (hash === `#${tab.id}`) {
      tab.style.display = "block";
    } else {
      tab.style.display = "none";
    }
  });
}

window.addEventListener("hashchange", showTabFromHash);
window.addEventListener("load", showTabFromHash);

// 초기 로드 시 해시가 없는 경우 첫 번째 탭을 표시
if (!location.hash) {
  location.hash = "#tab1";
} else {
  showTabFromHash();
}
