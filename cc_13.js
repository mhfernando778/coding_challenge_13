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

function updateEmployeeCards() { // ussing array and query selector
    const employeeCardsNodeList = document.querySelectorAll(".employee-card");
    const employeeCardsArray = Array.from(employeeCardsNodeList);

    employeeCardsArray.forEach(card => { // changing the card background to pink
        card.style.backgroundColor = "pink";
    });
};

updateEmployeeCards(); // updating the employee card


// Task 4 - Implementing Removal of Employee Cards with Event Bubbling //

employeeContainer.addEventListener("click", (event) => { // creating a new click event
    event.stopPropagation();
    employeeContainer.removeChild.card;
    console.log("Employee card removed!"); // logging a message when button is clicked
});


// Task 5 //
const editButton = document.createElement("input");

editButton.addEventListener("click", (event) => { 
    const nameInput = document.createElement("input"); // create an input field for employee 
    nameInput.value = heading.textContent; 

    const positionInput = document.createElement("input"); // create an input field for employee position
    positionInput.value = paragraph.textContent; 

    const saveButton = document.createElement("button"); // Create save button 
    saveButton.textContent = "save changes";

    saveButton.addEventListener("click", (event) => { // Adding an event listener to the save button 
    heading.textContent = nameInput.value; 
    paragraph.textContent = positionInput.value; 
    card.removeChild(saveButton) // remove save button 
    card.removeChild(positionInput) // remove position 
    card.removeChild(nameInput); // remove name 
}) 

    card.appendChild(nameInput); // appending name 
    card.appendChild(positionInput); // appending 
    card.appendChild(saveButton); // appending the save button 
})
