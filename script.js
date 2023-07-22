let input = document.querySelector(".js-input");
let add = document.querySelector(".add");

let ul = document.querySelector("ul");


function creatingList () {
    if(!input.value == ""){

        var btn = document.createElement("button");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value.trim()));

        li.onclick = () =>{
            li.classList.toggle("done")
        }
        btn.innerText = " X ";

        btn.onclick = () => {
            ul.removeChild(li);
        }
        
        li.appendChild(btn);
        ul.appendChild(li);
    
        input.value = "";
    }
}
 function ink(){
    if(event.key == 'Enter'){
        creatingList();
    }
 }

add.addEventListener("click",creatingList);
input.addEventListener("keypress",ink);