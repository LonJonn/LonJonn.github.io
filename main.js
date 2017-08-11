var colourList = ['#ff8787', '#f783ac', '#da77f2', '#748ffc', '#3bc9db', '#69db7c', '#ffa94d'];


function firstRun() {
    var textInput = document.getElementById("textInput");
    var textOutput = document.getElementById("textOutput");
    var randomNumber = Math.floor(Math.random() * colourList.length);


    document.getElementById("textOutput").style.transition = "all 0.6s, opacity 0.3s 0.5s";
    document.getElementById("body").style.transition = "all 0.4s";

    textOutput.innerHTML = 'You are so ' + textInput.value + '!';
    textOutput.style.background = colourList[randomNumber];
    textOutput.style.letterSpacing = randomNumber + 'px';
    document.getElementById("body").style.height = "310px";
    textOutput.style.opacity = "1";

    if (textInput.value === 'Leon') {
        textInput.style.border = "solid 2px rgb(58, 222, 133)";
    }
}

function hideTextOutput() {
    document.getElementById("textOutput").style.transition = "opacity 0.3s 0s";
    document.getElementById("textOutput").style.opacity = "0"
    document.getElementById("body").style.transition = "all 0.5s, height 0.4s 0.5s, padding 0.4s 0.5s";
    document.getElementById("body").style.height = "255px";
}

function minimise() {
    hideTextOutput();
    document.getElementById('textInput').value = ""
    document.getElementById('header').style.borderRadius = "18px";
    document.getElementById("body").style.transition= "all 0.4s, height 0.4s 0.7s, padding 0.4s 0.7s";
    document.getElementById("body").style.opacity = "0";
    document.getElementById("body").style.height = "0";
    document.getElementById("body").style.padding = "0";
}

function maximise() {
    document.getElementById('header').style.borderRadius = "18px 18px 0 0";
    document.getElementById("body").style.transition= "all 0.4s 0.7s, height 0.4s 0s, padding 0.4s 0s";
    document.getElementById("body").style.opacity = "1";
    document.getElementById("body").style.height = "255px";
    document.getElementById("body").style.padding = "26px 0";
}
