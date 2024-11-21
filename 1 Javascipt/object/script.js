 let person = {
    firstname: "Medun",
    lastname: "Raj"
};

// Accessing properties using dot notation
document.getElementById("dot-notation").innerText = "First Name: " + person.firstname + " " + person.lastname;

// Accessing properties using bracket notation
document.getElementById("bracket-notation").innerText = "Last Name: " + person["firstname"] + " " + person["lastname"];
