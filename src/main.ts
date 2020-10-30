// defer attribute on script tag > script loads before DOMContentLoad
// tsconfig has the strictnull
// Line 5 works but causes an error message >>>
// Line 15: body.appendChild(title) > Object is possibly null
// const body: HTMLBodyElement | null = document.querySelector('body');
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const head: HTMLHeadElement = document.head;
const style: HTMLStyleElement = document.createElement('style');
const title: HTMLHeadingElement = document.createElement('h1');
title.innerText = "Manipulate the DOM with Typescript";
body.appendChild(title);

// Change background color with button
const backgroundButton: HTMLButtonElement = document.createElement('button');
backgroundButton.innerText = 'Change Background';
body.appendChild(backgroundButton);

const changeBackground = (element: HTMLElement, color: string): void => {
  element.setAttribute('style', `background-color: ${color}; transition: all 0.5s ease-in-out;`);
};

const newBackground = (): void => {
  const actualColor: string | null = body.style.backgroundColor;
  let randomColor: string = '#';
  const colorCharacters: string = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    randomColor += colorCharacters[Math.floor(Math.random() * colorCharacters.length)];
  };

  const newColor: string = actualColor === '' ? randomColor : '';

  changeBackground(body, newColor);
};

const addListener = (element: HTMLElement, eventTOListen: string, eventHandler: () => void): void => {
  element.addEventListener(eventTOListen, eventHandler);
};

const clickEvent: string = 'click';
addListener(backgroundButton, clickEvent, newBackground);

// Add +1 to the counter
const counterContainer: HTMLDivElement = document.createElement('div');
const counter: HTMLSpanElement = document.createElement('span');
const addOneButton: HTMLButtonElement = document.createElement('button');

body.appendChild(counterContainer);
counterContainer.appendChild(counter);
counterContainer.style.marginTop = '1rem';
counter.innerText = '0';
counter.setAttribute('style', 'margin: 1rem; font-size: 2rem;');
counterContainer.appendChild(addOneButton);
addOneButton.innerText = 'Add +1';
addOneButton.style.margin = '1rem';

const addOneToCounter = (): void => {
  let counterNumber: number = parseInt(counter.innerText);
  counterNumber++;
  counter.innerText = `${counterNumber}`;
};

addListener(addOneButton, clickEvent, addOneToCounter);



  


