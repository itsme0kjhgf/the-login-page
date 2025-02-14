document.addEventListener('DOMContentLoaded', function() {
    const websiteCountElement = document.getElementById('websiteCount');
    const loginContainer = document.querySelector('.login-container');
    const body = document.body;
    const decorElements = document.querySelectorAll('.decor');
    const users = {
        'Piw piw': '3iw 3iw',
        'Bd boy': 'jebli'
    };

    const redirectUrls = {
        'Piw piw': 'https://itsme0kjhgf.github.io/gf-space/',
        'Bd boy': 'https://www.example2.com'
    };

    const websiteCount = Object.keys(redirectUrls).length;
    websiteCountElement.textContent = `Websites made: ${websiteCount}`;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('message');

        if (users[username] && users[username] === password) {
            messageElement.textContent = 'Login successful! Redirecting...';
            messageElement.className = 'success';
            setTimeout(() => {
                window.location.href = redirectUrls[username];
            }, 1500);
        } else {
            messageElement.textContent = 'Invalid credentials. Please try again.';
            messageElement.className = 'error';
        }
    });

    document.getElementById('username').addEventListener('input', function() {
        const value = this.value.trim();
        if (value === 'Piw piw') {
            body.classList.add('romance');
            loginContainer.classList.add('romance');
            decorElements.forEach(decor => decor.classList.add('romance'));
            body.classList.remove('dark-red');
            loginContainer.classList.remove('dark-red');
            decorElements.forEach(decor => decor.classList.remove('dark-red'));
        } else if (value === 'Bd boy') {
            body.classList.add('dark-red');
            loginContainer.classList.add('dark-red');
            decorElements.forEach(decor => decor.classList.add('dark-red'));
            body.classList.remove('romance');
            loginContainer.classList.remove('romance');
            decorElements.forEach(decor => decor.classList.remove('romance'));
        } else {
            body.classList.remove('romance', 'dark-red');
            loginContainer.classList.remove('romance', 'dark-red');
            decorElements.forEach(decor => decor.classList.remove('romance', 'dark-red'));
        }
    });
});
s
