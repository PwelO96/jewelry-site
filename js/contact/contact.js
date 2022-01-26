const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');


//Validate inputs
const validateForm = () => {

    clearMessages();
    const errorFlag = false;

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Pole imię nie może być puste"
        errorNodes[0].classList.add('error_msg');
        errorFlag = true;
    }

    if (!emailIsValid(emailInput.value)) {
        errorNodes[1].innerText = "Niepoprawny adres e-mail"
        errorNodes[1].classList.add('error_msg')
        errorFlag = true;
    }

    if (messageInput.value.length < 1) {
        errorNodes[2].innerText = "Pole treść nie może być puste"
        errorNodes[2].classList.add('error_msg')
        errorFlag = true;
    }

    if (!errorFlag) {
        success.innerText = "Wiadomość została wysłana"
        clearMessages();
    }
}

// Clear error
const clearMessages = () => {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
        errorNodes[i].classList.remove('error_msg');
    }

}

// Check if email is valid
let emailIsValid = (email) => {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

const sendEmail = () => {
    Email.send({
        Host: "smtp.wp.pl",
        Username: "paweleq200@wp.pl",
        Password: "Anakonda!23",
        To: 'venuriaots@gmail.com',
        From: 'paweleq200@wp.pl',
        Subject: "Nowy email ze strony www.jubilerinfinity.pl",
        Body: "Imię: " + nameInput.value + "<br>Email: " + emailInput.value + " <br>Wiadomość: " + messageInput.value
    }).then(
        message => alert(message),
        emailInput.value = "",
        nameInput.value = "",
        messageInput.value = ""
    );

}