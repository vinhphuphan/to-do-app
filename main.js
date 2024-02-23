var inputBox = document.getElementById("input-box"),
    todosList = document.getElementById("todos-list");


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!!");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
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
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
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