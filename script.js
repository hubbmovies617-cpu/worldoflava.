// =========================
// LAVA AI WEBSITE
// SCRIPT.JS
// =========================


// =========================
// COUNTDOWN
// =========================

const releaseDate = new Date("September 28, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = releaseDate - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const statusElement = document.getElementById("countdown-status");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }

    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        if (statusElement) {
            statusElement.textContent = "LAVA IS NOW LIVE";
        }

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

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}


// Start countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3, 5, 7, 0.95)";

    } else {

        navbar.style.background =
            "rgba(3, 5, 7, 0.72)";

    }

});


// =========================
// SMOOTH NAVIGATION
// =========================

const navigationLinks =
    document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// LAVA STARTUP MESSAGE
// =========================

console.log(
    "🔥 LAVA AI website initialized successfully."
);

console.log(
    "LAVA Release: 28 September 2026"
);
/* =========================
   STAGE 13 — LAVA EXPERIENCE
========================= */

const initializeButton =
    document.getElementById("initialize-lava");

const systemMessage =
    document.getElementById("system-message");

const progressBar =
    document.getElementById("system-progress-bar");

const consoleStatus =
    document.getElementById("console-status");


if (initializeButton) {

    initializeButton.addEventListener("click", function () {

        initializeButton.disabled = true;

        initializeButton.textContent =
            "INITIALIZING...";

        if (consoleStatus) {
            consoleStatus.textContent =
                "BOOTING";
        }

        if (systemMessage) {
            systemMessage.textContent =
                "INITIALIZING LAVA CORE";
        }

        let progress = 0;

        const bootInterval = setInterval(function () {

            progress += 5;

            if (progressBar) {
                progressBar.style.width =
                    progress + "%";
            }

            if (progress >= 30 && systemMessage) {
                systemMessage.textContent =
                    "LOADING INTELLIGENCE";
            }

            if (progress >= 55 && systemMessage) {
                systemMessage.textContent =
                    "CONNECTING MEMORY";
            }

            if (progress >= 75 && systemMessage) {
                systemMessage.textContent =
                    "INITIALIZING SYSTEM";
            }

            if (progress >= 100) {

                clearInterval(bootInterval);

                if (consoleStatus) {
                    consoleStatus.textContent =
                        "ONLINE";
                }

                if (systemMessage) {
                    systemMessage.textContent =
                        "🔥 LAVA SYSTEM ONLINE";
                }

                initializeButton.textContent =
                    "LAVA INITIALIZED";

            }

        }, 80);

    });

}


/* =========================
   LAVA MODULE INTERACTION
========================= */

const lavaModules =
    document.querySelectorAll(".lava-module");

const moduleMessage =
    document.getElementById("module-message");


lavaModules.forEach(function (module) {

    module.addEventListener("click", function () {

        lavaModules.forEach(function (item) {
            item.classList.remove("selected");
        });

        module.classList.add("selected");

        const moduleName =
            module.getAttribute("data-module");

        if (moduleMessage) {

            moduleMessage.textContent =
                "MODULE SELECTED / " + moduleName;

        }

    });

});