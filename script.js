document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    new Swiper('.product-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });

    if (typeof flatpickr !== "undefined") {
        flatpickr.localize(flatpickr.l10ns.ru);
        flatpickr("#consultDate", {
            altInput: true,
            altFormat: "d F Y",
            dateFormat: "Y-m-d",
            locale: "ru"
        });
    }

    const consultationForm = document.getElementById("consultationForm");
    if (consultationForm) {
        consultationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const feedbackDiv = document.getElementById("consultationFormFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Вы записаны на консультацию.
                </div>
            `;
            
            consultationForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 5000);
        });
    }

    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const feedbackDiv = document.getElementById("newsletterFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Спасибо. Вы подписаны на уведомления.
                </div>
            `;
            
            newsletterForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 5000);
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const feedbackDiv = document.getElementById("contactFormFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Спасибо. Ваше сообщение отправлено.
                </div>
            `;
            
            contactForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 5000);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});