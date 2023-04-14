// import _ from 'lodash';
// import './style.css';
import { refresh } from './modules/sendAndReceive.js';

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', () => {
  refresh();
});

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  addYourData();
});

// window.onload = createNewGame();