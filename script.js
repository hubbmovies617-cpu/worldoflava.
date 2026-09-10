// ================================
// LAVA AI — LAUNCH COUNTDOWN
// ================================

const launchDate = new Date("September 28, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        document.getElementById("countdown-status").innerText =
            "LAVA IS LIVE";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// ================================
// EXPLORE BUTTON
// ================================

function scrollToFeatures() {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

}