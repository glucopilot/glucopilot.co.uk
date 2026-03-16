document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    var messageEl = document.getElementById('register-message');
    messageEl.textContent = '';
    messageEl.className = 'register-message';
    var formData = new FormData();
    formData.append('email', document.getElementById('email-input').value);
    try {
        var response = await fetch('https://glucopilot.runasp.net/api/register', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            messageEl.textContent = "You're on the list! We'll be in touch soon.";
            messageEl.classList.add('register-message--success');
            document.getElementById('email-input').value = '';
        } else if (response.status === 400) {
            messageEl.textContent = 'Please enter a valid email address.';
            messageEl.classList.add('register-message--error');
        } else {
            messageEl.textContent = 'Something went wrong. Please try again.';
            messageEl.classList.add('register-message--error');
        }
    } catch (err) {
        console.error('Registration error:', err);
        messageEl.textContent = 'Something went wrong. Please try again.';
        messageEl.classList.add('register-message--error');
    }
});
