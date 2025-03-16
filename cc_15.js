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

// Task 4 - Categorizing Risks by Level (Color-coding risk cards)
function applyRiskColor(riskCard, riskLevel) {
    if (riskLevel === "High") {
        riskCard.style.backgroundColor = "red";
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "yellow";
    } else if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "green";
    }
}

// Update addRiskItem to apply colors to new risk items
const originalAddRiskItemWithResolve = addRiskItem;
addRiskItem = function(riskName, riskLevel, department) {
    originalAddRiskItemWithResolve(riskName, riskLevel, department);
    const lastRiskCard = riskDashboard.lastElementChild;
    applyRiskColor(lastRiskCard, riskLevel);
};

// Apply color-coding to existing risk cards 
document.querySelectorAll(".riskCard").forEach(card => {
    const levelElement = card.querySelector(".level");
    const riskLevel = levelElement.textContent.replace("Risk Level: ", "");
    applyRiskColor(card, riskLevel);
});

// Task 4 Test Cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5 - Bulk Risk Updates (Increasing Risk Levels)
document.getElementById("increaseRiskLevels").addEventListener("click", function() {
    document.querySelectorAll(".riskCard").forEach(card => {
        const levelElement = card.querySelector(".level");
        let currentLevel = levelElement.textContent.replace("Risk Level: ", "");

        if (currentLevel === "Low") {
            levelElement.textContent = "Risk Level: Medium";
            applyRiskColor(card, "Medium");
        } else if (currentLevel === "Medium") {
            levelElement.textContent = "Risk Level: High";
            applyRiskColor(card, "High");
        }
        // High stays the same
    });
});

// Task 5 Test Case
addRiskItem("Employee Retention", "Low", "HR");
