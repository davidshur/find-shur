import jurne from '../assets/images/jurne.png';
import notetaker from '../assets/images/notetaker.png';
import userdir from '../assets/images/userdir.png';

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
  }
];

export default PROJECTS;