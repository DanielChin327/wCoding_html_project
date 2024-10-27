
document.addEventListener('DOMContentLoaded', function() {

  // set an ID from the HTML (One from the Moon Picture. The other is the entire dark css style.)
  const themeToggle = document.getElementById('theme-toggle');
  const darkStyle = document.getElementById('dark-style');


// themeToggle -> comes from the const above.
  themeToggle.addEventListener('click', function(event) {
    event.preventDefault();

    //the disabled comes from the HTML css dark style tag.
    if (darkStyle.disabled) {
      darkStyle.disabled = false;
      themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
      darkStyle.disabled = true;
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});
