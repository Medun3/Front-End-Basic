
class Counter {
    constructor() {
        this._count = 0;  // Private variable
    }

    // Getter method to retrieve the count
    get count() {
        return this._count;
    }

    // Setter method to set the count
    set count(value) {
        if (value >= 0) {
            this._count = value;
        } else {
            alert("Count cannot be negative.");
        }
    }

    // Method to increment the count
    increment() {
        this._count++;
    }

    // Method to decrement the count
    decrement() {
        if (this._count > 0) {
            this._count--;
        } else {
            alert("Count cannot go below zero.");
        }
    }

    // Method to reset the count to 0
    reset() {
        this._count = 0;
    }
}

// Create an instance of the Counter class
const myCounter = new Counter();

// Update the displayed counter value
function updateCounterDisplay() {
    document.getElementById("counterDisplay").textContent = "Count: " + myCounter.count;
}

// Event handler for incrementing the counter
function increaseCount() {
    myCounter.increment();
    updateCounterDisplay();
}

// Event handler for decrementing the counter
function decreaseCount() {
    myCounter.decrement();
    updateCounterDisplay();
}

// Event handler for resetting the counter
function resetCount() {
    myCounter.reset();
    updateCounterDisplay();
}

// Initial display update
updateCounterDisplay();