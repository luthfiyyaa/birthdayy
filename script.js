document.getElementById("playSound").addEventListener("click", function() {
    const audio = document.getElementById("birthdaySong");
    if (audio.paused) {
        audio.play();
        this.textContent = "Hentikan Musik ❌";
    } else {
        audio.pause();
        audio.currentTime = 0;
        this.textContent = "Mainkan Musik 🎶";
    }
});
