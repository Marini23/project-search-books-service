// HEADER
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.body;
const themeSwitch = document.querySelector('.theme-switch-toggle');

themeSwitch.addEventListener('change', onChange);

currentTheme();

function onChange(evt) {
  if (!evt.currentTarget.checked) {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);
  if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
      themeSwitch.checked = true;
    }
  } else {
    body.classList.add(Theme.LIGHT);
  }
}
