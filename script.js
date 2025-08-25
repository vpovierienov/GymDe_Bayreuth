/* Menu JS open/close */
const navMenu = document.getElementById ('nav-menu');
  navToggle  = document.getElementById('nav-toggle');
  navClose = document.getElementById('nav-close')

  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu');

    /* Show */
    navToggle.addEventListener ('click', () => {
      navMenu.classList.add('show-menu');
    })

    navClose.addEventListener ('click', () => {
      navMenu.classList.remove('show-menu');
    })
  })

/*Show Scroll Up */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350 
  ? scrollUp.classList.add('show-scroll')
  : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/* Reveal JS `` ATTENTION IN PARAMETERS */
const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home-data, .footer-container, footer-group`);
sr.reveal(`.home-img`, { delay: 700, origin: 'bottom'}) ;
sr.reveal(`.logo-img, .program-card, .pricing-card`, { interval: 100 }) ;
sr.reveal(`.choose-group, .calculate-content`, { origin: 'left' }) ;
sr.reveal(`.choose-content, .calculate-images`, { origin: 'right' }) ;


const calculateForm = document.getElementById('calculate-form'),
  calculateCm = document.getElementById('calculate-cm'),
  calculateKG = document.getElementById('calculate-kg'),
  calculateMessage = document.querySelector('.calculate-message'); // Оставляем, так как в HTML это класс

/* Event object */
const calculateBmi = (e) => {
  e.preventDefault();

  if (calculateCm.value === '' || calculateKG.value === '') {
    calculateMessage.classList.add('color-red');
    calculateMessage.textContent = 'Fill in the Height and Weight 👨‍💻';

    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
    return;
  }

  const cm = calculateCm.value / 100;
  const kg = calculateKG.value;
  const bmi = Math.round(kg / (cm * cm));

  if (bmi < 18.5) {
    calculateMessage.classList.add('color-first');
    calculateMessage.textContent = `Your BMI is ${bmi} - and you are skinny 😔`;
  } else if (bmi < 25) {
    calculateMessage.classList.add('color-first');
    calculateMessage.textContent = `Your BMI is ${bmi} - and you are healthy 👌`;
  } else {
    calculateMessage.classList.add('color-first');
    calculateMessage.textContent = `Your BMI is ${bmi} - and you are overweight 😔`;
  }
};

calculateForm.addEventListener('submit', calculateBmi);

/* Проблема путаюсь в скобках */ 