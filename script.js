document.addEventListener('DOMContentLoaded', function () {
    // Animate hero content
    const heroContent = document.querySelector('.hero .row');
    heroContent.classList.add('animate__animated', 'animate__fadeIn');

    // Setup admin account
    const adminEmail = 'Tiroshtirosh70@gmail.com';
    const adminPassword = 'Shanudhatirosh123@#t';
    localStorage.setItem('adminEmail', adminEmail);
    localStorage.setItem('adminPassword', adminPassword);

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === localStorage.getItem('adminEmail') && password === localStorage.getItem('adminPassword')) {
            alert('Login successful!');
            $('#loginModal').modal('hide');
            // Here you can add logic for what happens after successful login
        } else {
            alert('Invalid email or password');
        }
    });

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate__animated');
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.visibility = 'visible';
                element.classList.add('animate__fadeInUp');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load
});
