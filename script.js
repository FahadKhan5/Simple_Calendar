const currentDate = new Date();
let year = 2023;
let month = 5;
const startDate = 1;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let endDate;

// Assigning fixed dates for months
if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
  endDate = 31;
} else if (month === 1) {
  endDate = 28;
} else if (month === 3 || month === 5 || month === 8 || month === 10) {
  endDate = 30;
}

let content = '';

for (let date = startDate; date <= endDate; date++) {
  const day = new Date(year, month, date).getDay();
  content += `${date} - ${dayName[day]}<br>`;
}

const getCalendar = document.getElementById("calendar");

getCalendar.innerHTML = `<div class="box">
    <div class="heading">
    <button id="back"><<</button>
    <h1 id = "month-name">${monthNames[month]} ${year}</h1>
    <button id="next">>></button>
    </div>
    <div class="date">
      <div class="content">
        <p id = "daydate" class="spacing">${content}</p>
        <div class="selectedDate">
          <h2>${dayName[currentDate.getDay()]} ${monthNames[month]} ${currentDate.getDate()}</h2>
        </div>
        <div class="footer">
          <h3>SORT BY:</h3>
          <p>Time Title Priority</p>  
        </div>
        <div class="event">
          <h3>Description:</h3>
          <p>This work needed to be done</p>
        </div>
      </div>
    </div>
  </div>`;

const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");

function updatedate() {
  const daydateel = document.getElementById("daydate");
  let updatedContent = ' ';

  for (let date = startDate; date <= endDate; date++) {
    const day = new Date(year, month, date).getDay();
    updatedContent += `${date} - ${dayName[day]}<br>`;
  }
  daydateel.innerHTML = updatedContent;
}

function gonext() {
  month++; // Increment the month value
  if (month > 11) {
    month = 0;
    year++; // Reset to January if month exceeds December
  }
  document.getElementById("month-name").innerHTML = `${monthNames[month]} ${year}`; // Update the displayed month name
  if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
  endDate = 31;
} else if (month === 1) {
  endDate = 28;
} else if (month === 3 || month === 5 || month === 8 || month === 10) {
  endDate = 30;
}
  updatedate();
}

function goback() {
  month--; // Decrement the month value
  if (month < 0) {
    month = 11; // Set to December if month goes below January
  year--; 
  }
  document.getElementById("month-name").innerHTML = `${monthNames[month]} ${year}`; // Update the displayed month name
  if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
  endDate = 31;
} else if (month === 1) {
  endDate = 28;
} else if (month === 3 || month === 5 || month === 8 || month === 10) {
  endDate = 30;
}
  updatedate();
}

btnNext.addEventListener("click", gonext);
btnBack.addEventListener("click", goback);
