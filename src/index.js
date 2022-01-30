import './images/sprite.svg';
import './styles.css';
import menuScript from './templates/menu.handlebars';
import menuObj from './menu.json';
import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme;

function init() {
  currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    refs.bodyRef.classList.add(currentTheme);
    if (currentTheme === Theme.DARK ) {
      refs.checkboxRef.setAttribute('checked', 'true');
    }
  } else {
    currentTheme = Theme.LIGHT;
    refs.bodyRef.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }

  refs.ulRef.innerHTML = menuScript(menuObj);

  refs.checkboxRef.addEventListener('change', changeTheme);
}

function changeTheme(event) {
  refs.bodyRef.classList.remove(currentTheme);
  currentTheme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  refs.bodyRef.classList.add(currentTheme);
  localStorage.setItem('theme', currentTheme);
}

init();
