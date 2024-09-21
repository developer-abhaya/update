const languages = ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Python', 'PHP', 'Java'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;  // Speed for typing effect
    const pauseTime = 3000;   // Pause time after a word is fully typed

    function typeWriter() {
      const languageElement = document.getElementById('dynamicLanguage');
      const currentLanguage = languages[currentIndex];

      if (isDeleting) {
        languageElement.textContent = currentLanguage.slice(0, charIndex--);
      } else {
        languageElement.textContent = currentLanguage.slice(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentLanguage.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseTime);  // Pause before starting to delete
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % languages.length;
        setTimeout(typeWriter, 500);  // Pause briefly before typing the next word
      } else {
        setTimeout(typeWriter, isDeleting ? 50 : typingSpeed);
      }
    }

    // Initialize the typing effect on page load
    document.addEventListener('DOMContentLoaded', typeWriter);






    function toggleDropdown() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.drop')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    