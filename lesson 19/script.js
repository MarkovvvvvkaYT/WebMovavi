const audio1 = document.getElementById('miniAudio1');
const btn1 = document.getElementById('miniPlayBtn1');

btn1.addEventListener('click', () => {
  if (audio1.paused) {
    audio1.play();
    btn1.textContent = '⏸';
    btn1.classList.add('playing');
  } else {
    audio1.pause();
    btn1.textContent = '▶';
    btn1.classList.remove('playing');
  }
});

audio1.addEventListener('ended', () => {
  btn1.textContent = '▶';
  btn1.classList.remove('playing');
});


const audio2 = document.getElementById('miniAudio2');
const btn2 = document.getElementById('miniPlayBtn2');

btn2.addEventListener('click', () => {
  if (audio2.paused) {
    audio2.play();
    btn2.textContent = '⏸';
    btn2.classList.add('playing');
  } else {
    audio2.pause();
    btn2.textContent = '▶';
    btn2.classList.remove('playing');
  }
});

audio2.addEventListener('ended', () => {
  btn2.textContent = '▶';
  btn2.classList.remove('playing');
});

const audio3 = document.getElementById('miniAudio3');
const btn3 = document.getElementById('miniPlayBtn3');

btn3.addEventListener('click', () => {
  if (audio3.paused) {
    audio3.play();
    btn3.textContent = '⏸';
    btn3.classList.add('playing');
  } else {
    audio3.pause();
    btn3.textContent = '▶';
    btn3.classList.remove('playing');
  }
});

audio3.addEventListener('ended', () => {
  btn3.textContent = '▶';
  btn3.classList.remove('playing');
});

const audio4 = document.getElementById('miniAudio4');
const btn4 = document.getElementById('miniPlayBtn4');

btn4.addEventListener('click', () => {
  if (audio4.paused) {
    audio4.play();
    btn4.textContent = '⏸';
    btn4.classList.add('playing');
  } else {
    audio4.pause();
    btn4.textContent = '▶';
    btn4.classList.remove('playing');
  }
});

audio4.addEventListener('ended', () => {
  btn4.textContent = '▶';
  btn4.classList.remove('playing');
});