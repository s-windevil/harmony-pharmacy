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

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const consultationForm = document.getElementById("consultationForm");
    if (consultationForm) {
        consultationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("consultName").value;
            const email = document.getElementById("consultEmail").value;
            const phone = document.getElementById("consultPhone").value;
            const date = document.getElementById("consultDate").value;
            const service = document.getElementById("consultService").value;
            const message = document.getElementById("consultMessage").value;
            
            if (!validateEmail(email)) {
                const feedbackDiv = document.getElementById("consultationFormFeedback");
                feedbackDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Пожалуйста, введите корректный email адрес.
                    </div>
                `;
                return;
            }
            
            const feedbackDiv = document.getElementById("consultationFormFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>Спасибо, ${name}!</strong> Вы записаны на консультацию.<br>
                    <strong>Тип консультации:</strong> ${service}<br>
                    <strong>Дата:</strong> ${date}<br>
                    <strong>Email:</strong> ${email}<br>
                    <strong>Телефон:</strong> ${phone}<br>
                    ${message ? `<strong>Ваше сообщение:</strong> ${message}` : ''}
                </div>
            `;
            
            consultationForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 10000);
        });
    }

    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const email = document.getElementById("newsletterEmail").value;
            
            if (!validateEmail(email)) {
                const feedbackDiv = document.getElementById("newsletterFeedback");
                feedbackDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Пожалуйста, введите корректный email адрес.
                    </div>
                `;
                return;
            }
            
            const feedbackDiv = document.getElementById("newsletterFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Спасибо за подписку! На адрес <strong>${email}</strong> будут приходить уведомления.
                </div>
            `;
            
            newsletterForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 10000);
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("contactName").value;
            const email = document.getElementById("contactEmail").value;
            const subject = document.getElementById("contactSubject").value;
            const message = document.getElementById("contactMessage").value;
            
            if (!validateEmail(email)) {
                const feedbackDiv = document.getElementById("contactFormFeedback");
                feedbackDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Пожалуйста, введите корректный email адрес.
                    </div>
                `;
                return;
            }
            
            const feedbackDiv = document.getElementById("contactFormFeedback");
            feedbackDiv.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>Спасибо, ${name}!</strong> Ваше сообщение отправлено.<br>
                    <strong>Тема:</strong> ${subject}<br>
                    <strong>Email:</strong> ${email}<br>
                    <strong>Сообщение:</strong> ${message}
                </div>
            `;
            
            contactForm.reset();
            
            setTimeout(() => {
                feedbackDiv.innerHTML = "";
            }, 10000);
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
