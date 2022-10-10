const clock = document.getElementById('clock');

function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = 'AM';

  if (h === 0) {
    h = 12;
  } else if (h >= 12) {
    h = h - 12;
    ampm = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  const time = h + ' : ' + m + ' : ' + s + ' ' + ampm;
  clock.innerText = time;

  setTimeout(showTime, 1000);
}

showTime();
