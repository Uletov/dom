document.addEventListener('DOMContentLoaded', function () {
  let entryField = document.querySelector('.entry-field');
  let startBtn = document.querySelector('.start-btn');
  let timerCount = document.querySelector('.timer-count');

  function takeValue() {
    timerCount.textContent = entryField.value;
  }
  entryField.addEventListener('input', takeValue);

  takeValue();

  function timer() {
    timerCount.textContent = parseInt(timerCount.textContent) - 1;
  }

  function start() {
    window.setInterval(timer, 1000);
  }

  startBtn.addEventListener('click', start());
});