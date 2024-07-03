// 변수 선언부

const root : HTMLElement = document.getElementById('root') as HTMLDivElement;

const ul : HTMLElement = document.createElement('ul') as HTMLUListElement;

const content : HTMLDivElement = document.createElement('div');

const nameArr : string[] = ["구하림","김정수","송이현","이연승","정호연"];

// nameArr를 사용하여 li태그를 가공 및 ul에 append
nameArr.forEach((item : string, index : number) : void =>{
  const li : HTMLLIElement = document.createElement('li');
  li.innerHTML = `<a href="#menu${index}">${item}</a>`;
  li.setAttribute('id', `menu${index}`)
  li.addEventListener('click',() : void => {
    console.log(window.location.hash);
  })
  ul.appendChild(li);
});


// 가공된 요소들 root로 append
root.appendChild(ul);
root.appendChild(content);

// tabMenu를 핸들링하는 부분
function changeTab() : void {
  // 기존의 textContent 비우는 작업.
  content.textContent = '';
  // 시작 타겟, 해시가 변경되지않는다면 #menu0를 지정.
  const startTarget = window.location.hash || "#menu0";
  // 클릭된 해쉬를 할당.
  const chooseTarget = document.getElementById(`${startTarget.substring(1)}`);
  // 만약 chooseTarget이 있다면? 해당 chooseTarget에 따라서 innerHTML핸들링
  if(chooseTarget) {
    if(chooseTarget?.textContent === '김정수') {
      content.innerHTML = `<h1>안녕 난 ${chooseTarget.textContent}야</h1>`; 
    } else {
      content.innerHTML = `<h1>안녕 난 ${chooseTarget.textContent}이야</h1>`; 
    }
  } 
};

// 문서가 로딩되면 실행하는 함수
document.addEventListener('DOMContentLoaded', function () {
  changeTab();


  // 해쉬가 변경되면 실행하는 이벤트
  window.addEventListener('hashchange', changeTab);
});
