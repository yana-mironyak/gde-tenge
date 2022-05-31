import throttle from 'lodash.throttle';

const sttButton = document.querySelector('.stt-button');
let timerId = null;

window.onscroll = throttle(onScroll, 500);
sttButton.onclick = onClick;

function hideButton() {
  sttButton.classList.add('stt-button--hidden'); 
}

function onScroll() {
  if (timerId) {
    clearTimeout(timerId);
  }
   
  if (window.scrollY > 700) {
    sttButton.classList.remove('stt-button--hidden');
  }
  else if (window.scrollY > 600 && window.scrollY < 700) {
    hideButton();
  }

  timerId = setTimeout(hideButton, 1000);
}

function onClick() {
  console.log('click');
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
  });
}

