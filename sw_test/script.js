const spinButton = document.getElementById('spin');
const wheel = document.querySelector('.wheel');
const wedges = document.querySelectorAll('.wedge');

const spinSound = document.getElementById("spin-sound");

// play the spinning wheel sound when the spinner is clicked
spinButton.addEventListener("click", () => {
    spinSound.play();

    const numWedges = wedges.length;
    const degreesPerWedge = 360 / numWedges;

    const randomStopAngle = Math.floor(Math.random() * 360) + 3600;

    let currentDegrees = 0;

    const intervalId = setInterval(() => {
        currentDegrees += degreesPerWedge;
        wheel.style.transform = `rotate(${currentDegrees}deg)`;

        if (currentDegrees >= randomStopAngle) {
            clearInterval(intervalId);
            spinSound.pause(); // Pause the sound when wheel stops
            spinSound.currentTime = 0; // Reset sound to the beginning
        }
    }, 100); // Update every 100 milliseconds
});
