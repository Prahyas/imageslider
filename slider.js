const leftArrow = document.querySelector('.leftarrow');
const rightArrow = document.querySelector('.rightarrow');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;

for (i = 0; i < images.length; i++) {
  const div = document.createElement('div');
  div.className = 'button';
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');

buttons[0].style.backgroundColor = 'white';

const resetButtonBg = () => {
  buttons.forEach((button, i) => {
    button.style.backgroundColor = 'transparent';
  });
};

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    slider.style.transform = `translateX(-${i * 450}px)`;
    resetButtonBg();
    button.style.backgroundColor = 'white';
    slideNumber = i + 1;
  });
});

leftArrow.addEventListener('click', () => {
  if (slideNumber > 1) {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 450}px)`;
    slideNumber--;
  } else {
    slider.style.transform = `translateX(-${(images.length - 1) * 450}px)`;
    slideNumber = images.length;
  }
  resetButtonBg();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
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
  resetButtonBg();
  buttons[slideNumber - 1].style.backgroundColor = 'white';
  console.log('slideNumber', slideNumber);
});
