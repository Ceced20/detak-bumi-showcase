document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const mobileNavLinks = document.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Countdown Timer
    function updateCountdown() {
        const targetDate = new Date('May 27, 2025 19:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        if (timeLeft <= 0) {
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
            return;
        }
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
    
    // Initial countdown and update every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Schedule Tab Switching
    const scheduleTabs = document.querySelectorAll('.schedule-tab');
    const timelines = document.querySelectorAll('.timeline');
    
    scheduleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            scheduleTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all timelines
            timelines.forEach(timeline => timeline.classList.remove('active'));
            // Show timeline corresponding to clicked tab
            const targetDate = this.getAttribute('data-date');
            document.getElementById(targetDate).classList.add('active');
        });
    });
    
    // Gallery Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const caption = this.querySelector('.gallery-overlay p');
            
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalCaption.textContent = caption.textContent;
        });
    });
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            // Direct mailto link
            const subject = encodeURIComponent('NBDK Show Contact Form');
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
            
            // Open default email client
            window.open(`mailto:xavierceceda@gmail.com?subject=${subject}&body=${body}`, '_blank');
            
            // Form feedback
            alert('Your message has been sent! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position with navbar offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links based on scroll position
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Get scroll position with offset for navbar
            const navHeight = document.querySelector('.navbar').offsetHeight;
            
            if (window.pageYOffset >= sectionTop - navHeight - 10) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Update active menu item on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Set active link initially
    setActiveNavLink();
    
    // Disable right-click on gallery images (optional)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
    });
    
    // Logo image - updated to use the new logo
    const logoImage = document.createElement('img');
    logoImage.src = 'public/lovable-uploads/63ddf673-224c-4942-b29e-0b41b7e581b7.png';
    logoImage.onload = function() {
        const logoCircles = document.querySelectorAll('.logo-circle, .logo-circle-medium');
        logoCircles.forEach(circle => {
            // Clear existing content
            circle.innerHTML = '';
            // Add logo image
            const imgClone = logoImage.cloneNode(true);
            imgClone.style.width = '100%';
            imgClone.style.height = '100%';
            imgClone.style.objectFit = 'contain';
            circle.appendChild(imgClone);
        });
    };
});
