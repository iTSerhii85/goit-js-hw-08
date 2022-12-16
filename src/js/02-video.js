
import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

setTime();

    player.on('timeupdate', throttle(getTime, 1000));

    function getTime () {
        player.getCurrentTime().then(function(seconds) {
            localStorage.setItem(LOCALSTORAGE_KEY, seconds)
        }).catch(function(error) {
            console.log(error);
        });
    };

    function setTime () {
        const startTime = localStorage.getItem(LOCALSTORAGE_KEY);
        player.setCurrentTime(startTime).
        catch(function(error) {
            switch (error.name) {
                case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                    break;
                default:
                // some other error occurred
                    break;
            };
        });
    };