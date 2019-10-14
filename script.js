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

$('#addText').click(function(event){
    let para = $('<p>').text("Hello World")
    $('#task4a').append(para);
})

//4b
$('#changeColor1').click(function(event){
    $('body').css('background-color', event.target.innerText.toLowerCase())
})

$('#changeColor2').click(function(event){
    $('body').css('background-color', event.target.innerText.toLowerCase())
})

//4c
$('#adding').click(function(event){
    let first = $('#num1').val();
     let second = $('#num2').val();
     let add = Number(first) + Number(second);
    $('#task4c').text(add);
})