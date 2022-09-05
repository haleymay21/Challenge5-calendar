var nMoment = moment().format("MMMM Do YYYY");
var display = $("#currentDay");
display.text(nMoment);

// var init = false;
// var now = moment().format("LLLL"); // Day, M/D/Y/T format

// let now24 = moment().format("H"); // 12 hour clock format
// let now12 = moment().format("h"); // 24 hour clock format
// if (init) {
//   now24 = 13;
//   now12 = 1;
// }

// Display current date
// const currentDate = $("#currentDay");
// currentDate.text(now);

var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
console.log(currentHour);

// $(document).ready(function () {
//   for (var i = 9; i < 18; i++) {
//     var rowDiv = $("<div>")
//       .addClass("row time-block")
//       .attr("id", "row-" + i);
//     var hourDiv = $("<div>")
//       .addClass("col-2 hour")
//       .text(i + ":00");
//     var textDiv = $("<textarea>").addClass("col-8 description");
//     var saveBtn = $("<button>")
//       .addClass("col-2 saveBtn")
//       .attr("id", "btn-" + i)
//       .click(function () {
//         var num = $(this).attr("id");
//         var hourTxtBox = $(this).siblings("textarea").val();
//         localStorage.setItem("textarea-" + num, hourTxtBox);
//         console.log(hourTxtBox);
//       });
//     var icon = $("<i>").addClass("fas fa-save");
//     $(".container").append(
//       rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
//     );
//   }

  // //for loop exclusively to make 12AM --> 12PM
  // for (var i = 12; i < 13; i++) {
  //   var rowDiv = $("<div>")
  //     .addClass("row time-block")
  //     .attr("id", "row-" + i);
  //   var hourDiv = $("<div>")
  //     .addClass("col-2 hour")
  //     .text(i + " PM");
  //   var textDiv = $("<textarea>").addClass("col-8 description");
  //   var saveBtn = $("<button>")
  //     .addClass("col-2 saveBtn")
  //     .attr("id", "btn-" + i)
  //     .click(function () {
  //       var num = $(this).attr("id");
  //       var hourTxtBox = $(this).siblings("textarea").val();
  //       localStorage.setItem("textarea-" + num, hourTxtBox);
  //       console.log(hourTxtBox);
  //     });
  //   var icon = $("<i>").addClass("fas fa-save");
  //   $(".container").append(
  //     rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
  //   );
  // }
  // //for loop for 1-5PM
  // for (var i = 1; i < 6; i++) {
  //   var rowDiv = $("<div>")
  //     .addClass("row time-block")
  //     .attr("id", "row-" + i);
  //   var hourDiv = $("<div>")
  //     .addClass("col-2 hour")
  //     .text(i + " PM");
  //   var textDiv = $("<textarea>").addClass("col-8 description");
  //   var saveBtn = $("<button>")
  //     .addClass("col-2 saveBtn")
  //     .attr("id", "btn-" + i)
  //     .click(function () {
  //       var num = $(this).attr("id");
  //       var hourTxtBox = $(this).siblings("textarea").val();
  //       localStorage.setItem("textarea-" + num, hourTxtBox);
  //       console.log(hourTxtBox);
  //     });
  //   var icon = $("<i>").addClass("fas fa-save");
  //   $(".container").append(
  //     rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
  //   );
  // }
});
var past = $("#row-9");
console.log(past);

var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
console.log(currentHour);

for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).addClass("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).addClass("present");
  } else if (i > currentHour) {
    document.getElementById("row-" + i).addClass("future");
  }
}

// for (var i = 9; i < 18; i++) {
//   //get the item from local storage, use i to select a particular txt area we want (adding val to txt area)
// }
