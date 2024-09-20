// Get the theme toggle element
const themeToggle = document.getElementById('themeToggle');

// when page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // check user preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeToggle.checked = true;
    document.body.classList.add('dark-theme');
  }

  // check local storage
  if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
    document.body.classList.add('dark-theme');
  }
})
// add event listener
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
})
