// Navigation
const hambugerMenu = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-link');

// Toggle the menu
hambugerMenu.addEventListener('click', () => {
  hambugerMenu.classList.toggle('active');

  navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hambugerMenu.classList.remove('active');

    navMenu.classList.remove('active');
  });
});

const speakers = [
  {
    id: 1,
    img: '../images/speakers/speaker_01.png',
    name: 'Yochai Bankler',
    bio: 'Professor at Harvard Low School',
    about:
    'Focusing on a collaborative approach in a networked environment, he created the concept ofco-production based on sharing',
  },
  {
    id: 2,
    img: '../images/speakers/speaker_02.png',
    name: 'Kilnam Chol',
    bio: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    about:
    'By developing Asias first Internet protocol network SDN and leading Koreas first private line Internet connection in 1990.',
  },
  {
    id: 3,
    img: '../images/speakers/speaker_03.png',
    name: 'Sohyeong Noh',
    bio: 'Art Center Nabi Director, CC Korea Director',
    about:
    'As the author of [Digital Art Art of Our Time], he opened Art Center Nabi, Koreas first digital art institution in 2000.',
  },
  {
    id: 4,
    img: '../images/speakers/speaker_04.png',
    name: 'Julia Reda',
    bio: 'Head of the Young Pirates of Europe',
    about:
    'European integration and online youth participation in politics and democracy are major concerns,and a report has been published that will potentially affect.',
  },
  {
    id: 5,
    img: '../images/speakers/speaker_05.png',
    name: 'Lila Tretikov',
    bio: 'Secretary General of the Wikimedia Foundation',
    about:
    'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people',
  },
  {
    id: 6,
    img: '../images/speakers/speaker_06.png',
    name: 'Ryan Merkley',
    bio: 'Creative Commons CEO, Former Mozilla Foundation COO',
    about:
    'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const displaySpeakers = speakers.map(
  (speaker) => `
    <div id=${speaker.id} >
      <div class="speaker-container">
            <img
              src="${speaker.img}"
              class="speaker-img"
              alt="speaker"
            />
            <div class="speaker-content">
              <h4>${speaker.name}</h4>
              <em>${speaker.bio}</em>
              <p>
                ${speaker.about}
              </p>
            </div>
        </div>
    </div>
    `,
);

// See More

const seeMore = document.querySelector('.see-more');
const seeLess = document.querySelector('.see-less');
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('wrapper').innerHTML = displaySpeakers.join('');
  seeMore.style.display = 'none';
  seeLess.style.display = 'none';
});
