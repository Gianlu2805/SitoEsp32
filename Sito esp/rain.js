/* Configurations */

console.log("Start");

function pauseForTwoSeconds() {
    console.log("Paused");
        
    console.log('delayRain:', delayRain);
    /* Main Program */
    const thunderstorm = document.getElementById("thunderstorm");

    // Function to create a random number within a given range
    function random(min, max) {
    return Math.random() * (max - min) + min;
    }

    // Function to create raindrops
    function createRaindrop() {
    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";
    thunderstorm.appendChild(raindrop);

    const startX = random(0, window.innerWidth);
    const startY = random(window.innerHeight/10, window.innerHeight/5);
    const duration = random(0.5, 2);

    gsap.fromTo(
        raindrop,
        { x: startX, y: startY, opacity: 0.8 },
        {
        x: startX + 20,
        y: window.innerHeight/1,
        opacity: 0.05,
        duration,
        ease: "linear",
        onComplete: () => {
            thunderstorm.removeChild(raindrop);
        }
        }
    );
    }

    // Periodically create raindrops & lightning
    setInterval(() => {
        createRaindrop();
        createRaindrop();
        createRaindrop();
        createRaindrop();
        createRaindrop();
    }, delayRain);
}

setTimeout(pauseForTwoSeconds, 500);

console.log("Continue immediately");

