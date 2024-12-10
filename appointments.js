document.getElementById('appointments-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const doctorName = document.getElementById('doctor').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    alert(`Your appointment is booked with Dr. ${doctorName} for ${day} at ${time}.`);

});
