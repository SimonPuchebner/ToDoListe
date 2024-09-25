function add(){
    let div = document.createElement("div");
    div.style.backgroundColor= "lightgrey";

    let input = document.getElementById("text").textContent;
    input.setAttribute("class","textInBox");
    
    let checkb = document.createElement("input");
    checkb.setAttribute("type","checkbox");


    let button = document.createElement("button");
    button.setAttribute("class","button");
    button.addEventListener('click', function(){
        input.setAttribute("class","delText");
        div.style.backgroundColor= "darkgrey";
    })
    button.textContent = "Fertig";

    div.appendChild(checkb);
    div.appendChild(input);
    div.appendChild(button);    
    
}