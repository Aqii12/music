
// const menuBtn = document.querySelector(".menu-btn"),
//     container = document.querySelector(".container");

//     const progressBar = document.querySelector(".bar"),
//     progressDot = document.querySelector(".dot"),
//     currentTimeEl = document.querySelector(".current-time"),
//     DurationEl = document.querySelector(".duration");

// menuBtn.addEventListener("click", () => {
//     container.classList.toggle("active");
// });

// let playing = false,
//     currentSongIndex = 0,
//     shuffle = false,
//     repeat = false,
//     favourits = [],
//     audio = new Audio();

// const songs = [
//     {
//         title: "song 1",
//         artist: "artist song 1",
//         img_src: "eric-nopanen-8e0EHPUx3Mo-unsplash.jpg",
//         src: "g-class.mp3",
//     },
//     {
//         title: "song 2",
//         artist: "artist song 2",
//         img_src: "img-2.jpg",
//         src: "song-2.mp3",
//     },
//     {
//         title: "song 3",
//         artist: "artist song 3",
//         img_src: "img-3.jpg",
//         src: "song-3.mp3",
//     },
//     {
//         title: "song 4",
//         artist: "artist song 4",
//         img_src: "img-4.jpg",
//         src: "song-4.mp3",
//     },
// ];

// const playlistContainer = document.querySelector("#playlist"),
//     infoWrapper = document.querySelector(".info"),
//     coverImage = document.querySelector(".cover-image"),
//     currentSongTitle = document.querySelector(".current-song-title"),
//     currentFavourite = document.querySelector("#current-favourite");

// function init() {
//     updatePlaylist(songs);
//     loadSong(currentSongIndex);
//     console.log("Initialized and loaded first song.");
// }

// init();

// function updatePlaylist(songs) {
//     playlistContainer.innerHTML = "";

//     songs.forEach((song, index) => {
//         const { title, src } = song;
//         const isFavourite = favourits.includes(index);

//         const tr = document.createElement("tr");
//         tr.classList.add("song");
//         tr.innerHTML = `<td class="no">
//                             <h5>${index + 1}</h5>
//                         </td>
//                         <td class="title">
//                             <h6>${title}</h6>
//                         </td>
//                         <td class="length">
//                             <h5>2:03</h5>
//                         </td>
//                         <td>
//                             <i class="fas fa-heart ${isFavourite ? "active" : ""}"></i>
//                         </td>`;

//         playlistContainer.appendChild(tr);

//         const audioForDuration = new Audio(`music/${src}`);
//         audioForDuration.addEventListener("loadedmetadata", () => {
//             const duration = audioForDuration.duration;
//             let songDuration = formatTime(duration);
//             tr.querySelector(".length h5").innerText = songDuration;
//         });

//         tr.addEventListener("click", (e) => {

//             // lets add to favourits when click on heart

//             if (e.target.classList.contains("fa-heart")){
//                 addToFavourits(index);
//                 e.target.classList.toggle("active");
//                 // if heart clicked just add to favourits dont play
//                 return;
//             }


//             currentSongIndex = index;
//             loadSong(currentSongIndex);
//             playSong();
//         });
//     });
// }

// function formatTime(time) {
//     let minutes = Math.floor(time / 60);
//     let seconds = Math.floor(time % 60);
//     seconds = seconds < 10 ? `0${seconds}` : seconds;
//     return `${minutes}:${seconds}`;
// }

// function loadSong(num) {
//     const song = songs[num];
//     infoWrapper.innerHTML = `<h2>${song.title}</h2>
//     <h3>${song.artist}</h3>`;
//     currentSongTitle.innerHTML = song.title;
//     coverImage.style.backgroundImage = `url(images/${song.img_src})`;

//     audio.src = `music/${song.src}`;
//     console.log(`Loaded song: ${song.title}`);

//     if (favourits.includes(num)) {
//         currentFavourite.classList.add("active");
//     } else {
//         currentFavourite.classList.remove("active");
//     }
// }

// function playSong() {
//     audio.play().then(() => {
//         console.log("Playing song...");
//         playing = true;
//         playPauseBtn.classList.replace("fa-play", "fa-pause");
//     }).catch(err => {
//         console.error("Error playing audio:", err);
//     });
// }

