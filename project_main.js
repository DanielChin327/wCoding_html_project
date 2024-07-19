document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const darkStyle = document.getElementById('dark-style');

  themeToggle.addEventListener('click', function(event) {
    event.preventDefault();

    if (darkStyle.disabled) {
      darkStyle.disabled = false;
      themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
      darkStyle.disabled = true;
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});
