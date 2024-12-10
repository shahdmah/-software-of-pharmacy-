//    (Sign Up)
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password, phone }));

    window.location.href = "login.html";
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        window.location.href = "pharmacy.html";
    } else {
        alert("Invalid credentials!");
    }
});
