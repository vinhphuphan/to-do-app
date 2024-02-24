var inputBox = document.getElementById("input-box"),
    todosList = document.getElementById("todos-list");


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!!");
    }
    else {
        let li = document.createElement("li"); 
        li.innerHTML = `<div class="task"><img class="task-image" src="images/unchecked.png">${inputBox.value}</div>`; // Set inner HTML of the <li> element
        let deleteButton = document.createElement("span")
        deleteButton.innerHTML = "\u00d7"
        deleteButton.className = "delete-btn"
        li.appendChild(deleteButton);
        todosList.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

todosList.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        // Toggle the image source between "checked.png" and "unchecked.png"
        if (event.target.src.includes("unchecked.png")) {
            event.target.src = "images/checked.png";
            event.target.parentElement.classList.add("checked")
        } else {
            event.target.src = "images/unchecked.png";
            event.target.parentElement.classList.remove("checked")
        }
        
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", todosList.innerHTML);
}
function showData() {
    todosList.innerHTML = localStorage.getItem("data");
}
showData();