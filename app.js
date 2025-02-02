// Mobile menu toggle
const menu = document.querySelector('.navbar-toggle');
const menuLinks = document.querySelector('.navbar-menu-mobile');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Fly in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
      }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Rating swiper
const carousel = document.querySelector('.rating-carousel');
const slider = document.querySelector('.rating-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const allSlides = document.querySelectorAll('.rating-wrapper');
const mediaQuery = window.matchMedia('(max-width: 960px)');

if(!mediaQuery.matches) {
    slider.firstElementChild.nextElementSibling.classList.add('focused');
}

var direction = -1;
prevBtn.addEventListener('click', () => {
    if(direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }

    allSlides.forEach(slide => {
        slide.classList.remove('focused');
    });

    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(20%)';
    if(!mediaQuery.matches) {
        slider.lastElementChild.previousElementSibling.previousElementSibling.classList.add('focused');
    }
});

nextBtn.addEventListener('click', () => {
    if(direction === 1) {
        slider.prepend(slider.lastElementChild);
        direction = -1;
    }

    allSlides.forEach(slide => {
        slide.classList.remove('focused');
    });

    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)';
    if(!mediaQuery.matches) {
        slider.firstElementChild.nextElementSibling.nextElementSibling.classList.add('focused');
    }
});

slider.addEventListener('transitionend', () => {
    if(direction === -1) {
        slider.appendChild(slider.firstElementChild);
    }
    else if(direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.3s ease';
    })
});