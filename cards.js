//Create an HTML page that contains a text area and a button labeled Create.

//When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.

//When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let create = document.getElementById("create");
let input = document.getElementById("input");
let output = document.getElementById("output");
//let deleteBtn = document.createElement("button");

create.addEventListener("click", function(){
    document.getElementById("output").innerHTML = input.value;
    newBtn();
    newDiv();

    

});




function newBtn () {
    let deleteBtn = document.createElement("button");
    let box = document.createTextNode("Delete");
    deleteBtn.appendChild(box);
    document.body.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", remove);


}

function newDiv () {
    let newDiv = document.createElement("div");
    newDiv.id = "divBox";
    newDiv.innerHTML = "made div";
    newDiv.style.height = "150px";
    newDiv.style.width = "500px";
    newDiv.style.backgroundColor = "red";
    document.body.appendChild(newDiv);
}

function remove(event) {
    let div = document.getElementById("divBox");
    document.body.removeChild(div);
}



