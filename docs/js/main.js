// Wedding Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking anywhere else on the page
        document.addEventListener('click', function(event) {
            if (mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(event.target) && 
                event.target !== menuToggle) {
                mobileMenu.classList.remove('active');
            }
        });
        
        // Prevent clicks inside the mobile menu from closing it
        mobileMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Simple navbar scroll effect without auto-hide
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Basic scroll effect for all devices
            if (scrollTop > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Romantic Animated Countdown Timer
    const weddingDate = new Date('May 25, 2025 10:30:00').getTime();
    const countdownElements = {
        days: document.getElementById('countdown-days'),
        hours: document.getElementById('countdown-hours'),
        minutes: document.getElementById('countdown-minutes'),
        seconds: document.getElementById('countdown-seconds')
    };
    
    // Create hearts container for animation
    const countdown = document.querySelector('.countdown');
    if (countdown) {
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'heart-particles';
        countdown.appendChild(heartsContainer);
        
        // Create floating hearts
        for (let i = 0; i < 15; i++) {
            createHeart(heartsContainer);
        }
        
        // Set interval to create hearts periodically
        setInterval(() => {
            createHeart(heartsContainer);
        }, 3000);
    }
    
    // Function to create and animate a floating heart
    function createHeart(container) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        
        // Random position, size, and animation duration
        const size = Math.random() * 12 + 8;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 6 + 6;
        const delay = Math.random() * 5;
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.bottom = '-20px';
        heart.style.animationDuration = `${animationDuration}s`;
        heart.style.animationDelay = `${delay}s`;
        
        container.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, (animationDuration + delay) * 1000);
    }
    
    if (countdownElements.days) {
        // Store previous values for animation
        let prevValues = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            if (distance <= 0) {
                // If wedding day has passed
                Object.values(countdownElements).forEach(el => {
                    if (el) el.textContent = '00';
                });
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Format and update with animation
            updateElementWithAnimation('days', days);
            updateElementWithAnimation('hours', hours);
            updateElementWithAnimation('minutes', minutes);
            updateElementWithAnimation('seconds', seconds);
        }
        
        function updateElementWithAnimation(type, value) {
            const formattedValue = formatNumber(value);
            
            // Only animate if value has changed
            if (prevValues[type] !== formattedValue && countdownElements[type]) {
                countdownElements[type].classList.add('flip');
                
                // Update text after half of the animation
                setTimeout(() => {
                    countdownElements[type].textContent = formattedValue;
                }, 250);
                
                // Remove animation class after it completes
                setTimeout(() => {
                    countdownElements[type].classList.remove('flip');
                }, 500);
                
                prevValues[type] = formattedValue;
            }
        }
        
        function formatNumber(num) {
            return num < 10 ? `0${num}` : num.toString();
        }
        
        // Initial call
        updateCountdown();
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }
    
    // RSVP Form Submission
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(rsvpForm);
            const formObject = {};
            
            formData.forEach((value, key) => {
                // Convert 'true'/'false' strings to actual booleans for attending
                if (key === 'attending') {
                    formObject[key] = value === 'true';
                } 
                // Convert guests to number
                else if (key === 'guests') {
                    formObject[key] = parseInt(value);
                } 
                // All other fields remain as strings
                else {
                    formObject[key] = value;
                }
            });
            
            console.log('Form data to be submitted:', formObject);
            
            // Here you would normally send this data to a server
            // For now, let's simulate a successful submission
            
            // Hide form and show success message
            rsvpForm.innerHTML = `
                <div class="success-message">
                    <h3>Thank You!</h3>
                    <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
                    <button type="button" class="btn btn-primary" onclick="location.reload()">
                        Submit Another Response
                    </button>
                </div>
            `;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});