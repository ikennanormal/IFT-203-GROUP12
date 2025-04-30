document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            const name = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const message = form.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                e.preventDefault(); // Prevent form from submitting
            } else {
                alert("Thank you! Your message has been received.");
            }
        });
    }
});
$(document).ready(function () {
    // Animate header on page load
    $("header").hide().fadeIn(1000);

    // Add hover effect to all buttons
    $("button").hover(
        function () {
            $(this).css("background-color", "#0d6efd"); // darker blue on hover
        },
        function () {
            $(this).css("background-color", "lightblue"); // original color
        }
    );
});
