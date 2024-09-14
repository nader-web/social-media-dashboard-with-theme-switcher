// Get the theme toggle element
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  // Function to toggle the theme
  function toggleTheme() {
    // Check if the current theme is dark
    if (document.body.classList.contains('dark-theme')) {
      // If it is, remove the dark-theme class and set the light-theme class
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      // If it's not, remove the light-theme class and set the dark-theme class
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }

    // Store the selected theme in local storage
    try {
      localStorage.setItem('selectedTheme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    } catch (error) {
      console.error('Error setting local storage:', error);
    }
  }

  // Event listener for the theme toggle
  themeToggle.addEventListener('change', toggleTheme);

  // Restore the selected theme from local storage on page load
  function restoreTheme() {
    try {
      const selectedTheme = localStorage.getItem('selectedTheme');
      if (selectedTheme) {
        document.body.classList.add(selectedTheme === 'dark' ? 'dark-theme' : 'light-theme');
        themeToggle.checked = selectedTheme === 'dark';
      }
    } catch (error) {
      console.error('Error restoring theme from local storage:', error);
    }
  }

  restoreTheme();
}