// function pauseSong() {
//     audio.pause();
//     console.log("Paused song.");
//     playing = false;
//     playPauseBtn.classList.replace("fa-pause", "fa-play");
// }

// const playPauseBtn = document.querySelector("#playpause"),
//     nextBtn = document.querySelector("#next"),
//     prevBtn = document.querySelector("#prev");

// playPauseBtn.addEventListener("click", () => {
//     if (playing) {
//         pauseSong();
//     } else {
//         playSong();
//     }
// });

// nextBtn.addEventListener("click", () => {


//     // shuffle when playing next song
//     if (shuffle){
//         shuffleFunc();
//         loadSong(currentSong);
//         return;
//         // return because we don't want to play next song now
//     }

//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//     loadSong(currentSongIndex);
//     playSong();
//     console.log("Next song triggered.");
// });

// prevBtn.addEventListener("click", () => {

//     // same on prev songs
//     if (shuffle){
//         shuffleFunc();
//         loadSong(currentSong);
//         return;
//         // return because we don't want to play next song now
//     }

//     currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     loadSong(currentSongIndex);
//     playSong();
//     console.log("Previous song triggered.");
// });

// currentFavourite.addEventListener("click", () => {
//     if (favourits.includes(currentSongIndex)) {
//         favourits = favourits.filter(fav => fav !== currentSongIndex);
//         currentFavourite.classList.remove("active");
//     } else {
//         favourits.push(currentSongIndex);
//         currentFavourite.classList.add("active");
//     }
//     console.log("Favourite toggled.");
// });



// function nextSong(){
//     // if current song is not last in playlist
//     if(currentSong < songs.length - 1){
//         // load the next song
//         currentSong++;
        
//     }else{
//         // else if its last song then play first
//         currentSong = 0;
//     }
//     loadSong(currentSong);

//     // after load if song was playing keep playing current too

//     if (playing){
//         audio.play();
//     }
// }

// nextBtn.addEventListener("click", nextSong);

// function addToFavourits(index){

//     // check if already in favourits then remove
//     if (favourits.includes(index)){
//         favourits = favourits.filter((item) => item != index)

//         // if current playing song is removed also remove currentfavourit

//         currentFavourite.classList.remove("active");

//     }else{
//         // if not already in favourits add
//         favourits.push(index);

//         // if coming from current favourits that is index and current are equals

//         if(index == currentSong){
//             currentFavourite.classList.add("active");
//         }
//     }

//     // after adding favourits rerender playlist to show favourits

//     updatePlaylist(songs);
// }


// // also add to favourits current playing song when clicked heart

// currentFavourite.addEventListener("click", () =>{
//     addToFavourits(currentSong);
//     currentFavourite.classList.toggle("active");
// });


// // lets add shuffle functionality

// const shuffleBtn = document.querySelector("#shuffle");

// function shuffleSongs(){
//     // if shuffle false make it true or vice versa
//     shuffle = !shuffle;
//     shuffleBtn.classList.toggle("active");
// }

// shuffleBtn.addEventListener("click", shuffleSongs);

// // if shuffle true shuffle songs when playing next or prev

// function shuffleFunc(){
//     if (shuffle){
//         // select a random song from playlist
//         currentSong = Math.floor(Math.random() * songs.length);
//     }
//     // if shuffle false do nothing
// }

// // repeat functionality
// const repeatBtn = document.querySelector("#repeat")

// function repeatSong(){
//     if(repeat == 0){
//         // if repeat is off make it 1 that means repeat current song
//         repeat - 1;
//         // if repeat on meek button active
//         repeatBtn.classList.add("active");
//     }else if(repeat == 1){
//         // if repeat is 1 that is only repeat current song make it 2 that means repeat 
//         repeat = 2;
//         repeatBtn.classList.add("active");
//     }else{
//         // turn off repeat
//         repeat = 0;
//         repeatBtn.classList.remove("active");
//     }
// }

// repeat.addEventListener("click", repeatSong);
// // on one click its repeat == 1 on second repeat == 2 on third repeat  == 0 and revise


