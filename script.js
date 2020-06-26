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

