
const button = document.getElementById('showDateTime');
const display = document.getElementById('dateTimeDisplay');

// Add event listener to the button
button.addEventListener('click', () => {
    // Get the current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Format as a readable string
    display.textContent = `Current Date and Time: ${formattedDateTime}`;
});
