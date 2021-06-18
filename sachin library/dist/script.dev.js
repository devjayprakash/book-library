"use strict";

console.log("sachin kumar pathak"); //cunstroctor

function book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
} //display constructor


function display() {} //add methods to display prototypes
//add submit event listener


var libraryForm = document.getElementById("libraryform");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  var name = document.getElementById("Bookname").value;
  var author = document.getElementById("Authorname").value; //type story fiction physics

  var story = document.getElementById("story");
  var fiction = document.getElementById("fiction");
  var physics = document.getElementById("physics");
  var type;

  if (story.checked) {
    type = story.value;
  } else if (fiction.checked) {
    type = fiction.value;
  } else if (physics.checked) {
    type = physics.value;
  }

  var book = new book(name, author, type);
  console.log(book);
}