var colourList = ['#ff8787', '#f783ac', '#da77f2', '#748ffc', '#3bc9db', '#69db7c', '#ffa94d'];


function defineVariables(programNo) {
    textInput = document.getElementById(programNo + "textInput");
    textOutput = document.getElementById(programNo + "textOutput");
    content = document.getElementById(programNo + "content");
    header = document.getElementById(programNo + 'header')
}

function firstRun() {
    var randomNumber = Math.floor(Math.random() * colourList.length);
    defineVariables("first_");

    textOutput.style.transition = "all 0.6s, opacity 0.3s 0.5s";
    content.style.transition = "all 0.4s";

    textOutput.innerHTML = 'You are so ' + textInput.value + '!';
    textOutput.style.background = colourList[randomNumber];
    textOutput.style.letterSpacing = randomNumber + 'px';
    content.style.height = "310px";
    textOutput.style.opacity = "1";

    if (textInput.value === 'Leon') {
        textInput.style.border = "solid 2px rgb(58, 222, 133)";
    }
}

function hideTextOutput() {
    textOutput.style.transition = "opacity 0.3s 0s";
    textOutput.style.opacity = "0"
    content.style.transition = "all 0.5s, height 0.4s 0.5s, padding 0.4s 0.5s";
    content.style.height = "255px";
}

function minimise(programNo) {

    defineVariables(programNo)

    if (programNo === "first_") {
        hideTextOutput();
    }

    textInput.value = ""
    header.style.borderRadius = "18px";
    content.style.transition= "all 0.4s, height 0.4s 0.7s, padding 0.4s 0.7s";
    content.style.opacity = "0";
    content.style.height = "0";
    content.style.padding = "0";
}

function maximise(programNo) {

    defineVariables(programNo)
    
    header.style.borderRadius = "18px 18px 0 0";
    content.style.transition= "all 0.4s 0.7s, height 0.4s 0s, padding 0.4s 0s";
    content.style.opacity = "1";
    content.style.height = "255px";
    content.style.padding = "26px 0";
}
