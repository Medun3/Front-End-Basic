
        // Constructor function
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // Adding methods and properties to the prototype
        Person.prototype.greet = function() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        };

        Person.prototype.country = "India"; // Adding a country property

        Person.prototype.sayGoodbye = function() {
            return `Goodbye from ${this.name}!`;
        };

        // Creating an instance of Person
        const person1 = new Person('Medunraj', 25);

        // Displaying the properties and methods in the HTML
        document.getElementById('name').textContent = person1.name;
        document.getElementById('age').textContent = person1.age;
        document.getElementById('country').textContent = person1.country;
        document.getElementById('greeting').textContent = person1.greet();
        document.getElementById('goodbye').textContent = person1.sayGoodbye();
    