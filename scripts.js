// Task 1 - user age
let userAge = prompt('How old are you?');

if (userAge <= 12 && userAge >= 0) {
    document.getElementById("user-age").innerHTML =
    'You are a child!';
} else if (userAge > 12 && userAge <= 18) {
    document.getElementById("user-age").innerHTML =
    'You are a teenager!';
} else if (userAge > 18 && userAge <= 60) {
    document.getElementById("user-age").innerHTML =
    'You are an adult!';
} else if (userAge > 60 && userAge < 130) {
    document.getElementById("user-age").innerHTML =
    'You are a retiree!';
} else {
    document.getElementById("user-age").innerHTML =
    'Please enter a valid age.';
}


// Task 2 - keyboard symbols
let keyboardSymbol = prompt('Enter any number from 0 to 9');

switch (keyboardSymbol) {
  case '1':
    document.getElementById("symbol").innerHTML = 'Your symbol is !';
    break;
  case '2':
    document.getElementById("symbol").innerHTML = 'Your symbol is "';
    break;
  case '3':
    document.getElementById("symbol").innerHTML = 'Your symbol is £';
    break;
  case '4':
    document.getElementById("symbol").innerHTML = 'Your symbol is $';
    break;
  case '5':
    document.getElementById("symbol").innerHTML = 'Your symbol is %';
    break;
  case '6':
    document.getElementById("symbol").innerHTML = 'Your symbol is ^';
    break;
  case '7':
    document.getElementById("symbol").innerHTML = 'Your symbol is &';
    break;
  case '8':
    document.getElementById("symbol").innerHTML = 'Your symbol is *';
    break;
  case '9':
    document.getElementById("symbol").innerHTML = 'Your symbol is (';
    break;
  case '0':
    document.getElementById("symbol").innerHTML = 'Your symbol is )';
    break;
  default:
    document.getElementById("symbol").innerHTML = 'Invalid input.';
}


// Task 3 - check a number for repeated digits
let userNumber = prompt('Please, enter 3-digit number');

if (isNaN(userNumber) || userNumber.length != 3) {
    document.getElementById("number").innerHTML = 
    'Invalid input. Please make sure you use digits only, and your number contains 3 digits!';
} else if (userNumber.length = 3 && (userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2] )) {
  document.getElementById("number").innerHTML = 
  'This number has repeated digits.';
} else {
  document.getElementById("number").innerHTML = 
  'This number does not have repeated digits.';
}


// Task 4 - check if a year is a leap year or not
let year = prompt('Enter a year');

if (year % 4 != 0) {
  document.getElementById("year").innerHTML = 'It is a common year!';
} else if (year % 25 != 0) {
  document.getElementById("year").innerHTML = 'It is a leap year!';
} else if (year % 16 != 0) {
  document.getElementById("year").innerHTML = 'It is a common year!';
} else {
  document.getElementById("year").innerHTML = 'It is a leap year!';
}


// Task 5 - palindrome or not
let value = prompt ('Enter a 5-digit number');

if (isNaN(value) || value.length != 5) {
    document.getElementById("palindrome").innerHTML = 
    'Invalid input. Please make sure you use digits only, and your number contains 5 digits!';
} else if (value[0] == value[4] && value[1] == value[3]) {
    document.getElementById("palindrome").innerHTML = 
    'It is a palindrome!';
} else {
    document.getElementById("palindrome").innerHTML = 
    'It is not a palindrome!';
}


// Task 6 - currency exchange tool
let exchangeValueFrom = prompt ('Enter amount in USD');
let currency = prompt ('Choose the currency to convert: EUR, UAH, AZN');
let exchangeValueTo = currency.toUpperCase();

if (isNaN(exchangeValueFrom)) {
    document.getElementById('exchange').innerHTML = 
    'Invalid input. Amount should be a number!';
} else if (exchangeValueTo == 'EUR') { 
    document.getElementById('exchange').innerHTML = 
    `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 0.85)} ${exchangeValueTo}.`;
} else if (exchangeValueTo == 'UAH') {
    document.getElementById('exchange').innerHTML = 
    `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 28.28)} ${exchangeValueTo}.`;
} else if (exchangeValueTo == 'AZN') {
    document.getElementById('exchange').innerHTML = 
    `For ${exchangeValueFrom} USD you will get ${Math.round(exchangeValueFrom * 1.7)} ${exchangeValueTo}.`;
} else {
    document.getElementById('exchange').innerHTML = 
    'Sorry, we do not support this currency exchange calculation.';
}


// Task 7 - discount
let price = prompt ('Enter the original price');

if ((price > 0) && (price < 200)) {
    document.getElementById("discount-price").innerHTML = 
    `The price is ${price}.`;
} else if ((price >= 200) && (price <= 300)) {
    let discount = price * .03;
    let priceWithDiscount = price - discount;
    document.getElementById("discount-price").innerHTML = 
    `The price is ${priceWithDiscount}.`;
} else if ((price > 300) && (price <= 500)) {
    let discount = price * .05;
    let priceWithDiscount = price - discount;
    document.getElementById("discount-price").innerHTML = 
    `The price is ${priceWithDiscount}.`;
} else if ((price > 500)) {
    let discount = price * .03;
    let priceWithDiscount = price - discount;
    document.getElementById("discount-price").innerHTML = 
    `The price is ${priceWithDiscount}.`;
} else {
    document.getElementById("discount-price").innerHTML = 
    'Please check and enter the original price again.';
}


// Task 8 - circles inscribed inside squares
let circleLength = prompt ('Enter the circle length');
let squarePerimeter = prompt ('Enter the square perimeter');
const pi = 3.14;

let circleDiameter = circleLength / pi;
let squareSide = squarePerimeter / 4;

if (isNaN(circleLength) || isNaN(squarePerimeter)) {
   document.getElementById("inscribed-circle").innerHTML = 
   'Invalid input. Please try again!';
} else if (circleDiameter == squareSide) {
    document.getElementById("inscribed-circle").innerHTML = 
    'You can inscribe this circle inside the square.';
} else {
    document.getElementById("inscribed-circle").innerHTML = 
    'You cannot inscribe this circle inside the square.';
}


// Task 9 - quiz
let questionOne = prompt ('Where is Guatemala? Possible options: North America, Europe, South America');
let questionTwo = prompt ('Where is Eritrea? Possible options: South America, Africa, Europe');
let questionThree = prompt ('Where is Lebanon? Possible options: Africa, Asia, Europe');

let answerOne = questionOne.toUpperCase();
let answerTwo = questionTwo.toUpperCase();
let answerThree = questionThree.toUpperCase();

let score = 0;

if ((answerOne) == 'SOUTH AMERICA') { 
    score++; 
}

if ((answerTwo) == 'AFRICA') {
    score++;
}

if ((answerThree) == 'ASIA') {
    score++;
}

document.getElementById("quiz-score").innerHTML = `Your score is ${score * 2}.`;


// Task 10 - tomorrow date
let userValue = prompt ('Enter a date');
let userDate = new Date(userValue);
let nextDate = new Date (userDate);
nextDate.setDate(userDate.getDate() +1);

document.getElementById("next-date").innerHTML = `You entered ${userDate.toDateString()}. The next date is ${nextDate.toDateString()}.`;