//function to hide the main button and the welcome message, as well as display the the main box animation.
function hideButton() {
    //creates a variable from the meditation button 
    var buttonHidden = document.getElementById("meditationButton");
    //creates a variable from the box animation
    var boxLoop = document.getElementById("box1")
    //creates a variable from the welcome message
    var mainHeading = document.getElementById("welcome")
    //checks to see if the meditation is not hidden. If it isn't it hides the button and displays the box animation.
    if (buttonHidden.style.display === "block") {
        //hides the main mediation button
        buttonHidden.style.display = "none";
        //displays the box animation
        boxLoop.style.display = "block";
        //hides the main welcome message
        mainHeading.style.display = "none";
    } else {
        //ensures that the button stays displayed
        buttonHidden.style.display = "block";
    }

    //timer to display the menu asking if the user would like to continue their meditation once the box breating animation has finsihed 
    //creates a variable to count down the time.
    var timeLeft = 60;
    //creates a variable of continue buttons
    var menu1 = document.getElementById("continue")
    var downloadTimer = setInterval(function () {
        //checks to see if time left is equal to 0
        if (timeLeft == 0) {
            //checks to see if the menu is being displayed or not. If not it hides the box loop and displays the menu 
            if (menu1.style.display === "none") {
                //displays the menu
                menu1.style.display = "block";
                //hides the box animation
                boxLoop.style.display = "none";
            }
            else {
                //keeps the menu hidden
                menu1.style.display = "none";
            }
        } else {
        }
        timeLeft -= 1;
        //speed in ms in which the user  
    }, 1000);

}

//function to allow the user to continue their meditation by displaying the box breathing animation and hiding the menu
function continueMeditation() {
    var menu1 = document.getElementById("continue")
    var boxLoop = document.getElementById("box1")
    if (menu1.style.display === "none") {
        menu1.style.display = "block";
    } else if (menu1.style.display === "block") {
        menu1.style.display = "none";
        boxLoop.style.display = "block";
    } else {
        menu1.style.display = "none";
    }
    var timeLeft = 59;
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
    } else if (menu1.style.display === "block") {
        menu1.style.display = "none";
        boxLoop.style.display = "block";
    } else {
        menu1.style.display = "none";
    }
}
