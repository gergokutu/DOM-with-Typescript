// defer attribute on script tag > script loads before DOMContentLoad
// tsconfig has the strictnull
// Line 5 works but causes an error message >>>
// Line 15: body.appendChild(title) > Object is possibly null
// const body: HTMLBodyElement | null = document.querySelector('body');
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];

const title: HTMLHeadingElement = document.createElement('h1');
title.innerHTML = "Manipulate the DOM with Typescript";
body.appendChild(title);

// Change background color with button
const backgroundButton: HTMLButtonElement = document.createElement('button');
backgroundButton.innerHTML = 'Change Background';
body.appendChild(backgroundButton);

const changeBackground = (element: HTMLElement, color: string): void => {
  element.style.backgroundColor = color;
};

const newBackground = (): void => {
  const actualColor: string | null = body.style.backgroundColor;
  const testColor: string = actualColor === '' ? 'rgba(199, 225, 230, 0.5)' : '';
  changeBackground(body, testColor);
};

const addListener = (element: HTMLElement, eventTOListen: string, eventHandler: () => void): void => {
  element.addEventListener(eventTOListen, eventHandler);
  console.log("add")
};

const clickEvent: string = 'click';
addListener(backgroundButton, clickEvent, newBackground);

// Add +1 to the counter
const counterContainer: HTMLDivElement = document.createElement('div');
const counter: HTMLSpanElement = document.createElement('span');
const addOneButton: HTMLButtonElement = document.createElement('button');

body.appendChild(counterContainer);
counterContainer.appendChild(counter);
counterContainer.style.marginTop = '20px';
counter.innerHTML = '0';
counter.style.margin = '10px';
counter.style.fontSize = '2rem';
counterContainer.appendChild(addOneButton);
addOneButton.innerHTML = 'Add +1';
addOneButton.style.margin = '10px';

const addOneToCounter = (): void => {
  let counterNumber: number = parseInt(counter.innerHTML);
  counterNumber++;
  counter.innerHTML = `${counterNumber}`;
};

addListener(addOneButton, clickEvent, addOneToCounter);



  


