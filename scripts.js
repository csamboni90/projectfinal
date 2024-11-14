document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const message = document.getElementById('message');
  
    // Manejar el registro de usuario
    if (registerForm) {
      registerForm.addEventListener('button', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const password = document.getElementById('password').value;
  
        fetch('http://localhost:3006/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, mail, password })
        })
        .then(response => response.json())
        .then(data => {
          message.textContent = data.message || data.error;
        })
        .catch(error => {
          message.textContent = 'Error de servidor';
        });
      });
    }
  });
