document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic (you can implement this later)
    window.location.href = 'dashboard.html'; // Redirect to dashboard after login
});

document.getElementById('certificationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('certName').value;
    const dateAchieved = document.getElementById('dateAchieved').value;
    const userId = document.getElementById('userId').value;

    const response = await fetch('/api/certifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, dateAchieved, userId }),
    });

    if (response.ok) {
        const newCertification = await response.json();
        // Update the certification list (you can implement this later)
        console.log('New certification added:', newCertification);
    } else {
        console.error('Error adding certification');
    }
});
