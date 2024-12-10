let pendingAppointments = [
    { name: "Ahmed Ali", time: "10:00 AM" },
    { name: "Sara Khaled", time: "11:00 AM" },
    { name: "Mohamed Fayed", time: "1:00 PM" }
];

let confirmedAppointments = [];

function displayAppointments() {
    const pendingTableBody = document.getElementById('pending-appointments');
    const confirmedTableBody = document.getElementById('confirmed-appointments');

    pendingTableBody.innerHTML = '';
    pendingAppointments.forEach((appointment, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.time}</td>
            <td>
                <button class="accept" onclick="approveAppointment(${index})">Approve</button>
                <button class="reject" onclick="rejectAppointment(${index})">Reject</button>
            </td>
        `;
        pendingTableBody.appendChild(row);
    });

    confirmedTableBody.innerHTML = '';
    confirmedAppointments.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.time}</td>
            <td>Confirmed</td>
        `;
        confirmedTableBody.appendChild(row);
    });
}

function approveAppointment(index) {
    const approvedAppointment = pendingAppointments.splice(index, 1)[0];
    confirmedAppointments.push(approvedAppointment);
    displayAppointments();
}

function rejectAppointment(index) {
    pendingAppointments.splice(index, 1);
    displayAppointments();
}

function logout() {
    alert("You have been logged out!");
    window.location.href = 'index.html';
}

window.onload = displayAppointments;
