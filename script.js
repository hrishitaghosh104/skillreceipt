/********************
 STORAGE UTILITIES
********************/
function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/********************
 LOGIN
********************/
function loginUser() {
  const role = document.getElementById("role").value;
  if (role === "student") location.href = "student-dashboard.html";
  if (role === "institution") location.href = "institution-dashboard.html";
  if (role === "recruiter") location.href = "recruiter-dashboard.html";
}

/********************
 STUDENT FEATURES
********************/
function logActivity() {
  const skill = document.getElementById("skill").value;
  const evidence = document.getElementById("evidence").value;

  if (!skill || !evidence) {
    alert("Please enter skill and evidence");
    return;
  }

  const activities = getData("activities");
  activities.push({
    skill,
    evidence,
    verified: false
  });

  setData("activities", activities);
  alert("Activity logged. Awaiting verification.");
  loadStudentDashboard();
}

function loadStudentDashboard() {
  const activities = getData("activities");
  let html = "";

  activities.forEach(a => {
    html += `
      <p>
        <strong>${a.skill}</strong> — 
        ${a.verified ? "✅ Verified" : "⏳ Pending"}
      </p>`;
  });

  document.getElementById("studentActivities").innerHTML =
    html || "No activities logged yet.";
}

/********************
 INSTITUTION FEATURES
********************/
function loadInstitutionDashboard() {
  const activities = getData("activities");
  let html = "";

  activities.forEach((a, i) => {
    html += `
      <div class="card">
        <strong>${a.skill}</strong>
        <p>Evidence: ${a.evidence}</p>
        <p>Status: ${a.verified ? "Verified" : "Pending"}</p>
        <button onclick="verifySkill(${i})">Verify</button>
      </div>`;
  });

  document.getElementById("institutionList").innerHTML =
    html || "No student submissions yet.";
}

function verifySkill(index) {
  const activities = getData("activities");
  activities[index].verified = true;
  setData("activities", activities);
  alert("Skill verified successfully");
  loadInstitutionDashboard();
  loadAnalytics();
}

/********************
 CERTIFICATE + QR
********************/
function generateQR(text) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
}

function loadCertificate() {
  const activities = getData("activities");
  let html = "";

  activities.filter(a => a.verified).forEach(a => {
    const qr = generateQR(window.location.href);
    html += `
      <div class="certificate">
        <h3>${a.skill}</h3>
        <p>✔ Verified SkillReceipt</p>
        <p>Evidence: ${a.evidence}</p>
        <img src="${qr}">
        <p><small>Scan QR to verify</small></p>
      </div>`;
  });

  document.getElementById("cert").innerHTML =
    html || "No verified skills yet.";
}

/********************
 PDF DOWNLOAD
********************/
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("SkillReceipt – Verified Skill Certificate", 20, 20);
  doc.text("This certificate confirms verified skills.", 20, 30);
  doc.save("SkillReceipt_Certificate.pdf");
}

/********************
 RECRUITER FEATURES
********************/
function loadRecruiterDashboard() {
  const activities = getData("activities");
  let html = "";

  activities.filter(a => a.verified).forEach(a => {
    html += `
      <div class="card">
        <strong>${a.skill}</strong>
        <p>Evidence: ${a.evidence}</p>
      </div>`;
  });

  document.getElementById("recruiterResults").innerHTML =
    html || "No verified candidates yet.";
}

/********************
 ANALYTICS
********************/
function loadAnalytics() {
  const activities = getData("activities");
  const verified = activities.filter(a => a.verified).length;
  const pending = activities.length - verified;

  const ctx = document.getElementById("skillChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Verified", "Pending"],
      datasets: [{
        data: [verified, pending],
        backgroundColor: ["green", "orange"]
      }]
    }
  });
}
