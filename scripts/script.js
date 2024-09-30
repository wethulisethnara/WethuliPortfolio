// Initialize EmailJS
(function () {
    emailjs.init("xpkkBZ7ZaKww9bR6D"); // Replace with your EmailJS User ID
})();

function loadContent(page) {
    let content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = `
           <img src="images/welcome-photo.jpg" alt="Welcome Image" class="welcome-image" />
           <div class="welcome-text">
               <h1>Hi! I'm Wethuli Sethnara!</h1>
               <p>I'm 18 years old. Currently a student at LNBTI University. I'm interested in software developing and web designing.</p>
               <button class="cta-button" onclick="loadContent('about')">Discover More</button>
           </div>
        `;
    } else if (page === 'about') {
        let template = document.getElementById('about-template');
        content.innerHTML = template.innerHTML;
    } else if (page === 'work') {
        let template = document.getElementById('work-template');
        content.innerHTML = template.innerHTML;
    } else if (page === 'contact') {
        let template = document.getElementById('contact-template');
        content.innerHTML = template.innerHTML;
    }
}

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    const form = event.target; // Get the form element

    // Send the email using EmailJS
    emailjs.sendForm('service_wethuli', 'template_wethuli', form)
        .then(function (response) {
            alert('Email sent successfully!', response.status, response.text);
        }, function (error) {
            alert('Failed to send email. Please try again later.', error);
        });
}
