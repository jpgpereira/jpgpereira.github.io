feather.replace();
const greetings = ['Hey!', 'Hi!', 'Olá!', 'Hola!', 'Howdy!', 'Oi!'];
const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;
const intro = new TypeIt('#intro', {
  speed: 50,
  afterComplete: instance => {
    intro.destroy();
    const socialButtons = document.querySelectorAll('.social');
    socialButtons.forEach((button, index) => {
      button.classList.remove('hidden');
      button.classList.add('animated', 'fadeInLeft');
      // button.classList.add('animated', 'fadeInLeft', 'delay-' + index + 's');
    });
    const modeButton = document.getElementsByClassName('mode')[
      isDayTime ? 0 : 1
    ];
    modeButton.classList.remove('hidden');
    // TODO: uncomment after projects finished
    // const scrollDownButton = document.getElementById('scroll-down');
    // scrollDownButton.classList.add('animated', 'fadeInDown', 'infinite', 'slower');
    // scrollDownButton.classList.remove('hidden');
    // const bodyElement = document.getElementsByTagName('body')[0];
    // bodyElement.classList.remove('no-scroll');
  },
})
  .type(greetings[Math.floor(Math.random() * greetings.length)])
  .pause(1000)
  .break()
  .break()
  .type('My name is João')
  .pause(250)
  .type(' and')
  .break()
  .type('I am a Bac')
  .pause(250)
  .delete(3)
  .pause(150)
  .type('Fron')
  .pause(250)
  .delete(4)
  .pause(150)
  .type('Full Stack Developer.')
  .pause(1000)
  .break()
  .break()
  .type('I ideate')
  .pause(150)
  .delete(6)
  .pause(150)
  .type('build')
  .pause(150)
  .delete(5)
  .pause(150)
  .type('scale')
  .pause(150)
  .delete(5)
  .pause(150)
  .type(
    'break stuff @ <a target="_blank" href="https://builduplabs.com">Build Up Labs</a>.'
  )
  // .type(
  //   'break stuff @ <a onclick="scrollBUL(); return false;" href="#">Build Up Labs</a>.'
  // )
  .pause(1000)
  .break()
  .break()
  .type(
    '<span class="smaller">Drop me a line</span> <a class="smaller scale" target="_blank" href="mailto:jpgpereira.92@gmail.com">here</a><span class="smaller">.</span>'
  )
  .pause(1000)
  .delete(1)
  .pause(250)
  .type('<span class="smaller">, or you can stalk me.</span>')
  .go();
const toggle = icon => {
  const bodyElement = document.getElementsByTagName('body')[0];
  bodyElement.classList.toggle('dark');
  if (icon) {
    document.getElementsByClassName('mode')[0].classList.toggle('hidden');
    document.getElementsByClassName('mode')[1].classList.toggle('hidden');
  }
};
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
if (darkMode.matches) {
  toggle(false);
}
if (!darkMode.matches && !isDayTime) {
  toggle(false);
}
const navigate = section => {
  document.querySelector(`#${section}`).scrollIntoView({
    behavior: 'smooth',
  });
};
const scrollBUL = () => navigate('bul');
const scrollTMB = () => navigate('tmb');
const scrollIG = () => navigate('ig');
const scrollCatchup = () => navigate('catchup');
const scrollToy = () => navigate('toytoy');
const scrollFMK = () => navigate('fmk');
const scrollKMS = () => navigate('kms');
const scrollMain = () => navigate('main');
