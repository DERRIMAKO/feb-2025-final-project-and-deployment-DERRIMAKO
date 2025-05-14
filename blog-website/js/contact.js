// Get the form element
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Get the values of the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        e.preventDefault();  // Prevent the form from being submitted
        return;  // Stop the validation here
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();  // Prevent the form from being submitted
        return;  // Stop the validation here
    }
});
