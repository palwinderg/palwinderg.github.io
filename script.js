//code for javascript functions used in the html code / website

function onSubmit() {
    if (document.getElementById('password').value == 'kellytire') {
      window.location.href = 'kellytire.html'; 
  }
    else{ alert('Please check your passcode and try again');
  }
}