function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMsg = document.getElementById("password-error");

    if (password !== confirmPassword) {
        errorMsg.style.display = "block";
        return false; // Stop submission
    }
            
    errorMsg.style.display = "none";
    return true; // Allow submission
}