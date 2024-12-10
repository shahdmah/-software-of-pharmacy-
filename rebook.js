document.getElementById('rebook-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const doctor = document.getElementById('doctor').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    // إرسال البيانات إلى السيرفر باستخدام fetch
    fetch('/rebook_appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctor, day, time }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Appointment rebooked successfully!');
                window.location.href = '/appointments'; // إعادة التوجيه لصفحة المواعيد
            } else {
                alert('Failed to rebook appointment. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});
