window.onload = function() {
    loadItems();
};

function add() {
    let textValue = document.getElementById("text").value;
    if (textValue.trim() === "") return; 

    let div = createItem(textValue, "red"); 
    let append = document.querySelector('#items');
    append.appendChild(div);

    saveItems(); 
}

function createItem(content, color) {
    let div = document.createElement("div");
    div.style.backgroundColor = color || "red";
    div.setAttribute("height", "50px");
    div.setAttribute("width", "50px");

    let button = document.createElement("button");
    button.setAttribute("class", "button");
    button.textContent = "Fertig";
    button.addEventListener('click', function() {
        div.style.backgroundColor = "green";
        saveItems();
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen"; 
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.addEventListener('click', function() {
        div.remove(); 
        saveItems(); 
    });

    let text = document.createElement("div");
    text.innerHTML = content;
    text.style.backgroundColor = "white";

    div.appendChild(text);
    div.appendChild(button);
    div.appendChild(deleteButton);

    return div;
}
function saveItems() {
    let items = document.querySelectorAll('#items > div');
    let itemList = [];

    items.forEach((item) => {
        let content = item.firstChild.innerHTML; 
        let color = item.style.backgroundColor; 
        itemList.push({ content: content, color: color });
    });

    localStorage.setItem('toDoItems', JSON.stringify(itemList));
}

function loadItems() {
    let savedItems = localStorage.getItem('toDoItems');

    if (savedItems) {
        let itemList = JSON.parse(savedItems);
        let append = document.querySelector('#items');

        itemList.forEach((itemData) => {
            let div = createItem(itemData.content, itemData.color); 
            append.appendChild(div);
        });
    }
}