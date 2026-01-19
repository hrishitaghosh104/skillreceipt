function showSignIn() {
    document.getElementById("signin-box").classList.remove("hidden");
    document.getElementById("signup-box").classList.add("hidden");
}

function showSignUp() {
    document.getElementById("signup-box").classList.remove("hidden");
    document.getElementById("signin-box").classList.add("hidden");
}

function signIn() {
    alert("Sign In successful (Demo)");
    window.location.href = "dashboard.html";
}

function signUp() {
    alert("Account created successfully (Demo)");
    window.location.href = "dashboard.html";
}
