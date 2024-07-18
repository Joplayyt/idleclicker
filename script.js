let resource = 0;
let upgradeCost = 10;
let upgradeMultiplier = 1;
let cps = 0;

const resourceDisplay = document.getElementById('resource');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cpsDisplay = document.getElementById('cps');

// Click button logic
clickButton.addEventListener('click', () => {
    resource += upgradeMultiplier;
    resourceDisplay.textContent = `Resource: ${resource}`;
});

// Upgrade button logic
upgradeButton.addEventListener('click', () => {
    if (resource >= upgradeCost) {
        resource -= upgradeCost;
        upgradeMultiplier += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        resourceDisplay.textContent = `Resource: ${resource}`;
        upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
    }
});

// Auto-click logic
function autoClick() {
    resource += cps;
    resourceDisplay.textContent = `Resource: ${resource}`;
}

function updateCPS() {
    cpsDisplay.textContent = cps;
}

// Start the auto-clicking every second
setInterval(() => {
    autoClick();
}, 1000);

// You can enhance this part with additional features, e.g., more upgrades, automation, etc.
