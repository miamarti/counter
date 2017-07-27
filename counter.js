var count = 0,
    click = 0,
    timer;
document.body.addEventListener('click', function () {
  click++;

  if (click === 3) {
    click = 0;
  }
  if (timer) {
    clearTimeout(timer);    
  }

  var timer = setTimeout(function () {
    if (click === 1) {
      count++;
    } else if (click === 2 && count > 0) {
      count--;
    }
    click = 0;
    var s = "000000000" + count;
    document.querySelector('.number').innerHTML = s.substr(s.length-4);

    (new Audio('beep3.mp3')).play();
  }, 500);
});