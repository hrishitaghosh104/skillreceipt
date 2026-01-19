// LOGIN REDIRECTION
function loginUser() {
  const role = document.getElementById("role").value;

  if (role === "student") {
    window.location.href = "student-dashboard.html";
  } else {
    window.location.href = "faculty-dashboard.html";
  }
}

// STUDENT UPLOAD (SIMULATED)
function uploadSkill() {
  localStorage.setItem("skillName", "Data Analysis");
  localStorage.setItem("verified", "false");
  alert("Skill uploaded. Waiting for faculty verification.");
}

// FACULTY VERIFY
function verifySkill() {
  localStorage.setItem("verified", "true");
  localStorage.setItem("verifiedBy", "Faculty Member");
  alert("Skill verified successfully");
}

// STUDENT DASHBOARD STATUS
function loadStudentStatus() {
  const verified = localStorage.getItem("verified");
  const statusDiv = document.getElementById("status");

  if (verified === "true") {
    statusDiv.innerHTML = "✅ Skill Verified";
  } else {
    statusDiv.innerHTML = "⏳ Verification Pending";
  }
}

// CERTIFICATE DISPLAY
function loadCertificate() {
  const verified = localStorage.getItem("verified");
  const skill = localStorage.getItem("skillName");
  const verifier = localStorage.getItem("verifiedBy");
  const cert = document.getElementById("cert");

  if (verified === "true") {
    cert.innerHTML = `
      <div class="certificate">
        <h2>Skill Verification Certificate</h2>
        <p><strong>Skill:</strong> ${skill}</p>
        <p class="verified">✔ VERIFIED</p>
        <p>Verified by: ${verifier}</p>
        <p>Date: ${new Date().toDateString()}</p>
      </div>
    `;
  } else {
    cert.innerHTML = "<p>❌ Skill not yet verified.</p>";
  }
}
