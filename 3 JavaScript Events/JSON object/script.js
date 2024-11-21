  // JSON object
  const person = {
    name: "Medunraj",
    age: 30,
    profession: "Full Stack Developer",
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React"],
        backend: ["Node.js", "Express", "MongoDB"]
    },
    location: {
        city: "Pondicherry",
        country: "India"
    }
};

// Function to display JSON data
function displayData() {
    document.getElementById('name').textContent = person.name;
    document.getElementById('age').textContent = person.age;
    document.getElementById('profession').textContent = person.profession;
    document.getElementById('frontendSkills').textContent = person.skills.frontend.join(", ");
    document.getElementById('backendSkills').textContent = person.skills.backend.join(", ");
    document.getElementById('city').textContent = person.location.city;
    document.getElementById('country').textContent = person.location.country;
}

// Function to update age dynamically
function updateAge() {
    const newAge = prompt("Enter the new age:");
    if (newAge) {
        person.age = parseInt(newAge);
        document.getElementById('age').textContent = person.age;
        alert(`Age updated to ${person.age}`);
    }
}