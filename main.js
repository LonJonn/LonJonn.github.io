var colourList = ['#ff8787', '#f783ac', '#da77f2', '#748ffc', '#3bc9db', '#69db7c', '#ffa94d'];

$(document).ready(function() {

//firstProgram////////////////////
    $('.firstProgram .button').on('click', function() {
        $('.firstProgram .content').css('height', '290px').css('transition', 'all 0.4s 0.4s, height 0.4s 0s');
        $('.firstProgram .textOutput').css('opacity', '1').css('transition', 'all 0.6s, opacity 0.4s 0.4s');
    });

    $('.firstProgram .textOutput').on('click', function () {
        $('.firstProgram .content').css('transition', 'opacity 0.4s, height 0.4s 0.7s, padding 0.4s 0.7s').css('height', '240px');
        $('.firstProgram .textOutput').css('transition', 'opacity 0.4s').css('opacity', '0');
    });
//////////////////////////////////

    $('.minimise').on('click', function() {
        var programNo = $(this).parent().parent().prop('className');
        $('.' + programNo + ' .content').addClass('hidden').css("height", "");
        $('.' + programNo + ' .header').css('border-radius', '18px')

        setTimeout(function() {
            $('.' + programNo + ' .content').hide()
        }, 1300);

        if (programNo === 'firstProgram') {
            document.getElementById("first_textOutput").style.opacity = "0"
            $(".content").css("transition", "");
        }
    });

    $('.maximise').on('click', function() {
        var programNo = $(this).parent().parent().prop('className');
        $('.' + programNo + ' .content').show().removeClass('hidden').css('border-radius', '18px 18px 0 0')
    });


});

function defineVariables(programNo) {
    textInput = document.getElementById(programNo + "textInput");
    textOutput = document.getElementById(programNo + "textOutput");
    content = document.getElementById(programNo + "content");
    header = document.getElementById(programNo + 'header')
}

function firstRun() {
    var randomNumber = Math.floor(Math.random() * colourList.length);
    defineVariables("first_");

    textOutput.style.transition = "all 0.6s, opacity 0.3s 0.5s"

    textOutput.innerHTML = 'You are so ' + textInput.value + '!';
    textOutput.style.background = colourList[randomNumber];
    textOutput.style.letterSpacing = randomNumber + 'px';

    if (textInput.value === 'Leon') {
        textInput.style.border = "solid 2px rgb(58, 222, 133)";
    }
}
