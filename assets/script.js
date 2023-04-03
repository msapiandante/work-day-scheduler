var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var calendarEvent= document.querySelector("hour"); 
var button = document.querySelectorAll("#button");

button.addEventListener("click", saveEvents());

function saveEvents(){
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent))
};
  function showEvents() {
  localStorage.getItem("calendarEvent",JSON.stringify(calendarEvent)

  )};

  saveEvents();
  showEvents();
  