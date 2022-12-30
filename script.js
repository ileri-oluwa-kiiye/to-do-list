let addTaskButton = document.getElementById("addTask")
let newTask = document.querySelector("#taske")
let editButton = document.getElementsByClassName("edit-button")
let deleteButton = document.getElementsByClassName("delete")
let input = document.getElementsByClassName("task")
let ul = document.getElementsByTagName("ul")[0]




function addTask() {
    let newTaskValue = newTask.value
    if(newTaskValue != ""){
        newTask.value = "";
        const li = document.createElement("li");

        let addInput = document.createElement("input")
        addInput.type = "text"
        addInput.classList.add("task")
        addInput.value = newTaskValue
        addInput.setAttribute("readonly", "readonly")
        
        const span1 = document.createElement("span")
        span1.classList.add("edit-button")
        span1.innerHTML = "Edit"

        const span2 = document.createElement("span")
        span2.classList.add("delete")
        span2.innerHTML = "Delete"


        li.appendChild(addInput)
        li.appendChild(span1)
        li.appendChild(span2)

        ul.appendChild(li)

        span2.addEventListener("click", () =>{
            span2.parentElement.style.display='none';
        })
        span1.addEventListener("click", ()=>{
            if (span1.innerHTML !== "Save"){
                addInput.removeAttribute("readonly");
                addInput.focus()
                span1.innerHTML= "Save"
            }
            else{
                addInput.setAttribute("readonly", "readonly")
                span1.innerHTML= "Edit"
            }
        })
    }

    else if(newTaskValue == ""){
        alert("Please add a task")
    }
}





addTaskButton.addEventListener("click", addTask)