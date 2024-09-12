const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validation and error handling
  let errors = [];

  if (name.trim() === '') {
    errors.push('Please enter your full name');
  }

  if (email.trim() === '') {
    errors.push('Please enter your email');
  } else if (!validateEmail(email)) {
    errors.push('Please enter a valid email address');
  }

  if (password.trim() === '') {
    errors.push('Please enter your password');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    // No errors, proceed with storing the user's data securely (e.g., using a backend API)
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  }
});

// Helper function to validate email address
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Helper function to display errors
function displayErrors(errors) {
  const errorList = document.getElementById('error-list');
  errorList.innerHTML = '';

  errors.forEach((error) => {
    const errorListItem = document.createElement('li');
    errorListItem.textContent = error;
    errorList.appendChild(errorListItem);
  });
}