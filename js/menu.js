document.addEventListener('DOMContentLoaded', function() {
    // Check for mobile device
    const isMobile = window.innerWidth <= 576;
    
    // Set dimensions based on device
    const arrowWidth = isMobile ? '10px' : '';
    const arrowHeight = isMobile ? '' : '';
    
    document.querySelectorAll('.avatar-slider').forEach(function(slider) {
        var splide = new Splide(slider, {
            // Your existing options
        });
        
        splide.on('mounted', function() {
            // Replace next button
            const nextButton = slider.querySelector('.splide__arrow--next');
            if (nextButton) {
                nextButton.innerHTML = '';
                const img = document.createElement('img');
                img.src = './images/client/prev/right.png';
                img.alt = 'Next';
                img.style.width = arrowWidth;
                img.style.height = arrowHeight;
                nextButton.appendChild(img);
            }
            
            // Replace prev button
            const prevButton = slider.querySelector('.splide__arrow--prev');
            if (prevButton) {
                prevButton.innerHTML = '';
                const img = document.createElement('img');
                img.src = './images/client/prev/left.png';
                img.alt = 'Previous';
                img.style.width = arrowWidth;
                img.style.height = arrowHeight;
                prevButton.appendChild(img);
            }
        });
        
        splide.mount();
    });
    
    // Handle resize events for responsive behavior
    window.addEventListener('resize', function() {
        const isMobile = window.innerWidth <= 576;
        const arrowWidth = isMobile ? '10px' : '';
        const arrowHeight = isMobile ? '' : '';
        
        document.querySelectorAll('.splide__arrow img').forEach(img => {
            img.style.width = arrowWidth;
            img.style.height = arrowHeight;
        });
    });
});
