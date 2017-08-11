var colourList = ['#ff8787', '#f783ac', '#da77f2', '#748ffc', '#3bc9db', '#69db7c', '#ffa94d'];

function firstRun() {
    var randomNumber = Math.floor(Math.random() * colourList.length);
    var first_textInput = document.getElementById("first_textInput");
    var first_textOutput = document.getElementById("first_textOutput");
    var first_body = document.getElementById("first_body");
    var first_header = document.getElementById('first_header')

    first_textOutput.style.transition = "all 0.6s, opacity 0.3s 0.5s";
    first_body.style.transition = "all 0.4s";

    first_textOutput.innerHTML = 'You are so ' + first_textInput.value + '!';
    first_textOutput.style.background = colourList[randomNumber];
    first_textOutput.style.letterSpacing = randomNumber + 'px';
    first_body.style.height = "310px";
    first_textOutput.style.opacity = "1";

    if (first_textInput.value === 'Leon') {
        first_textInput.style.border = "solid 2px rgb(58, 222, 133)";
    }
}

function hideTextOutput() {
    first_textOutput.style.transition = "opacity 0.3s 0s";
    first_textOutput.style.opacity = "0"
    first_body.style.transition = "all 0.5s, height 0.4s 0.5s, padding 0.4s 0.5s";
    first_body.style.height = "255px";
}

function minimise() {
    hideTextOutput();
    first_textInput.value = ""
    first_header.style.borderRadius = "18px";
    first_body.style.transition= "all 0.4s, height 0.4s 0.7s, padding 0.4s 0.7s";
    first_body.style.opacity = "0";
    first_body.style.height = "0";
    first_body.style.padding = "0";
}

function maximise() {
    first_header.style.borderRadius = "18px 18px 0 0";
    first_body.style.transition= "all 0.4s 0.7s, height 0.4s 0s, padding 0.4s 0s";
    first_body.style.opacity = "1";
    first_body.style.height = "255px";
    first_body.style.padding = "26px 0";
}
