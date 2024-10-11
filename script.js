// Hämta referenser till element
const addText = document.querySelector("#addText");
const listedItems = [];
const label = document.querySelector("p");
const warning = document.querySelector(".warning"); // Hämta varningsmeddelandet
let completedCount = 0;
label.innerText = `${completedCount} completed`;

function updateListeners() {
    const items = document.querySelectorAll("ul li");
    items.forEach((item, index) => {
        const deleteBtn = item.querySelector(".deleteBtn");
        item.addEventListener("click", function (event) {
            if (event.target !== deleteBtn) {
                if (item.classList.contains("completed")) {
                    item.classList.remove("completed");
                    completedCount--;
                } else {
                    item.classList.add("completed");
                    completedCount++;
                }
                label.innerText = `${completedCount} completed`;
            }
        });
        deleteBtn.addEventListener("click", function () {
            item.remove();
            if (item.classList.contains("completed")) {
                completedCount--;
            }
            listedItems.splice(index, 1);
            label.innerText = `${completedCount} completed`;
        });
    });
}

// Lyssnare för "OK"-knappen
addText.addEventListener("click", function (e) {
    e.preventDefault();
    const input = document.querySelector("#input1");
    const text = input.value.trim();
    const list = document.querySelector("ul");

    // Kolla om input är tomt
    if (text !== "") {
        listedItems.push(text);

        // Skapa ett nytt listobjekt med animation-klassen
        const newListItem = document.createElement("li");
        newListItem.innerHTML = `
            <span>${text}</span>
            <button class="deleteBtn">🗑</button>
        `;
        newListItem.classList.add('animated-task'); // Lägg till animation

        // Lägg till det nya listobjektet till listan
        list.appendChild(newListItem);

        input.value = ""; // Rensa inputfältet
        warning.style.display = "none"; // Dölj varningen

        // Uppdatera lyssnare för att hantera nya objekt
        updateListeners();
    } else {
        // Visa varning om input är tomt
        warning.style.display = "block";
    }
});
