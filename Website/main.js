document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 100, // Adjust offset as needed
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation item on scroll
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        document.querySelectorAll('nav ul li a').forEach(navLink => {
            const section = document.querySelector(navLink.getAttribute('href'));
            if (
                section.offsetTop <= currentScroll + 100 &&
                section.offsetTop + section.offsetHeight > currentScroll + 100
            ) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    });

    /// Show signup modal when signup link is clicked
    document.getElementById('signup-link').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.signup-modal').style.display = 'block';
    });

    // Close signup modal when close button is clicked
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.signup-modal').style.display = 'none';
    });

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        window.location.href = 'index.html'; // Redirect to index.html
    });

    // Handle signup form submission
    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        document.querySelector('.signup-modal').style.display = 'none'; // Close the modal
        window.location.href = 'index.html'; // Redirect to index.html
    });
});