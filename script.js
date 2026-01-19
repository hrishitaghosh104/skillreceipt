function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function logActivity() {
  const skill = document.getElementById("skill").value;
  const evidence = document.getElementById("evidence").value;

  if (!skill || !evidence) {
    alert("Please fill all fields");
    return;
  }

  const activities = getData("activities");
  activities.push({
    skill,
    evidence,
    verified: false
  });

  saveData("activities", activities);
  alert("Submitted for verification");
  loadStudentDashboard();
}

function loadStudentDashboard() {
  const activities = getData("activities");
  let html = "";

  activities.forEach(a => {
    html += `
      <p>
        <b>${a.skill}</b> – ${a.verified ? "✅ Verified" : "⏳ Pending"}
      </p>`;
  });

  document.getElementById("studentActivities").innerHTML =
    html || "No activities logged yet.";
}
