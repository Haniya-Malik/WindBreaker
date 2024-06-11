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

    // Show signup modal when signup link is clicked
    document.getElementById('signup-link').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.signup-modal').style.display = 'block';
    });

    // Close signup modal when close button is clicked
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.signup-modal').style.display = 'none';
    });

    // Close signup modal when clicking outside of the modal
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('signup-modal')) {
            document.querySelector('.signup-modal').style.display = 'none';
        }
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

    // Remove the first Google Sign-In button found in the document
    const googleSignInButton = document.querySelector('.g_id_signin');
    if (googleSignInButton) {
        googleSignInButton.remove();
    }

    // Google Sign-In callback function
    window.handleCredentialResponse = function (response) {
        const data = jwt_decode(response.credential);
        console.log(data); // Use this data to authenticate the user on your server
        // Redirect to index.html
        window.location.href = 'index.html';
    };

    // Initialize Google Sign-In
    const googleSignInDiv = document.createElement('div');
    googleSignInDiv.id = 'g_id_onload';
    googleSignInDiv.dataset.clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual Google Client ID
    googleSignInDiv.dataset.callback = 'handleCredentialResponse';
    document.body.appendChild(googleSignInDiv);

    const googleSignInContainer = document.createElement('div');
    googleSignInContainer.className = 'google-signin-container';
    const googleSignInButtonAfterLogin = document.createElement('div');
    googleSignInButtonAfterLogin.className = 'g_id_signin';
    googleSignInButtonAfterLogin.dataset.type = 'standard';
    googleSignInContainer.appendChild(googleSignInButtonAfterLogin);
    document.querySelector('.login-section').appendChild(googleSignInContainer);

    // Load the Google Sign-In script
    const googleSignInScript = document.createElement('script');
    googleSignInScript.src = 'https://accounts.google.com/gsi/client';
    googleSignInScript.async = true;
    googleSignInScript.defer = true;
    document.head.appendChild(googleSignInScript);
});
