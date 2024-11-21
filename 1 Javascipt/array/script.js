// Array of fruit names
const fruits = ["Apple", "Banana", "Mango", "Grape", "Orange", "Pineapple"];

// Function to display the list of fruits
function displayFruits(fruitArray) {
    const fruitList = document.getElementById("fruit-list");
    fruitList.innerHTML = ""; // Clear the list before adding items
    fruitArray.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

// Function to sort the fruits in descending order
function sortFruits() {
    const sortedFruits = fruits.sort((a, b) => b.localeCompare(a)); // Sorting in descending order
    displayFruits(sortedFruits); // Update the displayed list
}

// Initial display of fruits
displayFruits(fruits);
