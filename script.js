// Gallery functionality
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-view img');

function changeImage(direction) {
    // Remove active class from current image
    images[currentIndex].classList.remove('active');
    
    // Calculate new index
    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    // Add active class to new image
    images[currentIndex].classList.add('active');

    // Reset auto slideshow timer
    clearInterval(slideshowInterval);
    startSlideshow();
}

// Auto slideshow
let slideshowInterval;

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        changeImage(1);
    }, 5000);
}

startSlideshow();

// Pause slideshow when hovering over gallery
document.querySelector('.gallery-container').addEventListener('mouseenter', () => {
    clearInterval(slideshowInterval);
});

// Resume slideshow when mouse leaves gallery
document.querySelector('.gallery-container').addEventListener('mouseleave', () => {
    startSlideshow();
});

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeImage(1);
    }
});

// Modal functionality
function expandGallery() {
    const modal = document.getElementById('galleryModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Clear previous content
    modalContent.innerHTML = '';
    
    // Add all images to modal with staggered animation
    images.forEach((img, index) => {
        const clone = document.createElement('img');
        clone.src = img.src;
        clone.alt = img.alt;
        clone.style.animationDelay = `${index * 0.1}s`;
        modalContent.appendChild(clone);
    });
    
    // Show modal
    modal.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside content
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});