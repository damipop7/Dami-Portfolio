//Wordcloud class
// Replace the existing WordCloud class with this TagCloud class
class TagCloud {
    constructor(containerId, tags) {
        this.container = document.getElementById(containerId);
        this.tags = tags.sort((a, b) => b.weight - a.weight);
        this.init();
    }

    init() {
        this.container.innerHTML = '';
        this.tags.forEach(tag => {
            const tagElement = this.createTagElement(tag);
            this.container.appendChild(tagElement);
        });
    }

    createTagElement(tag) {
        const span = document.createElement('span');
        span.className = 'tag-cloud-item';
        span.textContent = tag.text;
        
        // Calculate size based on weight (between 0.8em and 2em)
        const size = 0.8 + (tag.weight / 50) * 1.2;
        span.style.fontSize = `${size}em`;
        
        // Add hover effect
        span.addEventListener('mouseover', () => {
            span.style.transform = 'scale(1.1)';
            span.style.color = '#2196f3';
        });
        
        span.addEventListener('mouseout', () => {
            span.style.transform = 'scale(1)';
            span.style.color = '';
        });
        
        return span;
    }
}

// Skills list
const skills = [
    { text: 'Python', weight: 50 },
    { text: 'JavaScript', weight: 40 },
    { text: 'React', weight: 35 },
    { text: 'Machine Learning', weight: 45 },
    { text: 'Data Science', weight: 42 },
    { text: 'Tableau', weight: 30 },
    { text: 'HTML/CSS', weight: 25 },
    { text: 'SQL', weight: 35 },
    { text: 'Git', weight: 28 },
    { text: 'Docker', weight: 30 }
];

document.addEventListener('DOMContentLoaded', () => {
    new TagCloud('tag-cloud', skills);
});

window.addEventListener('resize', () => {
    setTimeout(() => {
        new TagCloud('tag-cloud', skills);
    }, 250);
});



//Mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!mobileMenu.contains(event.target) && 
        !menuToggle.contains(event.target) && 
        mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});




//Hero changing bachground
class HeroBackground {
    constructor(images, interval = 5000) {
        this.images = images;
        this.interval = interval;
        this.currentIndex = 0;
        this.backgroundElements = [];
        this.init();
    }

    init() {
        const heroSection = document.querySelector('.hero-section');
        
        // Create background elements
        this.images.forEach((image, index) => {
            const backgroundElement = document.createElement('div');
            backgroundElement.classList.add('hero-background');
            backgroundElement.style.backgroundImage = `url('${image}')`;
            heroSection.appendChild(backgroundElement);
            this.backgroundElements.push(backgroundElement);
        });

        // Initial active state
        this.backgroundElements[0].classList.add('active');

        // Start rotation
        this.startRotation();
    }

    startRotation() {
        setInterval(() => {
            // Remove active class from current background
            this.backgroundElements[this.currentIndex].classList.remove('active');
            
            // Move to next index
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            
            // Add active class to next background
            this.backgroundElements[this.currentIndex].classList.add('active');
        }, this.interval);
    }
}

// Free image sources (replace with your preferred sources)
const backgroundImages = [
    // Deep blue futuristic
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809', // Abstract waves
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa', // Deep space blue
    'https://images.unsplash.com/photo-1464802686167-b939a6910659', // Blue nebula
    'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb', // Tech circuits blue
    
    // Modern tech gradients
    'https://images.unsplash.com/photo-1557683316-973673baf926', // Gradient tech
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f', // Neon tech
    'https://images.unsplash.com/photo-1515630278258-407f66405ee5', // Modern lights
    'https://images.unsplash.com/photo-1518770660439-4636190af475', // Tech grid
    
    // Abstract futuristic
    'https://images.unsplash.com/photo-1536152470836-b943b246224c', // Abstract lines
    'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0', // Data flow
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b', // Geometric abstract
    'https://images.unsplash.com/photo-1520869562399-e772f042f422', // Digital wave
    
    // Minimalist tech
    'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e', // Clean tech
    'https://images.unsplash.com/photo-1545987796-200677ee1011', // Minimal future
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0', // Tech minimal
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159', // Code minimal
    
    // Cyber aesthetic
    'https://images.unsplash.com/photo-1510915361894-db8b60106cb1', // Cyber grid
    'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0', // Digital city
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122', // Tech patterns
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'  // Matrix style
];

document.addEventListener('DOMContentLoaded', () => {
    new HeroBackground(backgroundImages);
});


//contact form
// Previous script contents...

// WhatsApp Contact Functionality
function sendWhatsAppMessage(name, email, message) {
    const phoneNumber = '+1 (660) 528-0976';
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
}

// If contact form exists, add event listener
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            sendWhatsAppMessage(name, email, message);
            
            // Optional: Clear form after submission
            contactForm.reset();
        });
    }
});


