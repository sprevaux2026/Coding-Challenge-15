// Task 1 - Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2 - Dynamically Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
  
    riskCard.innerHTML = `
      <h3>${riskName}</h3>
      <p class="level">Risk Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;
  
    riskDashboard.appendChild(riskCard);
  }
  
  // Handle form submissions
  document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
  
    addRiskItem(riskName, riskLevel, department);
    this.reset();
  });
  
  // Test Cases
  addRiskItem("Data Breach", "High", "IT");
  addRiskItem("Supply Chain Disruption", "Medium", "Operations");
  