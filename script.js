document.addEventListener('DOMContentLoaded', function() {
    const websiteCountElement = document.getElementById('websiteCount');
    const loginContainer = document.querySelector('.login-container');
    const body = document.body;
    const decorElements = document.querySelectorAll('.decor');
    const users = {
        'piw piw': '3iw 3iw',
        'jebli': 'lmabli'
    };

    const redirectUrls = {
        'piw piw': 'https://itsme0kjhgf.github.io/gf-space/',
        'jebli': 'https://itsme0kjhgf.github.io/jebli-bd/'
    };

    const websiteCount = Object.keys(redirectUrls).length;
    websiteCountElement.textContent = `Websites made: ${websiteCount}`;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim().toLowerCase();
        const messageElement = document.getElementById('message');

        // Check for empty fields
        if (!username || !password) {
            messageElement.textContent = 'Please fill in both fields.';
            messageElement.className = 'error';
            return;
        }

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
        const value = this.value.trim().toLowerCase();
        if (value === 'piw piw') {
            body.classList.add('romance');
            loginContainer.classList.add('romance');
            decorElements.forEach(decor => decor.classList.add('romance'));
            body.classList.remove('dark-red');
            loginContainer.classList.remove('dark-red');
            decorElements.forEach(decor => decor.classList.remove('dark-red'));
        } else if (value === 'jebli') {
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
