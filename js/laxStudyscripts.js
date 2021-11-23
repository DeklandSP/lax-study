
function hideButton() {
    window.timeTaken = 0;
    //creates a variable from the meditation button 
    var buttonHidden = document.getElementById("meditationButton");
    //creates a variable from the box animation
    var boxLoop = document.getElementById("box1")
    //creates a variable from the welcome message
    var mainHeading = document.getElementById("welcome")
    var thanks = document.getElementById("thankYou")
    //checks to see if the meditation is not hidden. If it isn't it hides the button and displays the box animation.
    if (buttonHidden.style.display === "block") {
        //hides the main mediation button
        buttonHidden.style.display = "none";
        //displays the box animation
        boxLoop.style.display = "block";
        //hides the main welcome message
        mainHeading.style.display = "none";
        // thanks hides the exit message with user time spent
        thanks.style.display = "none";
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
    // timmer for user incrimented by one 
    timeTaken +=1;

}

//function to allow the user to continue their meditation by displaying the box breathing animation and hiding the menu
function continueMeditation() {
    //menu displayed showing user buttons
    var menu1 = document.getElementById("continue")
    //Box medition to from
    var boxLoop = document.getElementById("box1")
    // if statement sets menue to display
    if (menu1.style.display === "none") {
        menu1.style.display = "block";
    // if the menure is displaed will set it to none and display the box medition
    } else if (menu1.style.display === "block") {
        menu1.style.display = "none";
        boxLoop.style.display = "block";
    //else will not display the menu
    } else {
        menu1.style.display = "none";
    }
    // countdown for medition loop
    var timeLeft = 60;
    // continue called and set to menu variable
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
    timeTaken +=1;
}
//function to allow the user to stop the medition by displaying the outro before displaying the begin button again
function stopMeditation() {
    // local variables for menu,thanks and buttonHidden.
    var menu1 = document.getElementById("continue")
    // thanks variable called to display the outro message
    var thanks = document.getElementById("thankYou")
    var buttonHidden = document.getElementById("meditationButton")
    // if statment check to see if menue is displaying before setting it to hidden then displaying the outro message.
     if (menu1.style.display === "block") {
        menu1.style.display = "none";
        thanks.style.display = "block";
        // displays the amount of time user has meditated for in mins
        document.getElementById("times").innerHTML = timeTaken;
    } // displays the hidden button after being hidden originaly
    if (buttonHidden.style.display === "none") 
    {
        buttonHidden.style.display = "block";
    }
    

}
