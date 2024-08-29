document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');

    copyButton.addEventListener('click', () => {
        const cell = document.getElementById('contact-cell').innerText.replace('Cell: ', '');
        const email = document.getElementById('contact-email').innerText.replace('Email: ', '');
        const location = document.getElementById('contact-location').innerText;
        const contactInfo = `Cell: ${cell}\nEmail: ${email}\nLocation: ${location}`;

        navigator.clipboard.writeText(contactInfo).then(() => {
            alert('Contact information copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy contact information: ', err);
        });
    });
});
