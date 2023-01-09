const inputMail = document.getElementById("email");
const inputPsw = document.getElementById("password");
const buttonSubmit = document.getElementById("btn");

// Targeting error messages
const emptyInput = document.getElementById('empty');
const notFound = document.getElementById('notmatch');
const mAtch = document.getElementById('match');
// password error messages
const emptyPsw = document.getElementById('emptyPsw');
const pswNotmatch = document.getElementById('notmatchPsw');

// Targeting the local storage to implement the login page
const checkRegisteredMail = localStorage.getItem('userEmail');
const checkRegisteredMailConfirm = localStorage.getItem('userPassword');

const emailValid = () => {
  if (inputMail.value == "") {
    emptyInput.innerHTML = 'please enter your email';
    emptyInput.style.visibility = 'visible';
    notmatch.style.visibility = 'hidden';
  }else if (inputMail.value !== checkRegisteredMail) {
    notmatch.innerHTML = 'email does not match';
    notmatch.style.visibility = 'visible';
    emptyInput.style.visibility = 'hidden';
  }else if (inputMail.value === checkRegisteredMail) {
    mAtch.innerHTML = 'correct';
    mAtch.style.visibility = 'visible';
    notmatch.style.visibility = 'hidden';
    emptyInput.style.visibility = 'hidden';
  }
}
// Password validation
const passwordValid = () => {
  if (inputPsw.value === '') { 
    emptyPsw.innerHTML = 'Password not found';
    emptyPsw.style.visibility = 'visible';
    pswNotmatch.style.visibility = 'hidden';
  }else if (inputPsw.value !== checkRegisteredMailConfirm) {
    pswNotmatch.innerHTML = 'Password does not match';
    emptyPsw.style.visibility = 'hidden';
  }else if (inputPsw.value === checkRegisteredMailConfirm) {
    emptyPsw.style.visibility = 'hidden';
    pswNotmatch.style.visibility = 'hidden';
  }
}

const validateAll = () => {
  if (inputMail.value === checkRegisteredMail || inputPsw.value === checkRegisteredMailConfirm) {
      alert('login successful');
  }
}

buttonSubmit.addEventListener('click',(event) => {
  emailValid();
  passwordValid();
  validateAll();
})