function handleSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('confirmation-message').textContent = "Thank you for reaching out to us! We'll get back to you soon.";
      document.getElementById('contact-form').reset();
    } else {
      document.getElementById('confirmation-message').textContent = "Please fill out all fields.";
    }
  }
  