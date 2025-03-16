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
  
 // Task 3 - Adding Resolve button functionality separately
// Add Resolve button to each existing and future risk cards
function addResolveButton(riskCard) {
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
  
    resolveButton.addEventListener("click", function() {
        riskDashboard.removeChild(riskCard);
    });
  
    riskCard.appendChild(resolveButton);
}

// Update existing addRiskItem to include Resolve button 
const originalAddRiskItem = addRiskItem;
addRiskItem = function(riskName, riskLevel, department) {
    originalAddRiskItem(riskName, riskLevel, department);
  
    const lastRiskCard = riskDashboard.lastElementChild;
    addResolveButton(lastRiskCard);
};

// Task 3 Test Case
addRiskItem("Market Fluctuations", "High", "Finance");