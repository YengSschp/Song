function showMessage() {
    alert("สวัสดีคุณธี");
}

const music = document.getElementById("myMusic");

function playMusic() {
    music.play();
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}