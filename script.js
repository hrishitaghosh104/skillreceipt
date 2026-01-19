// LOGIN
function login() {
  const role = document.getElementById("role").value;
  if (role === "student") {
    window.location.href = "student-dashboard.html";
  } else {
    window.location.href = "faculty-dashboard.html";
  }
}

// STUDENT UPLOAD
function uploadSkill() {
  const skill = document.getElementById("skill").value;
  localStorage.setItem("skill", skill);
  localStorage.setItem("verified", "false");
  alert("Skill uploaded. Awaiting faculty verification.");
}

// FACULTY VIEW
if (window.location.pathname.includes("faculty-dashboard")) {
  const skill = localStorage.getItem("skill");
  const verified = localStorage.getItem("verified");

  if (skill) {
    document.getElementById("uploads").innerHTML = `
      <p>Skill: ${skill}</p>
      <button onclick="verify()">Verify</button>
    `;
  }
}

// VERIFY ACTION
function verify() {
  localStorage.setItem("verified", "true");
  alert("Skill verified successfully");
}

// STUDENT DASHBOARD
if (window.location.pathname.includes("student-dashboard")) {
  const verified = localStorage.getItem("verified");
  document.getElementById("status").innerHTML =
    verified === "true" ? "✅ Skill Verified" : "⏳ Pending Verification";
}

// CERTIFICATE
if (window.location.pathname.includes("certificate")) {
  const verified = localStorage.getItem("verified");
  document.getElementById("cert").innerHTML =
    verified === "true"
      ? "✔ VERIFIED SKILL CERTIFICATE"
      : "Skill not yet verified";
}
