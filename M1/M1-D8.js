      /* EXERCISE 1
       Write a function for changing the title of the document in something else.
      */

       const changeTitle = function (newTitle) {
        let titleToChange = document.querySelector("div h1");
        titleToChange.innerText = newTitle;
      };
      changeTitle("Title is changed to New title");

      /* EXERCISE 2
       Write a function for changing the class of the title of the page in "myHeading".
      */

      const addClassToTitle = function () {
        let title = document.querySelector("h1");
        title.classList.add("myHeading");
      };
      addClassToTitle()

      /* EXERCISE 3
       Write a function for changing the text of only the p which are children of a div.
      */

      const changePcontent = function () {
        let text = document.querySelectorAll("div p")
        text.forEach(p => {
          p.innerText = "Paragrapha is changed "
        });
      };
      changePcontent();

      /* EXERCISE 4
       Write a function for changing the href property of every link to https://www.google.com
      */

      const changeUrls = function () {
        let link = document.querySelectorAll("a");
        link.forEach(link =>{
          link.href = "https://www.google.com";
          link.innerText = "this goes to google.com page"
        })
      };
      changeUrls();

      /* EXERCISE 5
       Write a function for adding a new list item in the second unordered list.
      */

      const addToTheSecond = function (content) {
        let list = document.getElementById("secondList");
        let newListItem = document.createElement("li");
        let newItemText = document.createTextNode("i'm new element")
        newListItem.appendChild(newItemText);
        list.appendChild(newListItem);
      };
      addToTheSecond();

      /* EXERCISE 6
       Write a function for adding a second paragraph to the first div.
      */

      const addParagraph = function (content) {
        let divParagraph = document.querySelectorAll("div")[1];
        let newParagraph = document.createElement("p");
        let newParagraphText = document.createTextNode("I'm new paragraph text");
        newParagraph.appendChild(newParagraphText);
        divParagraph.appendChild(newParagraph);
      };
      addParagraph();

      /* EXERCISE 7
       Write a function for making the first unordered list disappear.
      */

      const firstUlDisappear = function () {
        let firstUl = document.getElementById("firstList");
        firstUl.style.display = "none"; // or style.visibility = "hidden"
      };
      firstUlDisappear();

      /* EXERCISE 8
       Write a function for making the background of every unordered list green.
      */

      const paintItGreen = function () {
        let unorderedList = document.getElementById("secondList");
        unorderedList.style.backgroundColor = "green"; // or .classList.add("background-red");
      };
      paintItGreen();

      /* EXERCISE 9
       Make the heading of the page change color every time the user clicks on it.
      */

      const makeItClickable = function () {
        let heading = document.querySelector("h1");
        heading.addEventListener("click",function(e){
          e.target.classList.toggle("myHeading");
        });
      };
      makeItClickable();

      /* EXERCISE 10
       Change the footer text with something else when the user clicks on it.
      */

      const changeFooterText = function () {
        let footer = document.querySelectorAll("div p")[2];
        footer.addEventListener("click", function(e){
          e.target.innerText = "text clicked"
        });
      };
      changeFooterText();

      /* EXERCISE 11
       Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

      const inputField = document.getElementById("input-field");
      document.onkeypress = function(e){
        console.log(inputField.value);
      };

      /* EXERCISE 12
       Create a welcome alert message when the page successfully loads.
      */

      window.onload = function () {
        alert = "Welcome !!!";  //document.addEventListener('DOMContentLoaded', function() {
      };                       //   alert('Welcome to the page!');
                              //  });

      /* EXERCISE 13
       Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
      */