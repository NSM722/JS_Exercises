/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});*/

// Adding event listeners
/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', changeBackground);*/

/*function onMouseOut() {
  const text = 'See you later!';
  document.querySelector('button').innerHTML = text;
}*/
//btn.addEventListener('mouseout', onMouseOut);

// Removing event listeners
// btn.removeEventListener('click', changeBackground);

//Event handler properties
//You should never use the HTML event handler attributes — 
//those are outdated, and using them is bad practice.
/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;*/

//Event objects
/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);*/

/*const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);*/

// Preventing default behavior
/*const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', e => {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
    para.style.color = "red";
  }
});*/

// Event bubbling and capture
/*const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);*/

//What happens if we add event listeners to the button and the parent?
// We describe this by saying that the event bubbles up from 
// the innermost element that was clicked.
/*const output = document.querySelector('#output');
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector('#container');
const button = document.querySelector('button');

document.body.addEventListener('click', handleClick);
container.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);*/

// Event capturing, targeting, bubbling
/*
 * source 1: https://dom.spec.whatwg.org/#dom-event-eventphase
 * source 2: https://stackoverflow.com/a/4616720/15266715
*/
/*const evtPhasestr = ["NONE: ", "CAPTURING_PHASE: ", "AT_TARGET: ", "BUBBLING_PHASE: "];
const logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += (`<p>${msg}</p>`);
}

function phase(evt) {
    log(evtPhasestr[evt.eventPhase] + this.firstChild.nodeValue.trim());
}
function gphase(evt) {
    log(evtPhasestr[evt.eventPhase] + evt.currentTarget.toString().slice(8,-1));
}

function clearOutput(evt) {
    evt.stopPropagation();
    logElement.innerHTML = '';
}

const divs = document.getElementsByTagName('div');
for (const div of divs) {
  div.addEventListener('click', phase, true);
  div.addEventListener('click', phase, false);
}

document.addEventListener('click', gphase, true);
document.addEventListener('click', gphase, false);
window.addEventListener('click', gphase, true);
window.addEventListener('click', gphase, false);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearOutput);*/

//Event delegation
/*function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const container = document.querySelector('#container');

container.addEventListener('click', event => event.target.style.backgroundColor = bgChange());*/
//BASIC DOM MANIPULATION
/*const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

// Creating and placing new nodes
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'Y you mad?';
sect.appendChild(para);
const text = document.createTextNode(' => the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// Moving and removing elements
sect.appendChild(linkPara);
const secondPara = sect.cloneNode(linkPara);
sect.appendChild(secondPara);
sect.removeChild(secondPara);
//linkPara.remove();
linkPara.parentNode.removeChild(linkPara);
sect.style.fontSize = '26px';
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '20px';
para.style.width = '400px';
para.style.height = 'auto';
para.style.textAlign = 'center';*/

// for Loop(statement)
/*function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(musicTypes);
  console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});*/

// do...while loop(statement)
/*let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);*/

// while loop(statement)
/*let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
  console.log(`n: ${n} and x: ${x}`);
}*/

//label(statement) & break statement
/*let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}*/
// continue statement
/*let i = 0;
let n = 0;
while (i < 5) {
  i++;
  console.log(`iteration: i is ${i} and value of n is : ${n}`);
  if (i === 3) {
    //continue;
  }
  n += i;
  console.log(n);
}*/
// for....in statement with Objects - iterates over properties
/*const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x] + "\n";
}
console.log(text)*/

// for....of statement
// iterates over the values of objects
/*const arr = [3, 5, 7];
for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
for (let i in arr) {
  console.log(i); // logs the indices 0, 1, 2
}*/