const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// ตรวจสอบว่ามีการตั้งค่าโหมดมืดใน localStorage หรือไม่
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
    toggleButton.classList.add('dark');
} else {
    toggleButton.textContent = 'Switch to Dark Mode';
    toggleButton.classList.add('light');
}

// การสลับโหมด
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
        toggleButton.classList.remove('dark');
        toggleButton.classList.add('light');
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
        toggleButton.classList.remove('light');
        toggleButton.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    }
});

// Place this script at the end of the body tag
  window.onscroll = function() {
    const button = document.getElementById('top-button');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  document.getElementById('top-button').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



