// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Audio visualizer animation
    const visualizerBars = document.querySelectorAll('.visualizer-bar');
    visualizerBars.forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.1}s`;
    });

    // Track card interactions
    const trackCards = document.querySelectorAll('.track-card');
    trackCards.forEach(card => {
        const playButton = card.querySelector('.play-button');
        const waveform = card.querySelector('.waveform');
        
        if (playButton) {
            playButton.addEventListener('click', function() {
                // Toggle play state
                this.classList.toggle('playing');
                
                // Animate waveform
                const waveBars = waveform.querySelectorAll('.wave-bar');
                waveBars.forEach(bar => {
                    bar.style.animationDuration = this.classList.contains('playing') ? '0.5s' : '1.5s';
                });
            });
        }

        // Card hover effects
        card.addEventListener('mouseenter', function() {
            const waveBars = this.querySelectorAll('.wave-bar');
            waveBars.forEach(bar => {
                bar.style.animationDuration = '0.8s';
            });
        });

        card.addEventListener('mouseleave', function() {
            const waveBars = this.querySelectorAll('.wave-bar');
            const playButton = this.querySelector('.play-button');
            if (!playButton.classList.contains('playing')) {
                waveBars.forEach(bar => {
                    bar.style.animationDuration = '1.5s';
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.track-card, .about-content, .event-card, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CTA button effects
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Status dot animation
    const statusDots = document.querySelectorAll('.status-dot');
    statusDots.forEach(dot => {
        dot.style.animation = 'pulse 2s ease-in-out infinite';
    });

    // Add hamburger animation styles
    const style = document.createElement('style');
    style.textContent = `
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }

        .play-button.playing {
            background: rgba(255, 255, 255, 0.2);
            border-color: #ffffff;
        }

        .play-button.playing .play-icon {
            border-left: 8px solid #ffffff;
            border-right: 8px solid #ffffff;
            border-top: 0;
            border-bottom: 0;
            width: 4px;
            height: 20px;
            margin-left: 0;
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-bg-image');
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Random visualizer animation
    setInterval(() => {
        visualizerBars.forEach(bar => {
            const randomHeight = Math.random() * 40 + 20;
            bar.style.height = randomHeight + 'px';
        });
    }, 200);
});

