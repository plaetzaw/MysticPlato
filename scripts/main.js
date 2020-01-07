let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/alex.jpg') {
      myImage.setAttribute ('src','images/alex2.jpg');
    } else {
      myImage.setAttribute ('src','images/alex.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Alex is a former collegiate swimmer, ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Alex is a former collegiate swimmer, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }