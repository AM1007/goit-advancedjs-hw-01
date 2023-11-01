import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// Saving the player's activity in Local Storage

const onPlay = function (data) {
  try {
    const strigifiedData = JSON.stringify(data);
    localStorage.setItem(LS_KEY, strigifiedData);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
player.on('timeupdate', throttle(onPlay, 1000));

// Function to transfer pause to a newly loaded page
const onPlayback = function () {
  try {
    const breakpoint = localStorage.getItem(LS_KEY);
    if (JSON.parse(breakpoint) === null) {
      return;
    }
    let paused = JSON.parse(breakpoint)['seconds'];
    paused = player.setCurrentTime(paused);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
onPlayback();

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// VideoPlayer styles

iframe.style.cssText = `position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  z-index: 10`;

// Mirrored background

iframe.insertAdjacentHTML(
  'afterend',
  `<iframe
      id="vimeo-reflection"
      src="https://player.vimeo.com/video/878916453?autopause=false"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>`
);

const reflect = document.querySelector('#vimeo-reflection');
const reflection = new Player(reflect);

reflect.style.cssText = `position: absolute;
top: -20%;
left: -20%;
width: 150%;
height: 150%;
opacity: 0.5;
 `;

reflection.setMuted(true);

player.setAutopause(false);

iframe.focus();

player.on('play', () => {
  player.getCurrentTime().then(time => {
    reflection.setCurrentTime(time);
  });
  reflection.play();
});

player.on('pause', () => {
  reflection.pause();
});