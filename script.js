const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'jacinto-1',
        displayname: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-2',
        displayname: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-3',
        displayname: 'Goodnight , Disco Queen',
        artist: 'Jacinto Design',
    },
    {
        name: 'metric-1',
        displayname: 'Front Row (Remix)',
        artist: 'Metric/Jacinto Design',
    },
]

// check if playing 
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}
// play or pause event listener 
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update the DOM
function loadSong(song) {
    title.textContent = song.displayname;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

// Current song
let songIndex = 0;

// Previous Song
function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length -1) {
        songIndex = 0;
    } 
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}

// On Load 
loadSong(songs[songIndex]);

// Event Listeners 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);