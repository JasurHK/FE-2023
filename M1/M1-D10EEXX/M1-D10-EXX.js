const changeHeading = function(newHeading){
    let hToCHange = document.querySelector("h1");
    hToCHange.innerText = newHeading;
};
changeHeading("Heading is changed by DOM");
const addExtraRow = function(){
    let tableToAdd = document.getElementsByTagName("table")[3]; //Here we can control where tho add extr row
    let newRow = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");

    cell1.textContent = "new row";
    cell2.textContent = "new row";
    cell3.textContent = "new row";
    cell4.textContent = "new row";
    cell5.textContent = "new row";

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);

    tableToAdd.appendChild(newRow);
}
addExtraRow();

// gets gumburger icon 

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", function () {
menu.classList.toggle("show");
});