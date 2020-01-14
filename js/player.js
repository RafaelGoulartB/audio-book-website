let songSrc = "../audios/track.mp3"

const songTitle = document.getElementsByClassName('audio-player-title')
const fillBar = document.getElementById('fill')

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

song.addEventListener('timeupdate', function(){ 
  let position = song.currentTime / song.duration;
  
  fillBar.style.width = position * 100 +'%';
});