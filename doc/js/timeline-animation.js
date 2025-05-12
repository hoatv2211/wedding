// Timeline Animation JS

document.addEventListener('DOMContentLoaded', function() {
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Create floating hearts effect
    createHeartFloatingEffect();
    
    // Add click handlers to timeline dots
    addTimelineDotInteractivity();
});

// Function to handle timeline scroll animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    let ticking = false;
    
    // Check if timeline items are in view on initial load
    checkTimelineInView();
    
    // Listen for scroll events with requestAnimationFrame để tối ưu hóa hiệu suất
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                checkTimelineInView();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Function to check if timeline items are in viewport
    function checkTimelineInView() {
        timelineItems.forEach(item => {
            // Chỉ áp dụng animation và hiệu ứng tim nếu chưa được áp dụng
            if (!item.classList.contains('animate') && isElementInViewport(item)) {
                item.classList.add('animate');
                createHeartBurst(item);
            }
        });
    }
    
    // Helper function to check if element is in viewport - sử dụng kỹ thuật lazy loading
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Chỉ kích hoạt khi element ở trong khoảng 85% của viewport
        return (
            rect.top <= windowHeight * 0.85 &&
            rect.bottom >= 0
        );
    }
}

// Function to create heart burst effect when a timeline item animates - tối ưu hóa
function createHeartBurst(element) {
    // Only create hearts if the element doesn't already have them
    if (element.dataset.heartsCreated) return;
    
    // Mark this element as having hearts created
    element.dataset.heartsCreated = true;
    
    // Giảm số lượng trái tim
    const heartCount = Math.floor(Math.random() * 3) + 3; // 3-5 trái tim thay vì 5-8
    const dot = element.querySelector('.timeline-dot');
    
    // Lấy vị trí chỉ một lần để tối ưu hiệu suất
    const dotRect = dot.getBoundingClientRect();
    const timelineRect = element.getBoundingClientRect();
    
    // Sử dụng requestAnimationFrame để animation mượt hơn
    requestAnimationFrame(() => {
        // Phân phối thời gian tạo các trái tim để giảm tải cho CPU
        for (let i = 0; i < heartCount; i++) {
            // Sử dụng setTimeout với độ trễ tiến dần để tạo hiệu ứng phân tán
            setTimeout(() => {
                createHeart(dotRect, timelineRect, element);
            }, i * 100); // Độ trễ tăng dần theo thứ tự
        }
    });
}

// Function to create a single floating heart (tối ưu hóa hiệu suất)
function createHeart(dotRect, timelineRect, parentElement) {
    const heart = document.createElement('div');
    heart.classList.add('heart-floating');
    
    // Tối ưu hóa tính toán góc và bán kính
    const angle = Math.random() * 6.28; // ~2π radians
    const radius = 5 + Math.random() * 5; // Random radius
    
    // Tính toán vị trí ban đầu
    const startX = dotRect.width / 2 + Math.cos(angle) * radius;
    const startY = dotRect.height / 2 + Math.sin(angle) * radius;
    
    // Sử dụng transform thay vì left/top - tránh reflow
    heart.style.transform = `translate(${startX}px, ${startY}px)`;
    heart.style.opacity = '0';
    
    // Thêm trái tim vào phần tử cha và cache truy cập
    const dotElement = parentElement.querySelector('.timeline-dot');
    dotElement.appendChild(heart);
    
    // Sử dụng requestAnimationFrame để animation mượt hơn
    requestAnimationFrame(() => {
        // Nhóm các thay đổi CSS để tránh reflow
        heart.style.opacity = '0.7';
        heart.style.transition = 'transform 1.5s ease-out, opacity 1.5s ease-in-out';
        
        // Giảm biên độ chuyển động để mượt hơn
        const endX = startX + (Math.random() * 60 - 30);
        const endY = startY - (40 + Math.random() * 60);
        const scale = 0.5 + Math.random() * 1;
        const rotate = Math.random() * 30 - 15;
        
        heart.style.transform = `translate(${endX}px, ${endY}px) scale(${scale}) rotate(${rotate}deg)`;
        
        // Đơn giản hóa quá trình dọn dẹp
        setTimeout(() => {
            heart.style.opacity = '0';
            
            // Chỉ xóa sau khi animation kết thúc
            setTimeout(() => {
                if (dotElement && dotElement.contains(heart)) {
                    dotElement.removeChild(heart);
                }
            }, 500);
        }, 1500);
    });
}