// // now if repeat on on audio end
// audio.addEventListener("ended", () =>{
//     if (repeat == 1){
//         // if repeat current song
//         // again load current song
//         loadSong(currentSong);
//         audio.play();
//     }else if(repeat == 2){
//         // if repeat playlist
//         // play next song
//         nextSong();
//         audio.play();
//     }else{
//         // if repeat off
//         // just play all playlist one time then stop
//         if(currentSong == songs.length - 1){
//             // if its last song in playlist stop playing now
//             audio.pause();
//             playPauseBtn.classList.replace("fa-pause", "fa-play");
//             playing = false;
//         }else{
//             // if not last then continue next
//             nextSong();
//             audio.play();
//         }
//     }
// });


// // let's add progress bar

// // progress function
// function progress(){
//     // let duration and current time from audio
//     let {duration, currentTime} = audio;

//     // if anyone not a number make it 0

//     isNaN(duration) ? (duration = 0) : duration;
//     isNaN(currentTime) ? (currentTime = 0) : currentTime;

//     // update time elements

//     currentTimeEl.innerHTML = formatTime(currentTime);
//     DurationEl.innerHTML = formatTime(duration);

//     // lets move the progress dot

//     let progressPercentage = (currentTime / duration) * 100;
//     progressDot.style.left = `${progressPercentage}%`;
// }

// // update progress on audio timeupdate event

// audio.addEventListener("timeupdate", progress);

// // change progress when clicked on her

// function setProgress(e){
//     let = width = this.clientWidth;
//     let clickX = e.offsetX;
//     let duration = audio.duration;
//     audio.currentTime = (clickX / width) * duration;
// }

// progressBar.addEventListener("click", setProgress);
// ?============


const menuBtn = document.querySelector(".menu-btn"),
    container = document.querySelector(".container");

const progressBar = document.querySelector(".bar"),
    progressDot = document.querySelector(".dot"),
    currentTimeEl = document.querySelector(".current-time"),
    DurationEl = document.querySelector(".duration");

menuBtn.addEventListener("click", () => {
    container.classList.toggle("active");
});

let playing = false,
    currentSongIndex = 0,
    shuffle = false,
    repeat = 0, // Default to no repeat
    favourits = [],
    audio = new Audio();

const songs = [
    {
        title: "song 1",
        artist: "artist song 1",
        img_src: "eric-nopanen-8e0EHPUx3Mo-unsplash.jpg",
        src: "g-class.mp3",
    },
    {
        title: "song 2",
        artist: "artist song 2",
        img_src: "img-2.jpg",
        src: "song-2.mp3",
    },
    {
        title: "song 3",
        artist: "artist song 3",
        img_src: "img-3.jpg",
        src: "song-3.mp3",
    },
    {
        title: "song 4",
        artist: "artist song 4",
        img_src: "img-4.jpg",
        src: "song-4.mp3",
    },
];

const playlistContainer = document.querySelector("#playlist"),
    infoWrapper = document.querySelector(".info"),
    coverImage = document.querySelector(".cover-image"),
    currentSongTitle = document.querySelector(".current-song-title"),
    currentFavourite = document.querySelector("#current-favourite");

function init() {
    updatePlaylist(songs);
    loadSong(currentSongIndex);
    console.log("Initialized and loaded first song.");
}

init();

