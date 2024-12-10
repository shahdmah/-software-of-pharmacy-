document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Sign Up successful!");
});