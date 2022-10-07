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
    img: '../images/speakers/speaker01.jpg',
    name: 'Nate Berkus',
    bio: 'born, 1971 California, United States.',
    about:
      'He runs the Chicago interior design firm Nate Berkus  was a regularly featured guest on The Oprah Winfrey Show.',
  },
  {
    id: 2,
    img: '../images/speakers/speaker02.jpg',
    name: 'Kelly Wearstler',
    bio: 'born, 1967 Myrtle Beach, South Carolina.',
    about:
      'she is an American designer creating multi-faceted, experiential residential, hospitality, commercial and retail environments as well as expansive collections of lifestyle product designs',
  },
  {
    id: 3,
    img: '../images/speakers/speaker03.jpg',
    name: 'Thomas O.Brien',
    bio: 'Born, 1961  New York, United States.',
    about:
      'He is an interior and home furnishings designer based in New York City. He is the founder and President of Aero Studios',
  },
  {
    id: 4,
    img: '../images/speakers/speaker04.webp',
    name: 'Justina Blakeney',
    bio: 'Born, 1979  California, United States.',
    about:
      'she is a designer, artist, entrepreneur, speaker, and bestselling author. She is the founder and creative director of home décor brand.',
  },
  {
    id: 5,
    img: '../images/speakers/speaker05.jpeg',
    name: 'Tiffany Brooks',
    bio: 'born, 1979  an American interior designer.',
    about:
      'She was the season eight winner of HGTV Star and also hosted HGTVs The Most Embarrassing Rooms in America.',
  },
  {
    id: 6,
    img: '../images/speakers/speaker06.jpg',
    name: 'Bobby Berk',
    bio: 'Born, 1981  Texas, United States',
    about:
      'He is an American interior designer, reality television personality and author.',
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