function updatePlaylist(songs) {
    playlistContainer.innerHTML = "";

    songs.forEach((song, index) => {
        const { title, src } = song;
        const isFavourite = favourits.includes(index);

        const tr = document.createElement("tr");
        tr.classList.add("song");
        tr.innerHTML = `<td class="no">
                            <h5>${index + 1}</h5>
                        </td>
                        <td class="title">
                            <h6>${title}</h6>
                        </td>
                        <td class="length">
                            <h5>2:03</h5>
                        </td>
                        <td>
                            <i class="fas fa-heart ${isFavourite ? "active" : ""}"></i>
                        </td>`;

        playlistContainer.appendChild(tr);

        const audioForDuration = new Audio(`music/${src}`);
        audioForDuration.addEventListener("loadedmetadata", () => {
            const duration = audioForDuration.duration;
            let songDuration = formatTime(duration);
            tr.querySelector(".length h5").innerText = songDuration;
        });

        tr.addEventListener("click", (e) => {
            if (e.target.classList.contains("fa-heart")) {
                addToFavourits(index);
                e.target.classList.toggle("active");
                return;
            }

            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
    });
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
}

function loadSong(num) {
    const song = songs[num];
    infoWrapper.innerHTML = `<h2>${song.title}</h2>
    <h3>${song.artist}</h3>`;
    currentSongTitle.innerHTML = song.title;
    coverImage.style.backgroundImage = `url(images/${song.img_src})`;

    audio.src = `music/${song.src}`;
    console.log(`Loaded song: ${song.title}`);

    if (favourits.includes(num)) {
        currentFavourite.classList.add("active");
    } else {
        currentFavourite.classList.remove("active");
    }
}

function playSong() {
    audio.play().then(() => {
        console.log("Playing song...");
        playing = true;
        playPauseBtn.classList.replace("fa-play", "fa-pause");
    }).catch(err => {
        console.error("Error playing audio:", err);
    });
}

function pauseSong() {
    audio.pause();
    console.log("Paused song.");
    playing = false;
    playPauseBtn.classList.replace("fa-pause", "fa-play");
}

const playPauseBtn = document.querySelector("#playpause"),
    nextBtn = document.querySelector("#next"),
    prevBtn = document.querySelector("#prev");

playPauseBtn.addEventListener("click", () => {
    if (playing) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", () => {
    if (shuffle) {
        shuffleFunc();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
    console.log("Previous song triggered.");
});

currentFavourite.addEventListener("click", () => {
    addToFavourits(currentSongIndex);
    currentFavourite.classList.toggle("active");
});

function nextSong() {
    if (shuffle) {
        shuffleFunc();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);

    if (playing) {
        audio.play();
    }
    console.log("Next song triggered.");
}

function addToFavourits(index) {
    if (favourits.includes(index)) {
        favourits = favourits.filter((item) => item !== index);
        if (index === currentSongIndex) {
            currentFavourite.classList.remove("active");
        }
    } else {
        favourits.push(index);
        if (index === currentSongIndex) {
            currentFavourite.classList.add("active");
        }
    }

    updatePlaylist(songs);
}

function shuffleSongs() {
    shuffle = !shuffle;
    shuffleBtn.classList.toggle("active");
}

const shuffleBtn = document.querySelector("#shuffle");
shuffleBtn.addEventListener("click", shuffleSongs);

function shuffleFunc() {
    if (shuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    }
}

function repeatSong() {
    if (repeat === 0) {
        repeat = 1;
        repeatBtn.classList.add("active");
    } else if (repeat === 1) {
        repeat = 2;
        repeatBtn.classList.add("active");
    } else {
        repeat = 0;
        repeatBtn.classList.remove("active");
    }
}

const repeatBtn = document.querySelector("#repeat");
repeatBtn.addEventListener("click", repeatSong);

audio.addEventListener("ended", () => {
    if (repeat === 1) {
        loadSong(currentSongIndex);
        audio.play();
    } else if (repeat === 2) {
        nextSong();
    } else {
        if (currentSongIndex === songs.length - 1) {
            audio.pause();
            playPauseBtn.classList.replace("fa-pause", "fa-play");
            playing = false;
        } else {
            nextSong();
        }
    }
});

function progress() {
    let { duration, currentTime } = audio;

    if (isNaN(duration)) duration = 0;
    if (isNaN(currentTime)) currentTime = 0;

    currentTimeEl.innerHTML = formatTime(currentTime);
    DurationEl.innerHTML = formatTime(duration);

    if (duration > 0) {
        let progressPercentage = (currentTime / duration) * 100;
        progressDot.style.left = `${progressPercentage}%`;
    }
}

audio.addEventListener("timeupdate", progress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

progressBar.addEventListener("click", setProgress);

// search button 
document.addEventListener('DOMContentLoaded', function() {
    var searchBtn = document.getElementById('searchBtn');
    var searchBar = document.getElementById('search-bar');

    // Toggle search bar visibility on search icon click
    searchBtn.addEventListener('click', function() {
        searchBar.classList.toggle('show');
        searchBtn.classList.toggle('hide');
        searchBtn.classList.toggle('show');
    });

    // Hide search bar and show search icon when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBar.classList.remove('show');
            searchBtn.classList.remove('hide');
            searchBtn.classList.add('show');
        }
    });
});


// online search





