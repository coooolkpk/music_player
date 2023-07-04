let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlIcon=document.getElementById("ctrlIcon");
let time=document.getElementById("time");

song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play");
    }
}

function pausePlay(){
    if(ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        let currentMin=Math.floor(song.currentTime/60);
        let currentSec=Math.floor(song.currentTime%60);
        if(currentSec<10){
            currentSec=`0${currentSec}`;
        }
        progress.value=song.currentTime;
        time.innerHTML=`${currentMin}:${currentSec}`;
    },500);
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    time.innerHTML=song.currentTime;
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play");
    let currentMin=Math.floor(song.currentTime/60);
    let currentSec=Math.floor(song.currentTime%60);
    if(currentSec<10){
        currentSec=`0${currentSec}`;
    }
    time.innerHTML=`${currentMin}:${currentSec}`;
}

function restartSong(){
    let currentSec=Math.floor(song.currentTime%60);
    if(currentSec<1)
    document.getElementById("back").addEventListener("click",prevSong())
    else{
        song.currentTime=0;
    time.innerHTML="0:00";
    pausePlay();
    }
}