// Set the target date for the countdown (1 month from now)
let targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 1);

// Function to update the countdown every second
function updateCountdown() {
    let currentDate = new Date();
    let timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Time's up!";
        return;
    }

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = `${days}d`;
    document.getElementById("hours").innerText = `${hours}h`;
    document.getElementById("minutes").innerText = `${minutes}m`;
    document.getElementById("seconds").innerText = `${seconds}s`;

    // Save the remaining time to local storage
    localStorage.setItem("timeRemaining", timeRemaining);
}

// Load the remaining time from local storage
function loadTimeRemaining() {
    let savedTimeRemaining = localStorage.getItem("timeRemaining");
    if (savedTimeRemaining) {
        targetDate = new Date(new Date().getTime() + parseInt(savedTimeRemaining));
    }
}

// Update the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

// Load previous time remaining on page load
loadTimeRemaining();