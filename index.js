let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

function score(aButton) {
    if (aButton.id == "home-1") {
        homeScore += 1
        document.getElementById("home-score").textContent = homeScore
    } else if (aButton.id == "home-2") {
        homeScore += 2
        document.getElementById("home-score").textContent = homeScore
    } else if (aButton.id == "home-3") {
        homeScore += 3
        document.getElementById("home-score").textContent = homeScore
    } else if (aButton.id == "guest-1") {
        guestScore += 1
        document.getElementById("guest-score").textContent = guestScore
    } else if (aButton.id == "guest-2") {
        guestScore += 2
        document.getElementById("guest-score").textContent = guestScore
    } else if (aButton.id == "guest-3") {
        guestScore += 3
        document.getElementById("guest-score").textContent = guestScore
    }
    
}