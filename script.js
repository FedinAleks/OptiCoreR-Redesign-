// PRELOADER //

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    // Перевірка ширини екрана
    if (window.innerWidth > 1800) {
        preloader.style.display = "none"; // Вимкнення прелоадера
        return; // Вихід із функції
    }

    // Затримка на 2 секунди для менших екранів
    setTimeout(function () {
        preloader.style.opacity = "0"; // Плавне зникнення
        setTimeout(() => {
            preloader.style.display = "none"; // Видалення з DOM через 0.5 секунди
        }, 500); // Час для завершення анімації (0.5 секунди)
    }, 2000); // Затримка 2 секунди перед анімацією
});


// HEADER FIXED //


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// MOBILE MENU //

function closeMobileMenu(event) {
    // Перевіряємо, чи клікнув користувач на пункт "Послуги"
    const servicesDropdown = document.querySelector('.services_mobile_dropdown');
    
    if (servicesDropdown.contains(event.target)) {
        // Якщо натиснуто на "Послуги", не закривати меню
        return;
    }

    // Закриваємо меню для всіх інших елементів
    document.getElementById('mobileMenu').style.display = 'none';
}
document.getElementById('closeMenu').addEventListener('click', closeMobileMenu);
document.querySelectorAll('.mobile_menu ul li a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('burgerMenu').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'flex';
    mobileMenu.style.justifyContent = 'space-between'; // Додаємо стилі
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

// logo main scrolltop //
const logo = document.querySelector('.logo');
    logo.addEventListener('click', function(event) {
        event.preventDefault(); 
        scrollToTop(); 
});

// SERVICE SUB MENU //

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.services_dropdown');
    const link = dropdown.querySelector('a');

    link.addEventListener('click', (e) => {
        e.preventDefault(); // Зупиняємо перехід за посиланням
        dropdown.classList.toggle('open'); // Тогл класу для відкриття/закриття меню
    });
    // Відкривання меню при наведенні
    dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('open'); // Додаємо клас 'open' при наведенні
    });

    // Закриття меню при відведенні курсора
    dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('open'); // Забираємо клас 'open' при відведенні
    });

    // Закриття меню, якщо клікнути поза ним
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });
});

// SERVICE MOBILE SUB MENU //

document.addEventListener("DOMContentLoaded", () => {
    const mobileDropdown = document.querySelector('.services_mobile_dropdown');
    const mobileLink = mobileDropdown.querySelector('a');
    const mobileSubmenu = mobileDropdown.querySelector('.mobile_services_submenu');

    // Відкривання/закривання підменю при кліку на "Послуги"
    mobileLink.addEventListener('click', (e) => {
        e.preventDefault(); // Забороняємо перехід за посиланням
        mobileDropdown.classList.toggle('open'); // Додаємо/вилучаємо клас 'open'
    });

    // Закриття підменю при кліку поза ним
    document.addEventListener('click', (e) => {
        if (!mobileDropdown.contains(e.target)) {
            mobileDropdown.classList.remove('open'); // Закриваємо підменю при натисканні поза ним
        }
    });

    // Оновлений обробник для закриття мобільного меню
    const mobileMenuLinks = document.querySelectorAll('.mobile_menu ul li a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Якщо це пункт "Послуги", не закривати меню
            if (link.closest('.services_mobile_dropdown')) {
                return; // Виходимо з обробника, щоб меню не закривалося
            }
            closeMobileMenu(); // Закриваємо меню для всіх інших посилань
        });
    });
});









// MAIN BUTTONS //

// Додаємо функціональність дзвінка
document.querySelector('.button_call').addEventListener('click', () => {
    window.location.href = 'tel:+380964355652';
});

// Додаємо плавний перехід до блоку
document.querySelector('.button_moredetails').addEventListener('click', () => {
    const aboutBlock = document.querySelector('#about'); // Знаходимо блок #about
    if (aboutBlock) {
        aboutBlock.scrollIntoView({ behavior: 'smooth' }); // Плавно прокручуємо до блоку
    }
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
    window.open('https://t.me/+qKb7r0-1XL45NmQ6', '_blank'); 
});

//для іконки Mail
fab3.addEventListener('click', function() {
    window.location.href = 'mailto:opticorer@gmail.com'; 
});

//для іконки Call
fab2.addEventListener('click', function() {
    window.location.href = 'tel:+380964355652'; 
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



// BUTTON SERVICE DESCRIPTION //


document.querySelectorAll('.button_service_description').forEach(button => {

    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url'); 
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error('URL не вказано для цієї кнопки');
        }
    });
});



// TEAM CARD (MOB HOVER)

document.addEventListener("DOMContentLoaded", () => {
    const memberCards = document.querySelectorAll(".member_card");

    memberCards.forEach((card) => {
        card.addEventListener("click", () => {
            const innerCard = card.querySelector(".member_card_inner");
            innerCard.classList.toggle("flipped"); 
        });
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
    

    startX = 0;
    endX = 0;
    isSwiping = false;
});





// ACTIONS //

// buttons call
document.querySelectorAll('.button_call, .button_call_main, .button_call_contact').forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = 'tel:+380964355652';
    });
});

// button more detail 
document.querySelector('.button_moredetails').addEventListener('click', function() {
    const aboutUsBlock = document.querySelector('.aboutus_block');
    aboutUsBlock.scrollIntoView({ behavior: 'smooth' });
}); 