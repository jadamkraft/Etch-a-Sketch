/* javascript.js */


const containerDiv = document.querySelector('.container');

window.addEventListener('load', (e) => {
     let divOne = document.createElement('div');
     let divTwo = document.createElement('div')
     let divThree = document.createElement('div');
     let divFour = document.createElement('div');
     let divBoxOne = document.createElement('div');
     let divBoxTwo = document.createElement('div');
     let divBoxThree = document.createElement('div');
     let divBoxFour = document.createElement('div');
     let divBoxFive = document.createElement('div');
     let divBoxSix = document.createElement('div');
     let divBoxSeven = document.createElement('div');
     let divBoxEight = document.createElement('div');
     let divBoxNine = document.createElement('div');
     let divBoxTen = document.createElement('div');
     let divBoxEleven = document.createElement('div');
     let divBoxTwelve = document.createElement('div');
     let divBoxThirteen = document.createElement('div');
     let divBoxFourteen = document.createElement('div');
     let divBoxFifteen = document.createElement('div');
     let divBoxSixteen = document.createElement('div');
     
     divOne.className = 'row-one';
     divTwo.className = 'row-two';
     divThree.className = 'row-three';
     divFour.className = 'row-four';
     divBoxOne.className = 'box-one';
     divBoxTwo.className = 'box-two';
     divBoxThree.className = 'box-three';
     divBoxFour.className = 'box-four';
     divBoxFive.className = 'box-five';
     divBoxSix.className = 'box-six';
     divBoxSeven.className = 'box-seven';
     divBoxEight.className = 'box-eight';
     divBoxNine.className = 'box-nine';
     divBoxTen.className = 'box-ten';
     divBoxEleven.className = 'box-eleven';
     divBoxTwelve.className = 'box-twelve';
     divBoxThirteen.className = 'box-thirteen';
     divBoxFourteen.className = 'box-fourteen';
     divBoxFifteen.className = 'box-fifteen';
     divBoxSixteen.className = 'box-sixteen';

     divOne.appendChild(divBoxOne);
     divOne.appendChild(divBoxTwo);
     divOne.appendChild(divBoxThree);
     divOne.appendChild(divBoxFour);
     divTwo.appendChild(divBoxFive);
     divTwo.appendChild(divBoxSix);
     divTwo.appendChild(divBoxSeven);
     divTwo.appendChild(divBoxEight);
     divThree.appendChild(divBoxNine);
     divThree.appendChild(divBoxTen);
     divThree.appendChild(divBoxEleven);
     divThree.appendChild(divBoxTwelve);
     divFour.appendChild(divBoxThirteen);
     divFour.appendChild(divBoxFourteen);
     divFour.appendChild(divBoxFifteen);
     divFour.appendChild(divBoxSixteen);
     
/*      divTwo.appendChild(divBoxOne);
     divTwo.appendChild(divBoxTwo);
     divTwo.appendChild(divBoxThree);
     divTwo.appendChild(divBoxFour);
     divThree.appendChild(divBoxOne);
     divThree.appendChild(divBoxTwo);
     divThree.appendChild(divBoxThree);
     divThree.appendChild(divBoxFour);
     divFour.appendChild(divBoxOne);
     divFour.appendChild(divBoxTwo);
     divFour.appendChild(divBoxThree);
     divFour.appendChild(divBoxFour); */
     containerDiv.appendChild(divOne);
     containerDiv.appendChild(divTwo);
     containerDiv.appendChild(divThree);
     containerDiv.appendChild(divFour);

});