// Function to create a continuous floating hearts effect
function createHeartFloatingEffect() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    // Create a heart every few seconds
    setInterval(() => {
        // Only create hearts if user is viewing the timeline section
        if (isTimelineInView()) {
            const timelineRect = timeline.getBoundingClientRect();
            const x = Math.random() * timelineRect.width;
            
            // Create heart element
            const heart = document.createElement('div');
            heart.classList.add('heart-floating');
            
            // Set the heart styles
            heart.style.left = x + 'px';
            heart.style.top = timelineRect.height + 'px';
            heart.style.opacity = '0';
            
            // Add heart to the timeline
            timeline.appendChild(heart);
            
            // Animate the heart
            setTimeout(() => {
                heart.style.transition = 'all ' + (8 + Math.random() * 7) + 's ease-out';
                heart.style.opacity = (0.3 + Math.random() * 0.4).toString();
                
                // Move heart up
                const endY = -50 - Math.random() * 100;
                const rotation = Math.random() * 360;
                const scale = 0.5 + Math.random() * 1.5;
                
                heart.style.transform = `translateY(${endY}px) scale(${scale}) rotate(${rotation}deg)`;
                
                // Remove heart after animation completes
                setTimeout(() => {
                    heart.style.opacity = '0';
                    setTimeout(() => {
                        if (heart.parentElement) {
                            heart.parentElement.removeChild(heart);
                        }
                    }, 1000);
                }, 8000);
            }, 100);
        }
    }, 3000);
    
    // Helper function to check if timeline is in view
    function isTimelineInView() {
        const rect = timeline.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
}

// Function to add interactivity to timeline dots
function addTimelineDotInteractivity() {
    const timelineDots = document.querySelectorAll('.timeline-dot');
    
    timelineDots.forEach(dot => {
        // Add click handler to timeline dots
        dot.addEventListener('click', function() {
            const parentItem = this.closest('.timeline-item');
            
            // Create extra heart burst animation on click
            createExtraHeartBurst(parentItem);
            
            // Highlight the clicked item
            highlightTimelineItem(parentItem);
            
            // Scroll the content into better view if needed
            smoothScrollToElement(parentItem);
        });
    });
}

// Function to create an extra heart burst when a dot is clicked
function createExtraHeartBurst(element) {
    const dot = element.querySelector('.timeline-dot');
    const dotRect = dot.getBoundingClientRect();
    const timelineRect = element.getBoundingClientRect();
    
    // Create more hearts than normal for a more dramatic effect
    const heartCount = Math.floor(Math.random() * 6) + 12;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            createHeart(dotRect, timelineRect, element, true);
        }, i * 50); // Stagger the creation for more natural effect
    }
}

// Function to create a heart with enhanced animation for click effects
function createHeart(dotRect, timelineRect, parentElement, isClickEffect = false) {
    const heart = document.createElement('div');
    heart.classList.add('heart-floating');
    
    // Calculate start position around the dot
    const angle = Math.random() * Math.PI * 2; // Random angle in radians
    const radius = 5 + Math.random() * 5; // Random radius
    
    // Set heart initial position relative to dot
    const startX = dotRect.width / 2 + Math.cos(angle) * radius;
    const startY = dotRect.height / 2 + Math.sin(angle) * radius;
    
    heart.style.left = startX + 'px';
    heart.style.top = startY + 'px';
    heart.style.opacity = '0';
    
    // Add heart to the parent element
    parentElement.querySelector('.timeline-dot').appendChild(heart);
    
    // Animate heart with more dramatic effect for click animations
    setTimeout(() => {
        // Faster animation and higher opacity for click effects
        const duration = isClickEffect ? (1 + Math.random() * 2) : (2 + Math.random() * 3);
        const maxOpacity = isClickEffect ? (0.7 + Math.random() * 0.3) : (0.3 + Math.random() * 0.7);
        
        heart.style.transition = `all ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1)`;
        heart.style.opacity = maxOpacity.toString();
        
        // More spread out for click effects
        const spreadMultiplier = isClickEffect ? 2.5 : 1;
        const endX = startX + (Math.random() * 100 - 50) * spreadMultiplier;
        const endY = startY - (50 + Math.random() * 100) * spreadMultiplier;
        const scale = isClickEffect ? (0.8 + Math.random() * 1.8) : (0.5 + Math.random() * 1.5);
        
        heart.style.transform = `translate(${endX}px, ${endY}px) scale(${scale}) rotate(${Math.random() * 60 - 30}deg)`;
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.style.opacity = '0';
            setTimeout(() => {
                if (heart.parentElement) {
                    heart.parentElement.removeChild(heart);
                }
            }, 1000);
        }, duration * 1000 * 0.8);
    }, Math.random() * 200);
}

// Function to highlight a timeline item when clicked
function highlightTimelineItem(item) {
    // First, remove highlight from all items
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.style.zIndex = '1';
    });
    
    // Set higher z-index to bring this item forward
    item.style.zIndex = '10';
    
    // Add temporary highlight effect to the content
    const content = item.querySelector('.timeline-content');
    content.style.transform = 'translateY(-12px)';
    content.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    
    // Return to normal after animation
    setTimeout(() => {
        content.style.transform = '';
        content.style.boxShadow = '';
    }, 1000);
}

// Function to smoothly scroll to an element
function smoothScrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Only scroll if element is not well positioned in the viewport
    if (rect.top < windowHeight * 0.3 || rect.bottom > windowHeight * 0.8) {
        const scrollTarget = window.pageYOffset + rect.top - windowHeight * 0.4;
        
        window.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    }
}