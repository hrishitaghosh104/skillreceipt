function loginUser() {
    const role = document.getElementById("role").value;

    // DEBUG ALERT (YOU WILL SEE THIS)
    alert("Login clicked. Role: " + role);

    if (role === "student") {
        window.location.href = "student-dashboard.html";
    } else if (role === "faculty") {
        window.location.href = "faculty-dashboard.html";
    }
}
