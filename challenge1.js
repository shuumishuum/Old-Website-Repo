//Displays the current time and date
const day = new Date();
//Displays the current hours
let hours = day.getHours();
//Displays the current minutes
const minutes = day.getMinutes();
//Displays the current seconds
const seconds = day.getSeconds();
//Displays the current day as a number value
let currentDay = day.getDay();

//Changes the number value of the day into a word format
switch (currentDay) {
  case 0:
    currentDay = 'Sunday';
    break;
  case 1:
    currentDay = 'Monday';
    break;
  case 2:
    currentDay = 'Tuesday';
    break;
  case 3:
    currentDay = 'Wednesday';
    break;
  case 4:
    currentDay = 'Thursday';
    break;
  case 5:
    currentDay = 'Friday';
    break;
  case 6:
    currentDay = 'Saturday';
    break;
  Default:
    console.log('currentDay variable is not working')
    break;
}

//Declaring and defining a time suffix variable to be able to display am and pm
let timeSuffix = '';

//Setting terms for when to use am and when to use pm
if (hours >= 12) {
  timeSuffix = 'PM';
} else {
  timeSuffix = 'AM';
}

//Converting 24 hour time to 12 hour time format
if (hours > 12) {
  hours = hours - 12;
}

//finds button in html doc
let button = document.querySelector('button');

//event to change paragraph content to current date and time
button.addEventListener('click', function (e){
  let dayAndTime = document.querySelector('p');
  dayAndTime.innerText = `Today is : ${currentDay}.\nCurrent time is : ${hours} ${timeSuffix} : ${minutes} : ${seconds}`;
})