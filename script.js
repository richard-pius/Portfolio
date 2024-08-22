// Get the contact form
const contactForm = document.getElementById('contact-form');

// Add event listener to the submit button
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the form data to a server-side script or API endpoint
    // For example, using Axios:
    axios.post('/send-message', {
        name,
        email,
        message
    })
    .then((response) => {
        console.log(response);

        // Show a success message
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error(error);

        // Show an error message
        alert('Error sending message. Please try again.');
    });
});