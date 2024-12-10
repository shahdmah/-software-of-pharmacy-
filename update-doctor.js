let doctorData = {
    name: "Dr. Ahmed",
    email: "ahmed@example.com",
    password: "password123"
};

window.onload = function() {
    document.getElementById('name').value = doctorData.name;
    document.getElementById('email').value = doctorData.email;
};

document.getElementById('update-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const newName = document.getElementById('name').value;
    const newEmail = document.getElementById('email').value;
    const newPassword = document.getElementById('password').value;

    doctorData.name = newName;
    doctorData.email = newEmail;
    doctorData.password = newPassword;

    alert("Profile updated successfully!");

});

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html'; 
}
