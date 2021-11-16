function hideButton() {
    var buttonHidden = document.getElementById("meditationButton");
    if (buttonHidden.style.display === "none") {
        buttonHidden.style.display = "block";
    } else {
        buttonHidden.style.display = "none";
    }

    var countdownHidden = document.getElementById("countdown")
    var timeLeft = 5;
    var downloadTimer = setInterval(function () {
        if (timeLeft > 0) {
            document.getElementById("countdown").innerHTML = timeLeft;
        }
        else if (timeLeft == 0) {
            if (countdownHidden.style.display === "none") {
                countdownHidden.style.display = "block";
            } else {
                countdownHidden.style.display = "none";
            }
        }
        timeLeft -= 1;
    }, 1000);
}


