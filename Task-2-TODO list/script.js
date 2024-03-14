const add = document.querySelector(".add");
const toDo = document.querySelector(".to-do");
const input = document.querySelector("#input-text");

add.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please enter a task!");
    }
    else {
        let newElement = document.createElement("li");
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        toDo.appendChild(newElement);
        input.value = "";
        newElement.querySelector(".fa-trash").addEventListener("click", remove);
        function remove() {
            newElement.remove();
        }
    }
})