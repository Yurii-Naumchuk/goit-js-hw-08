import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate',throttle( onTimeupdate,1000) );

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);

function onTimeupdate(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data.seconds)
};
