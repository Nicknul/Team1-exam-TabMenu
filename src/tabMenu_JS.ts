const root : HTMLElement = document.getElementById('root') as HTMLDivElement;

const ul : HTMLElement = document.createElement('ul') as HTMLUListElement;

const content : HTMLDivElement = document.createElement('div');

const nameArr : string[] = ["구하림","김정수","송이현","이연승","정호연"];

nameArr.forEach((item : string, index : number) : void =>{
  const li : HTMLLIElement = document.createElement('li');
  li.innerHTML = `<a href="#menu${index}">${item}</a>`;
  li.setAttribute('id', `menu${index}`)
  li.addEventListener('click',() : void => {
    console.log(window.location.hash);
  })
  ul.appendChild(li);
});


root.appendChild(ul);
root.appendChild(content);

function changeTab() : void {
  content.textContent = '';
  const startTarget = window.location.hash || "#menu0";
  console.log(startTarget);
  console.log(startTarget.substring(1));
  const chooseTarget = document.getElementById(`${startTarget.substring(1)}`);
  if(chooseTarget) {
    if(chooseTarget?.textContent === '김정수') {
      content.innerHTML = `<h1>안녕 난 ${chooseTarget.textContent}야</h1>`; 
    } else {
      content.innerHTML = `<h1>안녕 난 ${chooseTarget.textContent}이야</h1>`; 
    }
  } 
};

document.addEventListener('DOMContentLoaded', function () {
  changeTab();

  window.addEventListener('hashchange', changeTab);
});
