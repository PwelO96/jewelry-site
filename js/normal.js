const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

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

console.log('emailsend loaded');