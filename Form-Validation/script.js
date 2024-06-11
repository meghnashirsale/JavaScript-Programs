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
    return false;
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
   
   