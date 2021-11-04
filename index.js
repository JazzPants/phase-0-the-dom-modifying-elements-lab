// Write your code here!

/*
const x = document.getElementById("main");
x.remove();
*/

document.getElementById("main").remove(); //if you only need it once in the page


const newHeader = document.createElement('h1'); //create h1
newHeader.setAttribute("id", "victory"); //give it attribute
newHeader.innerHTML = "Andre is the champion"; //give it content

document.body.append(newHeader); //add to webpage

