// using moment to display exact current day, date, and year //
var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

//grabs and names correct current hour in a 24 hour clock //
var cal = new Date();
var currentHour = cal.getHours();
console.log(currentHour);

// for loop to add past, present or future class to text area relative to the current hour //
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else {
    document.getElementById("row-" + i).classList.add("future");
  }
}

// click function to save what is written in the text area into local storage //
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, event);
  });
  // grabbing values from local storage and rendering them to their specific time-block so they stay after page refresh //
  $("#row-9 .description").val(localStorage.getItem("row-9"));
  $("#row-10 .description").val(localStorage.getItem("row-10"));
  $("#row-11 .description").val(localStorage.getItem("row-11"));
  $("#row-12 .description").val(localStorage.getItem("row-12"));
  $("#row-13 .description").val(localStorage.getItem("row-13"));
  $("#row-14 .description").val(localStorage.getItem("row-14"));
  $("#row-15 .description").val(localStorage.getItem("row-15"));
  $("#row-16 .description").val(localStorage.getItem("row-16"));
  $("#row-17 .description").val(localStorage.getItem("row-17"));
});
