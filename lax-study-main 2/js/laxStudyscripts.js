function hideButton() {
    var buttonHidden = document.getElementById("meditationButton");
    var boxLoop = document.getElementById("box1")
    if (buttonHidden.style.display === "block") {
        buttonHidden.style.display = "none";
        boxLoop.style.display = "block";
    } else {
        buttonHidden.style.display = "block";
    }
    var timeLeft = 9;
    var menu1 = document.getElementById("continue")
    var downloadTimer = setInterval(function () {
        if (timeLeft == 0) {
            if (menu1.style.display === "none") {
                menu1.style.display = "block";
                boxLoop.style.display = "none";
            }
            else {
                menu1.style.display = "none";
            }
        } else {
        }
        timeLeft -= 1;
    }, 1000);

}


function continueMeditation() {
    var menu1 = document.getElementById("continue")
    var boxLoop = document.getElementById("box1")
    if (menu1.style.display === "none") {
        menu1.style.display = "block";
    } else if(menu1.style.display === "block"){
        menu1.style.display = "none";
        boxLoop.style.display = "block";
    }else{
        menu1.style.display = "none";
    }
    var timeLeft = 9;
    var menu1 = document.getElementById("continue")
    var downloadTimer = setInterval(function () {
        if (timeLeft == 0) {
            if (menu1.style.display === "none") {
                menu1.style.display = "block";
                boxLoop.style.display = "none";
            }
            else {
                menu1.style.display = "none";
            }
        } else {
        }
        timeLeft -= 1;
    }, 1000);

}

function stopMeditation() {
    var buttonHidden = document.getElementById("meditationButton")
    var menu1 = document.getElementById("continue")
    if (buttonHidden.style.display === "block") {
        buttonHidden.style.display = "none";
        boxLoop.style.display = "block";
    } else {
        buttonHidden.style.display = "block";
    }
    if (menu1.style.display === "none") {
        menu1.style.display = "block";
    } else if(menu1.style.display === "block"){
        menu1.style.display = "none";
        boxLoop.style.display = "block";
    }else{
        menu1.style.display = "none";
    }
}
