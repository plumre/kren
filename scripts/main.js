var myImage = document.querySelector('img');
myImage.onclick = function() {
	var imgSrc = myImage.getAttribute('src');
	if (imgSrc === 'images/minious.jpg') {
		myImage.setAttribute('src', 'images/guitar-boy.jpg');
	} else {
		myImage.setAttribute('src', 'images/minious.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}


// // This is a comment.
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// var iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
// 	alert('Yay, I love chocolate ice cream!');
// } else {
// 	alert('Awww, but chocolate is my favorite...');
// }

// function multiply(num1, num2) {
// 	var result = num1 * num2;
// 	return result;
// }

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }
