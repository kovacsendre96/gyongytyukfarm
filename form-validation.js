const form = document.getElementById('form');
const username = document.getElementById('név');
const email = document.getElementById('email');
const message = document.getElementById('üzenet');

// Show error
function showError(input, errorMessage) {
    const inputWrapper = input.parentElement;
    inputWrapper.classList = "input-wrapper error";
    const small = inputWrapper.querySelector('small');
    small.innerText = errorMessage;

}

// Show succes
function showSucces(input) {
    const inputWrapper = input.parentElement;
    inputWrapper.classList = "input-wrapper succes";
}

// Input value check
function inputCheck(array) {
    array.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${firstCharUpper(input)} kitöltése kötelező`);

        }
        else {
            showSucces(input)
        }
    });
}

// input id first character uppercase
function firstCharUpper(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// Check message length
function checkMessageLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id} minimum karakterszáma: ${min}`);
    }
    else if (input.value.length >= max) {
        showError(input, `${input.id} maximum karakterszáma ${max}`);
    }
}



// Email check
function emailCheck(input) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucces(input)
    }
    else {
        showError(input, 'Helytelen email cím');
    }
}




// If everything is alright first feedback message than send the message to the email

/* function sendMail(params){

    var tempParams ={
        név:username.value,
        telefonszám:document.getElementById('telefonszám').value,
        email:email.value,
        üzenet:message.value,
    }
    emailjs.send('service_3ew9vtr','template_rzesgwf',tempParams)
} */
function send() {

    const feedback = document.querySelector('.feedback');
    const errorInput = document.querySelectorAll('.input-wrapper.error');


    if (errorInput.length === 0) {
        feedback.classList = ('feedback succes');
        feedback.innerText = "Üzenet sikeresen elküldve.";
        form.reset();
     /*    sendMail(); */
    }
    else {
        feedback.classList = ('feedback error');
        feedback.innerText = "Kérem töltse ki az űrlapot!";
    }
}






// Event listener
form.addEventListener('submit', function (e) {
    inputCheck([username, email, message]);
    e.preventDefault();
    emailCheck(email)
    checkMessageLength(message, 10, 15000);
    send();

});


