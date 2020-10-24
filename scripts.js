// Task 1 - user age
const userAge = prompt('How old are you?');
let message1 = document.querySelector('#user-age');

if (isNaN(userAge) || userAge > 130 || userAge < 0) {
	message1.innerHTML = 'Please enter a valid age.';
} else if (userAge <= 12 && userAge >= 0) {
	message1.innerHTML = 'You are a child!';
} else if (userAge > 12 && userAge <= 18) {
	message1.innerHTML = 'You are a teenager!';
} else if (userAge > 18 && userAge <= 60) {
	message1.innerHTML = 'You are an adult!';
} else {
	message1.innerHTML = 'You are a retiree!';
}


// Task 2 - keyboard symbols
let keyboardSymbol = prompt('Enter any number from 0 to 9');
let message2 = document.querySelector('#symbol');

switch (keyboardSymbol) {
	case '1':
		message2.innerHTML = 'Your symbol is !';
		break;
	case '2':
		message2.innerHTML = 'Your symbol is "';
		break;
	case '3':
		message2.innerHTML = 'Your symbol is £';
		break;
	case '4':
		message2.innerHTML = 'Your symbol is $';
		break;
	case '5':
		message2.innerHTML = 'Your symbol is %';
		break;
	case '6':
		message2.innerHTML = 'Your symbol is ^';
		break;
	case '7':
		message2.innerHTML = 'Your symbol is &';
		break;
	case '8':
		message2.innerHTML = 'Your symbol is *';
		break;
	case '9':
		message2.innerHTML = 'Your symbol is (';
		break;
	case '0':
		message2.innerHTML = 'Your symbol is )';
		break;
	default:
		message2.innerHTML = 'Invalid input.';
}


// Task 3 - check the number for repeated digits
let userNumber = prompt('Please, enter 3-digit number');
let message3 = document.querySelector('#number');

if (isNaN(userNumber) || userNumber.length != 3) {
	message3.innerHTML = 'Invalid input. Please make sure you use digits only, and your number contains 3 digits!';
} else if (userNumber.length = 3 && (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2])) {
	message3.innerHTML = 'This number has repeated digits.';
} else {
	message3.innerHTML = 'This number does not have repeated digits.';
}


// Task 4 - check if the given year is a leap year or not
let year = prompt('Enter a year');
let message4 = document.querySelector('#year')

if (year % 4 != 0) {
	message4.innerHTML = 'It is a common year!';
} else if (year % 25 != 0) {
	message4.innerHTML = 'It is a leap year!';
} else if (year % 16 != 0) {
	document.getElementById("year").innerHTML = 'It is a common year!';
} else {
	document.getElementById("year").innerHTML = 'It is a leap year!';
}


// Task 5 - palindrome or not
let value = prompt('Enter a 5-digit number');
let message5 = document.querySelector('#palindrome');

if (isNaN(value) || value.length != 5) {
	message5.innerHTML = 'Invalid input. Please make sure you use digits only, and your number contains 5 digits!';
} else if (value[0] == value[4] && value[1] == value[3]) {
	message5.innerHTML = 'It is a palindrome!';
} else {
	message5.innerHTML = 'It is not a palindrome!';
}


// Task 6 - currency exchange tool
let exchangeValueFrom = prompt('Enter amount in USD');
let currency = prompt('Choose the currency to convert: EUR, UAH, AZN');
let exchangeValueTo = currency.tolowerCase();
let message6 = document.querySelector('#exchange');

if (isNaN(exchangeValueFrom)) {
	message6.innerHTML = 'Invalid input. Amount should be a number!';
} else if (exchangeValueTo == 'eur') {
	message6.innerHTML = `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 0.85)} ${exchangeValueTo.toUpperCase()}.`;
} else if (exchangeValueTo == 'UAH') {
	message6.innerHTML = `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 28.28)} ${exchangeValueTo.toUpperCase()}.`;
} else if (exchangeValueTo == 'AZN') {
	message6.innerHTML = `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 1.7)} ${exchangeValueTo.toUpperCase()}.`;
} else {
	message6.innerHTML = 'Sorry, we do not support this currency exchange calculation.';
}


// Task 7 - discount
let price = prompt('Enter the original price');
let message7 = document.querySelector('#discount-price');

if ((price > 0) && (price < 200)) {
	message7.innerHTML = `The price is ${price}.`;
} else if ((price >= 200) && (price <= 300)) {
	let discount = price * .03;
	let priceWithDiscount = price - discount;
	message7.innerHTML = `The price is ${priceWithDiscount}.`;
} else if ((price > 300) && (price <= 500)) {
	let discount = price * .05;
	let priceWithDiscount = price - discount;
	message7.innerHTML = `The price is ${priceWithDiscount}.`;
} else if ((price > 500)) {
	let discount = price * .03;
	let priceWithDiscount = price - discount;
	message7.innerHTML = `The price is ${priceWithDiscount}.`;
} else {
	message7.innerHTML = 'Please check and enter the original price again.';
}


// Task 8 - circles inscribed inside squares
let circleLength = prompt('Enter the circle length');
let squarePerimeter = prompt('Enter the square perimeter');
const pi = 3.14;

let circleDiameter = circleLength / pi;
let squareSide = squarePerimeter / 4;

let message8 = document.querySelector('#inscribed-circle');

if (isNaN(circleLength) || isNaN(squarePerimeter)) {
	message8.innerHTML = 'Invalid input. Please try again!';
} else if (circleDiameter == squareSide) {
	message8.innerHTML = 'You can inscribe this circle inside the square.';
} else {
	message8.innerHTML = 'You cannot inscribe this circle inside the square.';
}


// Task 9 - quiz
let questionOne = prompt('Where is Guatemala? Possible options: North America, Europe, South America');
let questionTwo = prompt('Where is Eritrea? Possible options: South America, Africa, Europe');
let questionThree = prompt('Where is Lebanon? Possible options: Africa, Asia, Europe');

let answerOne = questionOne.toUpperCase();
let answerTwo = questionTwo.toUpperCase();
let answerThree = questionThree.toUpperCase();

let score = 0;
const points = 2;

let message9 = document.querySelector('#quiz-score');

if ((answerOne) == 'SOUTH AMERICA') {
	score++;
}

if ((answerTwo) == 'AFRICA') {
	score++;
}

if ((answerThree) == 'ASIA') {
	score++;
}

message9.innerHTML = `Your score is ${score * points}.`;


// Task 10 - next date
let userValue = prompt('Enter a date');
let userDate = new Date(userValue);
let nextDate = new Date(userDate);
nextDate.setDate(userDate.getDate() + 1);

let message10 = document.querySelector('#next-date');

message10.innerHTML = `You entered ${userDate.toDateString()}. The next date is ${nextDate.toDateString()}.`;