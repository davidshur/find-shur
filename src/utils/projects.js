import jurne from '../assets/images/jurne.png';
import budget from '../assets/images/budget.png';
import notetaker from '../assets/images/notetaker.png';
import pwgen from '../assets/images/pwgen.png';
import userdir from '../assets/images/userdir.png';
import weather from '../assets/images/weather.png';

const PROJECTS = [
  {
    id: 0,
    title: 'Jurne',
    date: '04/26/2020',
    short: 'Virtual services for car dealerships!',
    long: 'Jurne allows users to fill out forms from dealerships on line instead of in person!',
    git: 'https://github.com/thejurne/web-app',
    site: 'https://www.thejurne.com',
    image: jurne,
  },
  {
    id: 1,
    title: 'Note Taker',
    date: '2/25/2020',
    short: 'Take notes and save them for later!',
    long: 'Take notes that will persist long after you leave the site.',
    git: 'https://github.com/davidshur/note-taker',
    site: 'https://note-taker-29587.herokuapp.com/',
    image: notetaker,
  },
  {
    id: 2,
    title: 'User Directory',
    date: '04/26/2020',
    short: 'Search through your users!',
    long: 'Typing in the search box will allow you to search for the users you want.',
    git: 'https://github.com/davidshur/user-dir',
    site: 'https://user-dir-39127.herokuapp.com/',
    image: userdir,
  },
  {
    id: 3,
    title: 'Budget Tracker',
    date: '04/16/2020',
    short: 'Track budgets!',
    long: 'Track your budget, on or offline!',
    git: 'https://github.com/davidshur/budget-tracker',
    site: 'https://budget-tracker-39701.herokuapp.com/',
    image: budget,
  },
  {
    id: 4,
    title: 'Weather App',
    date: '04/26/2020',
    short: 'Check the weather!',
    long: 'Check the weather situation in your favorite cities.',
    git: 'https://github.com/davidshur/weather-app',
    site: 'https://davidshur.github.io/weather-app/',
    image: weather,
  },
  {
    id: 5,
    title: 'Password Generator',
    date: '12/18/2019',
    short: 'Generates Passwords for users!',
    long: 'By putting in critera, you will be able to generate passwords of varying complexity.',
    git: 'https://github.com/davidshur/password-generator',
    site: 'https://davidshur.github.io/password-generator/',
    image: pwgen,
  }
];

export default PROJECTS;