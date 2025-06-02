const passwordInput = document.getElementById("password"); 
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener('click',() =>{
  const value = passwordInput.type === 'password' ? 'text' : 'password'; // Ternary Operation
  passwordInput.type = value;
  togglePassword.src = value === 'password' ? 'eye close.jpg' : 'eye open.jpg'
})