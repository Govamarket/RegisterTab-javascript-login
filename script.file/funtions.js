
// // Whole funtion
const validateUserName = () => {
    if (usernameInput.value == "") {
      emptyusername.innerHTML = "Please enter your name";
      emptyusername.style.visibility="visible";
      lessthanusername.style.visibility="hidden";
    }else if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
      lessthanusername.innerHTML = "Must between 3 and 15 characters!";
      lessthanusername.style.visibility="visible";
      emptyusername.style.visibility="hidden";
    }else{
      lessthanusername.style.visibility="hidden";
      emptyusername.style.visibility="hidden";
    }
  }
  
  const emailInputValidation = () => {
  // EmaiL VALIDATE
  if (emailInput.value == "") {
    emptymail.innerHTML = "Please enter your email";
    emptymail.style.visibility="visible";
    validmail.style.visibility="hidden";
  } else if (!emailInput.value.match(validRegex)) {
    validmail.innerHTML = "Please enter a valid email";
    validmail.style.visibility="visible";
    emptymail.style.visibility="hidden";
  } else {
    validmail.style.visibility="hidden";
    emptymail.style.visibility="hidden";
  }
  }
  
  const passwordInputValidation = () => {
    // Password validation field 
    if (passwordInput.value == "") {
      emptypsw.innerHTML = "Please enter a password";
      emptypsw.style.visibility="visible";
      lessthanpassword.style.visibility="hidden";
    } else if (
      passwordInput.value.length < 8 ||
      passwordInput.value.length > 15
    ) {
      lessthanpassword.innerHTML = "Must between 3 and 15 characters!";
      lessthanpassword.style.visibility="visible";
      emptypsw.style.visibility="hidden";
    } else {
      lessthanpassword.style.visibility="hidden";
      emptypsw.style.visibility="hidden";
    }
    
    }
  
  const passwordConfirmValidation = () => {
      if (passwordConfirm.value == "") {
        emptyconfirm.innerHTML = "Please enter your password";
        emptyconfirm.style.visibility="visible";
        notmatch.style.visibility="hidden";
      } else if (
        !passwordConfirm.value.match(passwordInput.value) ||
        !passwordInput.value.match(passwordConfirm.value)
      ) {
        notmatch.innerHTML = "Confirm Password not match";
        notmatch.style.visibility="visible";
        emptyconfirm.style.visibility="hidden";
      } else {
        notmatch.style.visibility="hidden";
        emptyconfirm.style.visibility="hidden";
      }
    
    }
    
  export {validateUserName, emailInputValidation, passwordInputValidation, passwordConfirmValidation};
