// Facial Recognition
const video = document.getElementById('video');

// Function to start video stream for facial recognition
navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam:", error);
    });

// QR Code Scanning
const qrCanvas = document.getElementById('qr-canvas');
const qr = new QRious({
    element: qrCanvas,
    size: 200
});

// Add event listener to semester buttons
document.querySelectorAll('.semester-button').forEach(button => {
    button.addEventListener('click', function() {
        const semester = this.getAttribute('data-semester');
        // Generate QR code with the semester data
        qr.value = `https://example.com/semester/${semester}`;
    });
});

// Biometric Verification Modal
const modal = document.getElementById('biometric-modal');
const btn = document.getElementById('biometric-button');
const span = document.getElementsByClassName('close')[0];
const scanButton = document.getElementById('scan-fingerprint');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

scanButton.onclick = function() {
    // Simulate biometric verification process
    alert('Biometric verified successfully.');
    modal.style.display = 'none';
}

// Automated Reports and Analytics
document.getElementById('generate-report').addEventListener('click', () => {
    alert('Generating report...');
});

// Attendance Pie Chart
const ctxPie = document.getElementById('attendance-pie-chart').getContext('2d');
const attendancePieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            data: [75, 25], // Example data: 75% present, 25% absent
            backgroundColor: ['#36a2eb', '#ff6384'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

// Biometric Bar Chart
const ctxBar = document.getElementById('biometric-bar-chart').getContext('2d');
const biometricBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['User 1', 'User 2', 'User 3', 'User 4'],
        datasets: [{
            label: 'Biometric Data',
            data: [65, 59, 80, 81], // Example data
            backgroundColor: '#4caf50',
            borderColor: '#388e3c',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#333'
                }
            },
            x: {
                ticks: {
                    color: '#333'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
});
