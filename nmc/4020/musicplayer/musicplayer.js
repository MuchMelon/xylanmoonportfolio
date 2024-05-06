let juke = document.querySelector('#juke');
let songTime = document.querySelector('#songprogress');
let fontTime = document.querySelector('#time');

let hbbox = document.querySelector('#heartbreak');
let rbbox = document.querySelector('#rhythmblues');
let punkbox = document.querySelector('#punk');
let upbeatbox = document.querySelector('#upbeat');
let musicalbox = document.querySelector('#musical');
let soulbox = document.querySelector('#soul'); 

let songimage = document.querySelector('#songimage');
let songtitle = document.querySelector('#songtitle');
let artistname = document.querySelector('#authorname');
let songlist = document.querySelector('#songlist'); 

var randomSong= 0;
var randomArray = 0;
var currentArray = 0;
var autoplayNextBool = false;


var availablesongs = [];

var rbsongs = [
    {song_name: 'IMU',
    artist:'Muni Long',
    album_cover: 'images/IMU.jpeg',
    song_file: 'songs/IMU.m4a'},

    {song_name: 'Fallin',
    artist:'Alicia Keys',
    album_cover: 'images/fallin.jpeg',
    song_file: 'songs/fallin.m4a'},

    {song_name: 'Me & U',
    artist:'Tems',
    album_cover: 'images/M&U.jpeg',
    song_file: 'songs/M&U.m4a'},

    {song_name: 'Leak It',
    artist:'Ari Lennox, Chloex',
    album_cover: 'images/LI.jpeg',
    song_file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/7a/0d/1b/7a0d1bc5-8a9a-ee75-1281-559736d8ba02/mzaf_8932875132044837260.plus.aac.p.m4a'},

    {song_name: 'I Wish I Missed My Ex',
    artist:'Mahalia',
    album_cover: 'images/IWIMME.jpeg',
    song_file: 'songs/IWIMME.m4a'},
    
    {song_name: 'High Luv',
    artist:'Victoria Monet',
    album_cover: 'images/highluv.jpeg',
    song_file: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9b/96/79/9b9679a7-c1fe-f7a6-1596-8af84b3809b1/mzaf_14976585991956747964.plus.aac.p.m4a'}
]
var punk = [
    {song_name: 'Fake Happy',
    artist:'Paramore',
    album_cover: 'images/RoseColoredBoy.jpeg',
    song_file: 'songs/fakehappy.m4a'},

    {song_name: 'Rose-Colored Boy',
    artist:'Paramore',
    album_cover: 'images/RoseColoredBoy.jpeg',
    song_file: 'songs/RCB.m4a'},

    {song_name: 'Casualty',
    artist:'Mothica',
    album_cover: 'images/casualty.jpeg',
    song_file: 'songs/Mothica.m4a'},

    {song_name: 'im not crying youre crying',
    artist:'Pinkshift',
    album_cover: 'images/INCYC.jpeg',
    song_file: 'songs/INCYC.m4a'},
];

var upbeat = [ 
    {song_name: 'Your Age',
    artist:'Rina Sawayama',
    album_cover: 'images/rinasawayama.jpeg',
    song_file: 'songs/ya.m4a'},

    {song_name: 'Not My Fault',
    artist:'Renee Rapp',
    album_cover: 'images/meangirls.jpeg',
    song_file: 'songs/nmf.m4a'},

    {song_name: 'Run Wild',
    artist:'Thutmose',
    album_cover: 'images/runwild.jpeg',
    song_file: 'songs/runwild.m4a'},

    {song_name: 'Enemy',
    artist:'Arcane',
    album_cover: 'images/arcane.jpeg',
    song_file: 'songs/Enemy.m4a'}

];
var musicals = [
    {song_name: 'I Dont Need Your Love',
    artist:'Six: The Musical',
    album_cover: 'images/noway.jpeg',
    song_file: 'songs/IDNYL.m4a'},

    {song_name: 'No Way',
    artist:'Six: The Musical',
    album_cover: 'images/noway.jpeg',
    song_file: 'songs/nw.m4a'},

    {song_name: 'Last Midnight',
    artist:'Into the Woods',
    album_cover: 'images/LM.jpeg',
    song_file: 'songs/LM.m4a'},

    {song_name: 'Say My Name',
    artist:'Beetlejuice: The Musical',
    album_cover: 'images/beetlejuice.jpeg',
    song_file: 'songs/SMN.m4a'}
];
var soulsongs = [
    {song_name: 'Pollyanna',
    artist:'The 8-Bit Band',
    album_cover: 'images/pollyanna.jpeg',
    song_file: 'songs/pollyanna.m4a'},

    {song_name: 'Our Love',
    artist:'Arcane',
    album_cover: 'images/arcane.jpeg',
    song_file: 'songs/ourlove.m4a'},

    {song_name: 'How Deep Is Your Love',
    artist:'Yebba',
    album_cover: 'images/HDIYL.jpeg',
    song_file: 'songs/HDIYL.m4a'},

    {song_name: 'Boomerang',
    artist:'Yebba',
    album_cover: 'images/boomerang.jpeg',
    song_file: 'songs/boomerang.m4a'},
];
var hbsongs = [
    {song_name: "Girls Like Me Don't Cry",
    artist:'thuy',
    album_cover: 'images/glmdc.jpeg',
    song_file: 'songs/GLMDC.m4a'},

    {song_name: 'IMU',
    artist:'Muni Long',
    album_cover: 'images/IMU.jpeg',
    song_file: 'songs/IMU.m4a'}, 

    {song_name: 'From the Start',
    artist:'Laufey',
    album_cover: 'images/laufey.jpeg',
    song_file: 'songs/fts.m4a'},

    {song_name: 'Heartbreak Anniversary',
    artist:'Giveon',
    album_cover: 'images/heartbreakanniversary.jpeg',
    song_file: 'songs/heartbreakanniversary.m4a'},

    {song_name: 'Without Me',
    artist:'Halsey',
    album_cover: 'images/WM.jpeg',
    song_file: 'songs/WM.m4a'},
]

var playlists = [];

var audio = 0;
function player(tune){
    pausePlay();
    //juke.innerHTML = "<audio autoplay src="+tune+ " type='audio/m4a'></audio>";
}

function pausePlay() {
    if(audio.paused == true) {
        audio.play();
    }
    else if(audio.paused == false) {
        audio.pause();
        console.log(audio);
    }
}
function pause() {
    audio.pause();
}
function reset() {
    audio.load();
}
function skipForward() {
    audio.currentTime = audio.currentTime + 35;
    console.log(audio + "skip");
}
function rewindBack() {
    audio.currentTime = audio.currentTime - 35;
    console.log(audio + "rewind");
}

setInterval(function nextSong() {
    if(audio.ended == true) {
        console.log("Hello World");
        //juke.innerHTML ;
        audio.load();
        randomSong = Math.floor(Math.random() * currentArray.length);
        audio = new Audio(currentArray[randomSong].song_file);
        showCurrentInfo(currentArray[randomSong].album_cover,currentArray[randomSong].song_name,currentArray[randomSong].artist);
        audio.play();
        if (autoplayNextBool == true) {
            audio.play()
        }
        console.log(randomSong);
    }
},10);

setInterval(function updateBar() {
    var time = audio.currentTime*3.34 + '%';
    songTime.style.setProperty('width', time);
    fontTime.innerHTML = (audio.currentTime).toFixed(2);
}

,10)

function showCurrentInfo(imglink, title,author) {
    songtitle.innerHTML = title;
    artistname.innerHTML = author;
    songimage.innerHTML = "<img src='" + imglink + "'>";
    
}

function addPlaylist(playlistName){
    playlistName =[];
    playlists.push(playlistName);
}

setInterval(function displayAlbumCover() {
    hbbox.style.backgroundImage = "url('" + hbsongs[Math.floor(Math.random() * hbsongs.length)].album_cover + "')";
    rbbox.style.backgroundImage = "url('" + rbsongs[Math.floor(Math.random() * rbsongs.length)].album_cover + "')";
    soulbox.style.backgroundImage = "url('" + soulsongs[Math.floor(Math.random() * soulsongs.length)].album_cover + "')";
    punkbox.style.backgroundImage = "url('" + punk[Math.floor(Math.random() * punk.length)].album_cover + "')";
    musicalbox.style.backgroundImage = "url('" + musicals[Math.floor(Math.random() * musicals.length)].album_cover + "')";
    upbeatbox.style.backgroundImage = "url('" + upbeat[Math.floor(Math.random() * upbeat.length)].album_cover + "')";
}
, 5000)

function setAudio(arraySongs, songtype) {
    if(audio == 0 ){
        randomSong = Math.floor(Math.random() * arraySongs.length);
        audio = new Audio(arraySongs[randomSong].song_file);
        showCurrentInfo(arraySongs[randomSong].album_cover,arraySongs[randomSong].song_name,arraySongs[randomSong].artist);
        songlist.innerHTML = songtype;
        audio.load();
        audio.play();
    } else {
        audio.load();
        randomSong = Math.floor(Math.random() * arraySongs.length);
        audio = new Audio(arraySongs[randomSong].song_file);
        showCurrentInfo(arraySongs[randomSong].album_cover,arraySongs[randomSong].song_name,arraySongs[randomSong].artist);
        songlist.innerHTML = songtype;
        audio.play();
    }
    currentArray = arraySongs;
    console.log(audio);
};

function autoplayNext(){
    if(autoplayNextBool == false) {
        autoplayNext = true;
    } else {
        autoplayNextBool = false;
    }
}
