function apps(url) {
  window.navigator.serviceWorker.register('/sw.js', {
    scope: __uv$config.prefix
  }).then(() => {
    localStorage.setItem('agUrl', location.href = __uv$config.prefix + __uv$config.encodeUrl(url));
    location.href = '/homework';
  });
}

function openLink(url) {
  apps('https://' + url);
}

// some goofy clock for lazy people that cant read a real clock
function clock() {
  let currentTime = new Date();
  let hours = currentTime.setHours;
  let minutes = currentTime.setMinutes;
  let seconds = currentTime.setSeconds;

  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let period = (hours < 12) ? "AM" : "PM";
  document.getElementById("").innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;

  setTimeout(updateClock, 1000);

  updateClock();
}

