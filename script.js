const videoImage = document.getElementById('videoImage');
const videoPlayer = document.getElementById('videoPlayer');

videoImage.addEventListener('click', () => {
  videoPlayer.src = 'video.mp4';
  videoPlayer.style.display = 'block';
  videoPlayer.play();
});



