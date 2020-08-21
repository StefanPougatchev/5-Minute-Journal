// selecting body section on HTML
const body = document.querySelector('body');

// creating the mainDiv that we will be storing the subsequent div areas in
const mainDiv = document.createElement('div');
mainDiv.className = 'mainContentArea';
body.appendChild(mainDiv);

//* ----------------- dateArea inside mainDiv  -----------------
// creating the date Area nested inside mainDiv
const dateDiv = document.createElement('div');
dateDiv.id = 'dateArea';
mainDiv.appendChild(dateDiv);

// declaring variable dateDay and appending it to dateDiv
const dateDay = document.createElement('h3');
dateDay.textContent = new Date().toDateString();
dateDiv.appendChild(dateDay);

//* -------create Quote Area nested inside the mainDiv----------

const randomNum = getRandomArbitrary(0, 1643);

function fetchQuote() {
  const quoteDiv = document.createElement('div');
  quoteDiv.id = 'quoteArea';
  mainDiv.appendChild(quoteDiv);
  let quotes;
  let authorText;
  let quoteText;
  const displayQuote = document.createElement('p');
  // displayQuote.textContent = quote2;
  quoteDiv.appendChild(displayQuote);
  const authorNameDisplay = document.createElement('p');
  authorNameDisplay.id = 'authorName';
  quoteDiv.appendChild(authorNameDisplay);

  fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) => (quotes = data))
    .then(() => (quoteText = quotes[randomNum].text))
    .then(() => (displayQuote.textContent = quoteText))
    .then(() => (authorText = quotes[randomNum].author))
    .then(() => (authorNameDisplay.textContent = ` - ${authorText} -`));
}

fetchQuote();

// const quoteText = document.createElement("p");
// quoteText.textContent = quote2 ? quote2 : "";
// quoteDiv.appendChild(quoteText);
// create the DaytimeContent area
// const quoteAuthor = document.createElement('p');

// includes three 3 nested divs gratefulArea, greatArea,Daily Affirmations
const daytimeContent = document.createElement('div');
daytimeContent.id = 'daytimeContent';
mainDiv.appendChild(daytimeContent);

//* ----------------- GrateFulArea  -----------------

// gratefulArea with a nested Ordered List and heading
const gratefulDiv = document.createElement('div');
gratefulDiv.id = 'gratefulArea';
daytimeContent.appendChild(gratefulDiv);

// h2 heading for gratful Div

const gratefulHeading = document.createElement('h2');
gratefulHeading.textContent = 'I am grateful for...';
gratefulDiv.appendChild(gratefulHeading);

// ordered list for gratful Div

const gratefulList = document.createElement('ol');
gratefulList.className = 'input-list';
gratefulDiv.appendChild(gratefulList);

// input field
// const gratefulInput = document.createElement("input");
// gratefulInput.type = "text";
// gratefulDiv.appendChild(gratefulInput);
const storageGrateful = {};

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  // li.textContent = gratefulInput;
  gratefulList.appendChild(li);
  const gratefulInput = document.createElement('input');
  gratefulInput.id = `Grateful${i}`
  li.appendChild(gratefulInput);
  storageGrateful[i] = gratefulInput.value;
}

//* ----------------- Make today great area -----------------

// makeTodayGreatArea with a nested Ordered List and heading
const todayGreatDiv = document.createElement('div');
todayGreatDiv.id = 'todayGreatArea';
daytimeContent.appendChild(todayGreatDiv);

// h2 heading for make today great

const todayGreatHeading = document.createElement('h2');
todayGreatHeading.textContent = 'What would make today great?';
todayGreatDiv.appendChild(todayGreatHeading);

// ordered list for make today great

const todayGreatList = document.createElement('ol');
todayGreatList.className = 'input-list';
todayGreatDiv.appendChild(todayGreatList);

// input field
// const gratefulInput = document.createElement("input");
// gratefulInput.type = "text";
// gratefulDiv.appendChild(gratefulInput);
const storageToday = {};
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  // li.textContent = gratefulInput;
  todayGreatList.appendChild(li);
  const todayGreatInput = document.createElement('input');
  todayGreatInput.id = `todayGreat${i}`;
  li.appendChild(todayGreatInput);
  storageToday[i] = todayGreatInput.value;
}

//* ----------------- daily Affirmations  -----------------

// dailyAffirmations Area with a nested Ordered List and heading
const dailyAffirmationsDiv = document.createElement('div');
dailyAffirmationsDiv.id = 'dailyAffirmationsArea';
daytimeContent.appendChild(dailyAffirmationsDiv);

// h2 heading for dailyAffirmations

const dailyAffirmationsHeading = document.createElement('h2');
dailyAffirmationsHeading.textContent = 'Daily affirmations. I am ...';
dailyAffirmationsDiv.appendChild(dailyAffirmationsHeading);

