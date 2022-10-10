window.onload = function () {
  const watch = document.getElementById('watch');
  const buttonStart = document.querySelector('.start');
  const buttonStop = document.querySelector('.stop');
  const buttonReset = document.querySelector('.reset');
  let appendSeconds = document.getElementById('seconds');
  let appendTens = document.getElementById('tens');

  let seconds = 00;
  let tens = 00;
  let Interval;

  buttonStart.addEventListener('click', function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    console.log(tens);
  }); //addeventlistner방식

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };
  //onclick방식

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log(seconds);
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
