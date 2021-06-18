console.log("sachin kumar pathak");

//cunstroctor
function book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display constructor
function display() {}
//add methods to display prototypes

//add submit event listener

let libraryForm = document.getElementById("libraryform");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("Bookname").value;
  let author = document.getElementById("Authorname").value;

  //type story fiction physics
  let story = document.getElementById("story");
  let fiction = document.getElementById("fiction");
  let physics = document.getElementById("physics");
  let type;

  if (story.checked) {
    type = story.value;
  } else if (fiction.checked) {
    type = fiction.value;
  } else if (physics.checked) {
    type = physics.value;
  }

   book = new book(name, author, type);
  console.log(book);
}
