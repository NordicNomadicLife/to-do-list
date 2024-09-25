
const addText = document.querySelector("#addText");
const clearAllBtn = document.querySelector("#clearAll");
const listedItems = [];
const label = document.querySelector("p");
let completedCount = 0;
label.innerText = `${completedCount} completed`;

function updateListeners() {
    const items = document.querySelectorAll("ul li");
    items.forEach((item, index) => {
        const deleteBtn = item.querySelector(".delete-btn");
        item.addEventListener("click", function (event) {
            if (event.target !== deleteBtn) {
                if (item.classList.contains("completed")) {
                    item.classList.remove("completed");
                    completedCount--;
                    console.log("Uppgift avmarkerad:", listedItems[index]);
                } else {
                    item.classList.add("completed");
                    completedCount++;
                    console.log("Uppgift markerad som klar:", listedItems[index]);
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
addText.addEventListener("click", function (e) {
    e.preventDefault();
    const input = document.querySelector("#input1");
    const text = input.value.trim();
    const list = document.querySelector("ul");

    if (text !== "" && text !== "This field cannot be empty") {
        listedItems.push(text);

        list.innerHTML += `
            <li>
                <span>${text}</span>
                <button class="delete-btn">🗑</button>
            </li>`;

        input.value = "";

        updateListeners();
    } else {
        input.value = "This field cannot be empty";
        setTimeout(() => {
            input.value = "";
        }, 2500);
    }
});
clearAllBtn.addEventListener("click", function () {
    const list = document.querySelector("ul");
    list.innerHTML = "";
    listedItems.length = 0;
    completedCount = 0;
    label.innerText = `${completedCount} completed`;
});