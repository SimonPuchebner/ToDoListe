function add(){
    let div = document.createElement("div");
    div.style.backgroundColor= "red";
    div.setAttribute("height","50px");
    div.setAttribute("width","50px");
   
    let button = document.createElement("button");
    button.setAttribute("class","button");
    button.addEventListener('click', function(){
        div.style.backgroundColor= "green";
    })
    button.textContent = "Fertig";
 
    let text = document.createElement("div");
    text.innerHTML = document.getElementById("text").value;
    text.style.backgroundColor = "white";
 
    div.appendChild(text);
    div.appendChild(button);    
    console.log(div)
   
    let append = document.querySelector('#items');
    append.appendChild(div);
}