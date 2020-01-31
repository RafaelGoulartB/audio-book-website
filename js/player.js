let songSrc = "../audios/track.mp3"

const songTitle = document.getElementsByClassName('audio-player-title')
const fillBar = document.getElementById('fill')
const currentSecondsTime = document.getElementById('current-time-seconds-song')
const currentMinutesTime = document.getElementById('current-time-minutes-song')

const song = new Audio()

const playSong = () => {
  song.src = songSrc
  song.play()
}

function playOrPauseSong(){           
  if(song.paused){
      playSong()
      song.play();
      $("#play img").attr("src","./img/pause-button.png");
    }
    else{
      song.pause();
      $("#play img").attr("src","./img/play-button.png");
  }
}

function updateTime() {
  song.addEventListener('timeupdate', () => {
    let minutes = Math.floor(song.currentTime / 60)
    let seconds = song.currentTime - minutes * 60

    currentMinutesTime.textContent = minutes
    currentSecondsTime.textContent = Math.round(seconds)
  })
}

function updateProgressBar() {
  song.addEventListener('timeupdate', () => { 
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 +'%';
  });
}


updateTime()
updateProgressBar()