document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const email = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      
      if (!password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/)) {
        alert('Password must contain an uppercase letter, a number, and can only contain special character @.');
        return;
      }
  
      if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html'; 
      } else {
        alert('Incorrect password. Please try again.');
      }
    });
  });
  