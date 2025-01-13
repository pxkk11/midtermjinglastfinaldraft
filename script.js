document.querySelectorAll('.product a').forEach(item => {
    item.addEventListener('click', event => {
        // Hide the coming soon section if visible
        const comingSoon = document.querySelector('.coming-soon');
        if (comingSoon) {
            comingSoon.style.display = 'none'; // Hide it when another product is clicked
        }
        
        const lightboxId = item.getAttribute('href');
        document.querySelector(lightboxId).classList.add('active');
    });
});

// Close lightbox functionality
document.querySelectorAll('.lightbox a').forEach(item => {
    item.addEventListener('click', event => {
        const lightbox = item.closest('.lightbox');
        lightbox.classList.remove('active');
        
        // Show the coming soon section again when closing the lightbox
        const comingSoon = document.querySelector('.coming-soon');
        if (comingSoon) {
            comingSoon.style.display = 'block'; // Show it again if needed
        }
    });
});
