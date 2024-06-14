const correctPassword = 'Sahiba';  // Change this to your desired password

function checkPassword() {
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginBox = document.getElementById('loginBox');
    const secretBox = document.getElementById('secretBox');

    if (passwordInput === correctPassword) {
        errorMessage.textContent = '';
        loginBox.style.display = 'none';
        secretBox.style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password, please try again.';
    }
}
