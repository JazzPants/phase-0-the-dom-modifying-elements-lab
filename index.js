// Write your code here!

/*
const x = document.getElementById("main");
x.remove();
*/


//test #1
document.getElementById("main").remove(); //if you only need it once in the page


//test #2,3,4
const newHeader = document.createElement('h1'); //create h1
newHeader.setAttribute("id", "victory"); //give it attribute, id="victory"
newHeader.innerHTML = "Leighton is the champion"; //give it content

//not in test, but make it viewable in browser
document.body.append(newHeader); //add to webpage

