// HEADER FIXED //


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


function closeMobileMenu() {
    document.getElementById('mobileMenu').style.display = 'none';
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('burgerMenu').addEventListener('click', function() {
    document.getElementById('mobileMenu').style.display = 'flex';
});

document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);

const buttonRequestMobile = document.querySelector('.button_request_mobile');
buttonRequestMobile.addEventListener('click', closeMobileMenu);

const mobileMenuLinks = document.querySelectorAll('.mobile_menu ul li a');

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

const logoMobileHeader = document.querySelector('.logo_mobile_header');
logoMobileHeader.addEventListener('click', function(event) {
    event.preventDefault(); 
    closeMobileMenu(); 
    scrollToTop(); 
});

// logo main
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToTop(); 
});




// QUICK CONTACT //

let fab1 = document.getElementById('fab1');
let innerFabs = document.getElementsByClassName('inner-fabs')[0];

fab1.addEventListener('click', function() {
    innerFabs.classList.toggle('show');
});

document.addEventListener('click', function(e) {
    if (!fab1.contains(e.target) && !innerFabs.contains(e.target)) {
        innerFabs.classList.remove('show');
    }
});

// quick start actions
const fab4 = document.getElementById('fab4'); // Telegram
const fab3 = document.getElementById('fab3'); // Mail
const fab2 = document.getElementById('fab2'); // Call

//для іконки Telegram
fab4.addEventListener('click', function() {
    window.open('https://t.me/your_telegram_username', '_blank'); 
});

//для іконки Mail
fab3.addEventListener('click', function() {
    window.location.href = 'mailto:opticorer@gmail.com'; 
});

//для іконки Call
fab2.addEventListener('click', function() {
    window.location.href = 'tel:+1234567890'; 
});





// ABOUT US (SHOW MORE BTN) //

const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenBenefits = document.querySelectorAll('.clients_benefit.hidden');

  showMoreBtn.addEventListener('click', function() {
    if (showMoreBtn.textContent === 'Показати більше') {
      hiddenBenefits.forEach(function(benefit) {
        benefit.classList.remove('hidden');
      });
      showMoreBtn.textContent = 'Згорнути';
    } else {
      hiddenBenefits.forEach(function(benefit) {
        benefit.classList.add('hidden');
      });
      showMoreBtn.textContent = 'Показати більше';
    }
});


/// SERVICE DESCRIPTION //

function toggleService(element) {
    const service = element.closest('.service');
    const allServices = document.querySelectorAll('.service');

    allServices.forEach(s => {
        if (s !== service) {
            s.classList.remove('active');
            s.querySelector('.plus').style.display = 'block';
            s.querySelector('.minus').style.display = 'none';
            s.querySelector('.service_title').style.borderBottom = 'none';
        }
    });

    const isActive = service.classList.contains('active');
    if (isActive) {
        service.classList.remove('active');
        service.querySelector('.plus').style.display = 'block';
        service.querySelector('.minus').style.display = 'none';
        service.querySelector('.service_title').style.borderBottom = 'none';
    } else {
        service.classList.add('active');
        service.querySelector('.plus').style.display = 'none';
        service.querySelector('.minus').style.display = 'block';
        service.querySelector('.service_title').style.borderBottom = '1px solid #C9A35B';
    }

    const firstService = document.querySelector('.service:first-child');
    if (firstService.classList.contains('active')) {
        firstService.querySelector('.plus').style.display = 'none';
        firstService.querySelector('.minus').style.display = 'block';
    }
}

window.onload = function() {
    const firstService = document.querySelector('.service:first-child');
    if (firstService.classList.contains('active')) {
        firstService.querySelector('.plus').style.display = 'none';
        firstService.querySelector('.minus').style.display = 'block';
        firstService.querySelector('.service_title').style.borderBottom = '1px solid #C9A35B';
    }
}




// MODAL TEAM //

document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal_team');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });

    const detailButtons = document.querySelectorAll('.button_member_detail');

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            let modalId = this.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    const closeButtons = document.querySelectorAll('.close_modal_icon');

    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal_team').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal_team')) {
            event.target.style.display = 'none';
        }
    });
});


// SLIDER PROJECTS //


const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const projectsContainer = document.querySelector('.projects_container');
const projects = document.querySelectorAll('.project');

let currentSlide = 0;
const totalSlides = projects.length;

// Показати слайд
function showSlide(index) {
    const slideWidth = projects[0].clientWidth;
    const offset = -index * slideWidth;
    projectsContainer.style.transform = `translateX(${offset}px)`;
}

// Події для кнопок "вперед" і "назад"
nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
});

// Додати підтримку свайпу для мобільних пристроїв

let startX = 0;
let endX = 0;
let isSwiping = false;

// Початок свайпу
projectsContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    isSwiping = true;  // Початок свайпу
});

// Рух пальця по екрану
projectsContainer.addEventListener('touchmove', (event) => {
    if (isSwiping) {
        endX = event.touches[0].clientX;
    }
});

// Кінець свайпу
projectsContainer.addEventListener('touchend', () => {
    if (!isSwiping) return;  // Перевіряємо, чи відбувався свайп

    let swipeDistance = startX - endX;

    // Якщо свайп був достатньо довгий
    if (swipeDistance > 50) { // свайп вліво, перемикання на наступний слайд
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
    } else if (swipeDistance < -50) { // свайп вправо, перемикання на попередній слайд
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
    }
    
    showSlide(currentSlide);
    
    // Скидаємо значення після завершення свайпу
    startX = 0;
    endX = 0;
    isSwiping = false;  // Завершення свайпу
});





// ACTIONS //

// buttons call
document.querySelectorAll('.button_call, .button_call_main, .button_call_contact').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'tel:+380123456789';
    });
});

// button more detail 
document.querySelector('.button_moredetails').addEventListener('click', function() {
    const aboutUsBlock = document.querySelector('.aboutus_block');
    aboutUsBlock.scrollIntoView({ behavior: 'smooth' });
});