
        const person = {
            name: "Medunraj",
            age: 25,
            profession: "Full Stack Developer",
            country: "India"
        };

        const list = document.getElementById("personDetails");

        for (let key in person) {
            let listItem = document.createElement("li");
            listItem.textContent = key + ": " + person[key];
            list.appendChild(listItem);
        }
        