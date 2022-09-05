var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
console.log(currentHour);

for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else {
    document.getElementById("row-" + i).classList.add("future");
  }
}

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var event = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, event);
  });
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
// $("#row-12 .description").val(localStorage.getItem("row-12"));
