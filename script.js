// pulled from moment.js // 
// variable name is currentDate and currentHour //
var currentDate = moment().format('dddd') + " , " + moment().format("MMM do YYYY");
// dddd = day of the week , MMM = month , do = number of the day , 
// YYYY = year 
var currentHour = moment().format('h:mm:ss a');
// h = hour , mm = minnutes , ss = seconds a' = am or pm

// these are my hour variables from 9am - 5pm
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");

// variable hour will equal to the moment.js hours
var hour = moment().hours();
// variable userInput will be for the user to input
var userInput;
// var hourSpan will allow user to save and the hour will loop through the time 
var hourSpan;

// this is to set intervals , we learned this in class and also in code drills 
var interval = setInterval(function() {
  // this is for momentjs to work in the moment while being accessed 
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' , '
                      + momentNow.format('dddd')
                      // this capitalizes the first letter to uppercase //
                      .substring(0,0).toUpperCase());
  // this is my current date var + momentjs to loop 
  $('#currentDay').html(currentDate + " , " + momentNow.format('hh:mm:ss A'));
}, 100);


// this function initializes the whole webpage
function init() {
  // this console logs the object 
  console.log("Current Hour " + hour);
  // json parse reads the data and adds the item to local storage 
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);
  // this reads as var init(i) will have an item in it (user input) and json parse will pull the item and save it into the local storage
  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  // this is separated by the hour varaible .. that way it only parses what is in the hour blocks and not the whole page 
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  // see w3 json parse source in readme to see how i came up with this, this repeats up until 5pm 
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(init5);

} 

// this is the function for my background 
function background () {
  // took form-control from my .html and for each function i'm trying to control the hours
  $(".form-control").each(function () {
    // see readme source for parseint
    // var time will equal what the pulled attributed id is, 
      var time = parseInt($(this).attr("id"));
      // hour is going to be the pulled hour
      hour = parseInt(hour);
      console.log(time);
      console.log(hour);

    // if the var hour is more than the time -- the var hour will be the given hour and the var time will be in the past // highlighted grey 
      if (hour > time) {
          $(this).addClass("past");

    // if the var hour is less than the time -- the var hour will be the given hour and the var time will be in the future // highlighted purple
      } else if (hour < time) {
          $(this).addClass("future");

    // if the var hour isn't > or < than the hours, then it is present
      } else {
          $(this).addClass("present");
      }
  });
}

// this manipulates the document and allows the init and background functions to be executed
$(document).ready(function(){
  init()
  background()

// this is to allow the saved button to be able to save into the local storage when the user clicks the button
  $(".saveBtn").on("click", function(){
  // see stackoverflow and w3schools jquery siblings readme source to see how i pulled this pulls the form control
  // the user input will be the form control, 
  // .val will set the attribute, 
  // .trim will remove any whitespace (we learned this in class)
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
  // 
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
// this clears the local storage once clicked
  $("#clearDay").on("click", function(){
    localStorage.clear();
    init()
  }) 

});