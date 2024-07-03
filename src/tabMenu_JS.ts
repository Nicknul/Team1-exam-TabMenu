const root : HTMLElement = document.getElementById('root') as HTMLDivElement;

const ul : HTMLElement = document.createElement('ul') as HTMLUListElement;

const nameArr : string[] = ["구하림","김정수","송이현","이연승","정호연"];

nameArr.forEach((item : string, index : number) : void =>{
  const li : HTMLLIElement = document.createElement('li');
  li.innerHTML = `<a id="#menu${index}">${item}</a>`;
  li.addEventListener('click',() : void => {
    console.log(window.location.hash);
  })
  ul.appendChild(li);
});


root.appendChild(ul);

// function changeTab() : void {
//   const content : HTMLDivElement = document.createElement('div');

//   const startTarget = window.location.hash || "#menu0";
//   const chooseTarget = document.
// };