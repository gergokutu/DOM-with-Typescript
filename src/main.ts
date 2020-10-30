// defer attribute on script tag > script loads before DOMContentLoad
// tsconfig has the strictnull
// Line 5 works but causes an error message >>>
// Line 15: body.appendChild(title) > Object is possibly null
// const body: HTMLBodyElement | null = document.querySelector('body');
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const head: HTMLHeadElement = document.head;
const style: HTMLStyleElement = document.createElement('style');
const title: HTMLHeadingElement = document.createElement('h1');

// Add CSS styles inside head element
head.appendChild(style);
style.innerHTML = `
  .container {
    background-color: rgb(240, 226, 226);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .header {
    font-size: 3rem;
    color: green;
  }

  .counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }

  .counter {
    font-size: 2rem;
  }

  .add-button {
    margin: 1rem;
  }
`
body.setAttribute('class', 'container');

body.appendChild(title);
title.setAttribute('class', 'header');
// title.innerHTML = 'Manipulate the DOM with Typescript';
// title.innerText = 'Manipulate the DOM with Typescript';
// All browsers know createTextNode
const titleText: Text = document.createTextNode('Manipulate the DOM with Typescript');
title.appendChild(titleText);


// Change background color with button
const backgroundButton: HTMLButtonElement = document.createElement('button');
const backgroundButtonText: Text = document.createTextNode('Change Background');
backgroundButton.appendChild(backgroundButtonText);
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
counterContainer.setAttribute('class', 'counter-container');
body.appendChild(counterContainer);

const counter: HTMLSpanElement = document.createElement('span');
const counterText: Text = document.createTextNode('0');
counter.appendChild(counterText);
counter.setAttribute('class', 'counter');
counterContainer.appendChild(counter);

const addOneButton: HTMLButtonElement = document.createElement('button');
const addOneButtonText: Text = document.createTextNode('Add +1');
addOneButton.appendChild(addOneButtonText);;
addOneButton.setAttribute('class', 'add-button');
counterContainer.appendChild(addOneButton);

const addOneToCounter = (): void => {
  let counterNumber: number = parseInt(counter.innerText);
  counterNumber++;
  counter.innerText = `${counterNumber}`;
};

addListener(addOneButton, clickEvent, addOneToCounter);



  


