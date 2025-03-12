document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Simulate authentication (Replace with backend validation)
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "alien@example.com" && password === "alien123") {
        window.location.href = "index.html"; // Redirect to Home Page
    } else {
        alert("Invalid credentials! Please try again.");
    }
});
