const addText = document.querySelector("#addText");
const clearAllBtn = document.querySelector("#clearAll");
const listedItems = [];
const label = document.querySelector("p");
let completedCount = 0;

label.innerText = `${completedCount} completed`;


addText.addEventListener("click", function (e) {
    e.preventDefault(); 
    const input = document.querySelector("#input1");
    const text = input.value.trim();
    const list = document.querySelector("ul");

    if (text !== "" && text !== "This field cannot be empty") {
        listedItems.push(text);
        const item = document.createElement("li");
        list.appendChild(item);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;
        item.appendChild(itemLabel);

        
        item.addEventListener("click", function () {
            if (item.classList.contains("completed")) {
                item.classList.remove("completed"); 
                completedCount--; 
                console.log("Uppgift avmarkerad:", text); 
            } else {
                item.classList.add("completed"); 
                completedCount++; 
                console.log("Uppgift markerad som klar:", text); 
            }

            label.innerText = `${completedCount} completed`; 
        });

        input.value = ""; 
        
        input.value = "This field cannot be empty";
        setTimeout(() => {
            input.value = "";
        }, 2500);
    }
});

/
clearAllBtn.addEventListener("click", function () {
    const list = document.querySelector("ul");
    list.innerHTML = ""; 
    listedItems.length = 0; 
    completedCount = 0; 
    label.innerText = `${completedCount} completed`; 
});
