$(document).ready(function() {
    function updateContactInformation() {
        var email, telephoneNumber, address;

        email = prompt("Enter your email address:");
        telephoneNumber = prompt("Enter your telephone number:");
        address = prompt("Enter your address:");

        if (!isValidEmail(email)) {
            alert("Invalid email address. Please enter a valid email address.");
            return;
        }

        $('.contact-email').text(email);
        $('.contact-telephone').text(telephoneNumber);
        $('.contact-address').text(address);

        console.log("From:", email);
        console.log("Contact:", telephoneNumber);
        console.log("Address:", address);
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    $('#updateContactBtn').on('click', function() {
        updateContactInformation();
    });
});
