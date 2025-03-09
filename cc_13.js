// Task 2 - Adding Employee Cards Dynamically //

function addEmployeeCard(name, position) { // building an employee card
    const employeeContainer = document.getElementById("employeeContainer");
    const card = document.createElement("div");
    
    card.setAttribute("class", "employee-card"); // setting up certain attributes
    card.classList.add("employee-card");

    const employeeName = document.createElement("h2"); // creating a heading for employee name
    employeeName.textContent = name;

    const employeePosition = document.createElement("p"); // Creating a paragraph for employee position
    employeePosition.textContent = position;

    const removeButton = document.createElement("button"); // creating a button to remove a card
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-button");
    removeButton.addEventListener("click", () => {
        employeeContainer.removeChild(card);
    });

    card.appendChild(employeeName); // appending 
    card.appendChild(employeePosition); // appending
    card.appendChild(removeButton); // appending

    employeeContainer.appendChild(card); // appending employee card
};

// Test cases //
addEmployeeCard("John Doe", "Teacher");
addEmployeeCard("Jane Cassidy", "Assistant");
addEmployeeCard("Janet Jackson", "Singer");


// Task 3: Converting NodeLists to Arrays for Bulk Updates //

function updateEmployeeCards() {
    const employeeCardsNodeList = document.querySelectorAll(".employee-card");
    const employeeCardsArray = Array.from(employeeCardsNodeList);

    employeeCardsArray.forEach(card => {
        card.style.backgroundColor = "pink"; // Light gray background
    });
};

updateEmployeeCards();