function displayTimer() {
  let now = new Date().getTime();
  let end = new Date("Feb 24, 2020 8:00:00").getTime();
  let timerAmount = end - now;

    var days = Math.floor(timerAmount / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timerAmount % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(timerAmount % (1000 * 60 * 24) / (1000 * 60));
    var seconds = Math.floor(timerAmount % (1000 * 60) / (1000));
    
    const x = document.getElementById('timer');
    if (timerAmount > 0) {
    x.textContent = `Days ${days} : Hours ${hours} : Minutes ${minutes} : Seconds ${seconds}`;
    } else x.textContent = 'BOOTCAMP HAS STARTED!';
  }

displayTimer();
setInterval(displayTimer, 1000);
