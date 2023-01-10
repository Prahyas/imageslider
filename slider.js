const leftArrow = document.querySelector('.leftarrow');
const rightArrow = document.querySelector('.rightarrow');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let slideNumber = 1;

leftArrow.addEventListener('click', () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 450}px)`;
    slideNumber--;
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 450}px)`;
    slideNumber = images.length;
  }
  console.log('slideNumber', slideNumber);
});

rightArrow.addEventListener('click', () => {
  if (slideNumber < images.length) {
    slider.style.transform = `translateX(-${slideNumber * 450}px)`;
    slideNumber++;
  } else {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
  }
  console.log('slideNumber', slideNumber);
});
