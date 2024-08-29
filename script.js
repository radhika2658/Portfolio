document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '! I will get back to you soon.');
});
