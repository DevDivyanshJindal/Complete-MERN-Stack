const video = document.getElementById('heroVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

video.play();

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});