// ordered list for dailyAffirmations

const dailyAffirmationsList = document.createElement('ol');
dailyAffirmationsList.className = 'input-list';
dailyAffirmationsDiv.appendChild(dailyAffirmationsList);

// input field
// const gratefulInput = document.createElement("input");
// gratefulInput.type = "text";
// gratefulDiv.appendChild(gratefulInput);

const storageAffirmation = {};
for (let i = 0; i < 2; i++) {
  const li = document.createElement('li');
  // li.textContent = gratefulInput;
  dailyAffirmationsList.appendChild(li);
  const dailyAffirmationsInput = document.createElement('input');
  dailyAffirmationsInput.id = `dailyAffirmations${i}`;
  li.appendChild(dailyAffirmationsInput);
  storageAffirmation[i] = dailyAffirmationsInput.value;
}


//* ----------------- Nighttime Content  -----------------

// create the nighttimeContent div section, which will showcase it's own entries
// includes 2 nested areas amazingThingsArea today, howToMakeitBetterArea

const nighttimeContent = document.createElement('div');
nighttimeContent.id = 'nighttimeContent';
mainDiv.appendChild(nighttimeContent);

//* ----------------- Amazing Things Area  -----------------

// create div section 3 amazing things that happened today
const amazingThingsArea = document.createElement('div');
amazingThingsArea.id = 'inputResponses';
nighttimeContent.appendChild(amazingThingsArea);

// h2 heading for amazingThingsArea
const amazingThingsHeading = document.createElement('h2');
amazingThingsHeading.textContent = '3 Amazing things that happened today...';
amazingThingsArea.appendChild(amazingThingsHeading);

// ordered list for amazingThingsHeading
const amazingThingsList = document.createElement('ol');
amazingThingsList.className = 'input-list';
amazingThingsArea.appendChild(amazingThingsList);

const storageAmazing = {};
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  // li.textContent = gratefulInput;
  amazingThingsList.appendChild(li);
  const amazingList = document.createElement('input');
  amazingList.id = `amazing${i}`;
  li.appendChild(amazingList);
  storageAmazing[i] = amazingList.value;
}


//* -----------------  howToMakeitBetterArea Area  -----------------

// create section; how could I have made today even better
const howToMakeitBetterArea = document.createElement('div');
howToMakeitBetterArea.id = 'inputResponses';
nighttimeContent.appendChild(howToMakeitBetterArea);

// h2 heading for howToMakeHeading
const howToMakeHeading = document.createElement('h2');
howToMakeHeading.textContent = 'How could I have made today even better?';
howToMakeitBetterArea.appendChild(howToMakeHeading);

// ordered list for howToMakeHeading
const howToMakeList = document.createElement('ol');
howToMakeList.className = 'input-list';
howToMakeitBetterArea.appendChild(howToMakeList);

const storageMakeBetter = {};
for (let i = 0; i < 2; i++) {
  const li = document.createElement('li');
  // li.textContent = gratefulInput;
  howToMakeList.appendChild(li);
  const howToList = document.createElement('input');
  howToList.id = `toList${i}`;
  li.appendChild(howToList);
  storageMakeBetter[i] = howToList.value;
}

//* -----------------  Object to save info   -----------------
// const storage = {
//   // 1:

// }





//* -----------------  Save button   -----------------
const saveButton = document.createElement('BUTTON');
saveButton.id = 'save-button';
saveButton.textContent = 'Save';
mainDiv.appendChild(saveButton);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//* -----------------  Fetch Call   -----------------

saveButton.addEventListener('click', () => {
  for (let i = 0; i < 2; i++) {
    storageAffirmation[i] = document.getElementById(`dailyAffirmations${i}`).value;
    storageMakeBetter[i] = document.getElementById(`toList${i}`).value;
    // storageMakeBetter[i] = howToList.value;
  }

  for (let i = 0; i < 3; i++) {
    storageGrateful[i] = document.getElementById(`Grateful${i}`).value;
    storageToday[i] = document.getElementById(`todayGreat${i}`).value;
    storageAmazing[i] = document.getElementById(`amazing${i}`).value;
  }
});

// `Grateful${i}`
//   `todayGreat${i}`;
// `dailyAffirmations${i}`;
// `amazing${i}`;
// `toList${i}`;

console.log(storageGrateful); // 3
console.log(storageToday); // 3
console.log(storageAffirmation); // 2
console.log(storageAmazing); // 3
console.log(storageMakeBetter); // 2

// fetch("https://type.fit/api/quotes")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     let quote = data[randomNum].text;
//     let author = data[randomNum].author;
//     let arr = [quote, author];
//     console.log(arr);
//   });

// console.log(quote);
// console.log(data[randomNum][text])

