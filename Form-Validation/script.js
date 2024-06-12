var nameError = document.getElementById('name-error');
var contactError = document.getElementById('contact-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var cpasswordError = document.getElementById('cpassword-error');
var submitError = document.getElementById('submit-error');

function validateName(){
 var name= document.getElementById('contact-name').value;
 if(name.length == 0){
    nameError.innerHTML="Name is required";
    return false;
 }
 if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Write Full Name";
    return false;3
 }
 nameError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #3f9d25;"></i>';
 return true;
}

function validateContact(){
    var contact= document.getElementById('contact-contact').value;
    if(contact.length == 0){
       contactError.innerHTML="Contact number is required";
       return false;
    }
    if(contact.length  !== 10){
        contactError.innerHTML="Contact number should be 10 digits";
        return false;
     }
     if(!contact.match(/^[0-9]{10}$/)) {
        contactError.innerHTML="only digits";
        return false;
     }
    contactError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #3f9d25;"></i>';
    return true;
   }
   
   function validateEmail(){
      var email= document.getElementById('contact-email').value;
      if(email.length == 0){
        emailError.innerHTML="Email is required";
       return false;
      }
      if(!email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
         emailError.innerHTML="Email invalid";
         return false;
      }
      emailError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #3f9d25;"></i>';
      return true;
   }

   function validatePassword(){
      var pass=document.getElementById('contact-password').value;
      if(pass.length == 0){
         passwordError.innerHTML="Password is required";
        return false;
       }
      if (pass.length < 6) {
          passwordError.innerHTML = 'Password must be at least 6 characters long.';
        return false;
     }
    passwordError.innerHTML='<i class="fa-solid fa-circle-check" style="color: #3f9d25;"></i>';
     return true;
   }
  
   function validateCPassword() {
      var pass = document.getElementById('contact-password').value;
      var cpass = document.getElementById('contact-cpassword').value;
      if (cpass.length == 0) {
          cpasswordError.innerHTML = "Confirm password is required";
          return false;
      }
      if (pass !== cpass) {
          cpasswordError.innerHTML = 'Passwords do not match.';
          return false;
      }
      cpasswordError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #3f9d25;"></i>';
      return true;
  }
  
  function validateForm() {
      if (!validateName() || !validateContact() || !validateEmail() || !validatePassword() || !validateCPassword()) {
         submitError.style.display='block';
          submitError.innerHTML = "Please fix errors to submit";
          setTimeout(function(){submitError.style.display='none';},3000);
          return false;
      }
      return true;
  }
  function togglePasswordVisibility() {
   const passwordInput = document.getElementById('password');
   const togglePassword = document.querySelector('.toggle-password');

   if (passwordInput.type === 'password') {
       passwordInput.type = 'text';
       togglePassword.textContent = 'Hide';
   } else {
       passwordInput.type = 'password';
       togglePassword.textContent = 'Show';
   }
}