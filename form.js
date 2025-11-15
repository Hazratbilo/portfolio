(function () { 
    emailjs.init("bZRdSUpDDpwp_92PX");
})();

function sendEmail(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    // const services = document.getElementById("services").value.trim();
    const message = document.getElementById("message").value.trim();

    console.log('Form submitted with:', {name, email, phone, services, message});

    // Validate that all fields are filled
    if (!name || !email || !phone || !services || !message) {
        alert('Please fill in all fields');
        console.log('Validation failed - missing fields');
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        // services: services,
        message: message,
    };

    console.log('Sending email with params:', templateParams);

    // Send email via EmailJS
    emailjs.send('service_oyicf87', 'template_dsfis46', templateParams)
        .then(
            (response) => {
                console.log('Email sent successfully:', response);
                alert('SUCCESS!!!!!! Your message has been sent to hazrat bilo.We will get back to you shortly.Thanks');
                document.getElementById("contact-form").reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'SEND MESSAGE';
            },
            (error) => {
                console.error('Email failed to send:', error);
                alert('FAILED! Error: ' + JSON.stringify(error));
                submitBtn.disabled = false;
                submitBtn.textContent = 'SEND MESSAGE';
            }
        )
        .catch((err) => {
            console.error('Unexpected error:', err);
            alert('FAILED! Unexpected error: ' + err.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'SEND MESSAGE';
        });
}

//menu
function showmenu() {
    document.getElementById("menu").style.right = "0%";
}
function hidemenu() {
    document.getElementById("menu").style.right = "-70%";
}

//scrol to top
let button = document.getElementsByClassName("scroll")[0]

window.onscroll = function () {
    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    window.scroll({
        top: 0
    })
}