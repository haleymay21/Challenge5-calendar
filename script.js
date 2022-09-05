var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
console.log(currentHour);

$(document).ready(function () {
  for (var i = 12; i < 21; i++) {
    var rowDiv = document.querySelectorAll("row time-block");
    var textDiv = document.querySelectorAll("col-8 description");
    var hourDiv = document.querySelectorAll("col-2 hour");
    var saveBtn = $("<button>").click(function () {
      var num = $(this).attr("id");
      var hourTxtBox = $(this).siblings("textarea").val();
      localStorage.setItem("textarea-" + num, hourTxtBox);
      console.log(hourTxtBox);
    });
    var icon = $("<i>").addClass("fas fa-save");
    $(".container").append(
      rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
    );
  }
});

for (var i = 12; i < 21; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else {
    document.getElementById("row-" + i).classList.add("future");
  }
}

// for (var i = 9; i < 18; i++) {
//   //get the item from local storage, use i to select a particular txt area we want (adding val to txt area)
// }
