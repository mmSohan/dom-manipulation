/* Task 1 */
var heading = document.getElementById("heading");
console.log(heading.innerText);
heading.innerText = "text";

/* Task 2 using plain JavaScript */

function addText(event){
    var p = document.createElement("p");
    p.innerText = "Hello World";
    var div = document.getElementById('task2a');
    div.appendChild(p);
}
function changeColor(event, color){
    document.body.style.background = color;
}
function GotoGoogle(event){
    window.location.herf = "https://www.google.com";
}



/* Task 4 using jQuery */
