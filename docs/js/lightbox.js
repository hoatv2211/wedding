/**
 * Gallery Lightbox Functionality
 * Allows for clicking on gallery images to view them in full screen
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeButton = lightbox.querySelector('.close-lightbox');
    
    // Add click event to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt');
            
            // Set the lightbox image and caption
            lightboxImg.setAttribute('src', imgSrc);
            lightboxCaption.textContent = imgAlt;
            
            // Show the lightbox
            lightbox.classList.add('active');
            
            // Prevent scrolling on the body
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox when clicking the close button
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the event from bubbling up
        closeLightbox();
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        // If clicking on the lightbox background (not the image)
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox when pressing the Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        // Re-enable scrolling
        document.body.style.overflow = '';
        
        // Clear the source after a short delay (for smooth animation)
        setTimeout(() => {
            lightboxImg.setAttribute('src', '');
        }, 300);
    }
});