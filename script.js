window.onload = function() {
    loadItems();
};
function add() {
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.setAttribute("height", "50px");
    div.setAttribute("width", "50px");
    let button = document.createElement("button");
    button.setAttribute("class", "button");
    button.addEventListener('click', function() {
        div.style.backgroundColor = "green";
        saveItems(); 
    });
    button.textContent = "Fertig";

    let text = document.createElement("div");
    text.innerHTML = document.getElementById("text").value;
    text.style.backgroundColor = "white";

    div.appendChild(text);
    div.appendChild(button);

    let append = document.querySelector('#items');
    append.appendChild(div);

    saveItems();
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
            let div = document.createElement("div");
            div.style.backgroundColor = itemData.color || "red"; 
            div.setAttribute("height", "50px");
            div.setAttribute("width", "50px");

            let button = document.createElement("button");
            button.setAttribute("class", "button");
            button.addEventListener('click', function() {
                div.style.backgroundColor = "green";
                saveItems();
            });
            button.textContent = "Fertig";

            let text = document.createElement("div");
            text.innerHTML = itemData.content;
            text.style.backgroundColor = "white";

            div.appendChild(text);
            div.appendChild(button);
            append.appendChild(div);
        });
    }
}
