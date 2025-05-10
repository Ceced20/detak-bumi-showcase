
// Countdown timer functionality
document.addEventListener('DOMContentLoaded', function() {
  const countdownDate = new Date("May 27, 2025 18:30:00").getTime();

  const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update countdown display
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdownTimer);
      document.querySelector(".countdown-grid").innerHTML = "<h2>The event has begun!</h2>";
    }
  }, 1000);

  // Update current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle?.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('open');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Schedule tabs functionality
  const scheduleTabs = document.querySelectorAll('.schedule-tab');
  const timelineContainers = document.querySelectorAll('.timeline');
  const dateDisplay = document.querySelector('.date-container span');
  
  scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      scheduleTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show selected timeline
      const dateId = tab.getAttribute('data-date');
      timelineContainers.forEach(timeline => {
        timeline.classList.remove('active');
      });
      document.getElementById(dateId).classList.add('active');
      
      // Update the date display
      if (dateId === 'may-27') {
        dateDisplay.textContent = 'May 27, 2025';
      } else {
        dateDisplay.textContent = 'May 28, 2025';
      }
    });
  });

  // Image modal for gallery
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('modalCaption');
  const closeModal = document.querySelector('.close-modal');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = "block";
      const img = this.querySelector('img');
      const caption = this.querySelector('.gallery-overlay p');
      modalImg.src = img.src;
      captionText.textContent = caption.textContent;
    });
  });
  
  closeModal?.addEventListener('click', function() {
    modal.style.display = "none";
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  
  contactForm?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Show success message
        contactForm.reset();
        alert('Message sent successfully! We\'ll get back to you soon.');
      } else {
        // Show error
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      alert('Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }
  });
});
