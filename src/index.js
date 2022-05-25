sttButton = document.querySelector('.stt-button');

window.addEventListener('scroll', onScroll);

// window.onscroll = () => {
//   if (window.scrollY > 700) {
//     sttButton.classList.remove('.stt-button--hidden');
//   } else if (window.scrollY < 700) {
//     sttButton.classList.add('.stt-button--hidden');
//   }
// }

function onScroll() {
  
  if (window.scrollY > 700) {
    console.log('scrolling');
    sttButton.classList.remove('stt-button--hidden');
  }
  else if (window.scrollY > 600 && window.scrollY < 700) {
    sttButton.classList.add('stt-button--hidden');
  }
}