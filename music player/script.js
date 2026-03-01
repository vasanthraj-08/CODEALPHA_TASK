const songs = [
    {
        title: "Aradhya",
        artist: "Unknown Artist",
        src: "aradhya.mp3"
    },
    {
        title: "Ennai Thottu",
        artist: "Unknown Artist",
        src: "ennai.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";
}

audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener("input", () => {
    if (!isNaN(audio.duration)) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

audio.addEventListener("ended", nextSong);

loadSong(songs[currentSong]);