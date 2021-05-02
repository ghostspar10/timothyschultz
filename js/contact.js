document.getElementById("myForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    document.getElementById("myForm").reset();

    sendEmail(name, email, subject, message);
}

// Send Email Info
function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'tschultzpersonalwebsite@gmail.com',
        Password: "vntbkwbetcmwiwpn",
        To: 'tschultz10000@gmail.com',
        From: 'tschultzpersonalwebsite@gmail.com',
        Subject: `${name}: ${subject}`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Email successfully sent."));
}