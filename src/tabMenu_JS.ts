const root : HTMLElement = document.getElementById('root') as HTMLDivElement;

const ul : HTMLElement = document.createElement('ul') as HTMLUListElement;

const nameArr : string[] = ["구하림","김정수","송이현","이연승","정호연"];

nameArr.forEach((item : string) : void =>{
  const li : HTMLLIElement = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

