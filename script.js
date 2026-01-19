function showSignIn() {
    document.getElementById("signin-box").style.display = "block";
    document.getElementById("signup-box").style.display = "none";
}

function showSignUp() {
    document.getElementById("signup-box").style.display = "block";
    document.getElementById("signin-box").style.display = "none";
}

function signIn() {
    alert("Sign In successful (Demo)");
    window.location.href = "dashboard.html";
}

function signUp() {
    alert("Sign Up successful (Demo)");
    window.location.href = "dashboard.html";
}
