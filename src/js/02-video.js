import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';

// get <iframe> video element
const iframe = document.querySelector('iframe');

// init player with options
const player = new Player(iframe, {
  background: true,
  loop: true,
  fullscreen: true,
  quality: '1080p',
  responsive: true,
});

// function to save current video time
function saveCurrentTime(currentTime) {
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(currentTime.seconds));
}

// add listen event
player.on('timeupdate', throttle(saveCurrentTime, 1000));

// set video playback time
const savedCurrentTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

player.setCurrentTime(savedCurrentTime);
