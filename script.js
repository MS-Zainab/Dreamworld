 document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if(this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if(document.querySelector('nav ul').classList.contains('show')) {
                        document.querySelector('nav ul').classList.remove('show');
                    }
                }
            });
        });
        
        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! Our team will contact you shortly.');
            this.reset();
        });
        
        // WhatsApp Button Animation Pause on Hover
        const whatsappBtn = document.querySelector('.whatsapp-float');
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
        });
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 2s infinite';
        });
        
        // Popup Offer
        window.addEventListener("load", () => {
            setTimeout(() => {
                document.getElementById("popup-offer").style.display = "none";
            }, 3000); // Show after 3 seconds
        });

        document.querySelector(".close-popup").addEventListener("click", () => {
            document.getElementById("popup-offer").style.display = "none";
        });
        
        // FAQ Accordion
        const accordionBtns = document.querySelectorAll('.accordion-btn');
        accordionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });
        
        // Gallery Slider
        const galleryTrack = document.querySelector('.gallery-track');
        const gallerySlides = document.querySelectorAll('.gallery-slide');
        const galleryDots = document.querySelectorAll('.gallery-dot');
        const prevBtn = document.querySelector('.gallery-prev');
        const nextBtn = document.querySelector('.gallery-next');
        let currentIndex = 0;
        const slideCount = gallerySlides.length;
        
        function updateGallery() {
            // Update track position
            galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            galleryDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateGallery();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateGallery();
        }
        
        // Button events
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Dot navigation
        galleryDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateGallery();
            });
        });
        
        // Auto-slide
        let slideInterval = setInterval(nextSlide, 5000);
        
        // Pause on hover
        galleryTrack.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        galleryTrack.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });
        
        // Initialize lightbox
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2'
        });