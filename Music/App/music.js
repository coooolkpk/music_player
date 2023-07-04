let song1=document.getElementById("song");
let ctrlIcon1=document.getElementById("ctrlIcon");

let song_img=document.getElementById("song-img");
let song_name=document.getElementById("song-name");
let singer_name=document.getElementById("singer-name");
let song_path=document.getElementById("song");
let tracklist=[
    {
        name: "Perfect",
        path: "Perfect.mp3",
        img: "download.jpg",
        singer: "Ed Sheeran"
    },
    {
        name: "Dandelions",
        path: "Dandelions(PagalWorld).mp3",
        img: "dandelion.jpg",
        singer: "Ruth B"
    }
]

function nextSong(){
    song_name.innerText=tracklist[1].name;
    singer_name.innerText=tracklist[1].singer;
    song_path.setAttribute('src',tracklist[1].path);
    song_img.src=tracklist[1].img;
    song.play();
    pausePlay();
}

function prevSong(){
    song_name.innerText=tracklist[0].name;
    singer_name.innerText=tracklist[0].singer;
    song_path.setAttribute('src',tracklist[0].path);
    song.play();
    song_img.src=tracklist[0].img
}