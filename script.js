// script.js
// Add event listeners to the contact form
const form = document.querySelector('form');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
});

button.addEventListener('click', () => {
    // Handle button click
    console.log('Button clicked');
});
