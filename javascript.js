/* javascript.js */


const containerDiv = document.querySelector('.container');

window.addEventListener('load', (e) => {
     let divOne = document.createElement('div');
     let divTwo = document.createElement('div')
     let divThree = document.createElement('div');
     let divFour = document.createElement('div');
     let divBox = document.createElement('div');
     divOne.className = 'row-one';
     divTwo.className = 'row-two';
     divThree.className = 'row-three';
     divFour.className = 'row-four';
     divBox.className = 'box';
     containerDiv.appendChild(divOne);
     containerDiv.appendChild(divTwo);
     containerDiv.appendChild(divThree);
     containerDiv.appendChild(divFour);
     divOne.appendChild(divBox);
});
