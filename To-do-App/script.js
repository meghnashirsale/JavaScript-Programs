// const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputBox2 =document.getElementById("input-box")
function addTask(){
        if(inputBox2.value === '')
        {
                alert("You must write something!");
        }
        else
        {
            let li = document.createElement("li");
            li.innerHTML = inputBox2.value;
            listContainer.appendChild(li);
        }
}