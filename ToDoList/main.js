
let tasks=document.querySelector(".tasks");
let submit=document.querySelector(".add");
let input=document.querySelector(".input");

let inTasks=false;
let tasksArray=[];





submit.addEventListener("click",handleAdding);

// ------------ handle Adding button---------//

function handleAdding () {
    if(!inTasks && input.value!=="") {
        tasks.style.opacity="1";
        inTasks=true;
    }

    if(input.value!=="") {
        addTaskToArray(input.value);
        input.value="";
    }
}

// ------------ Adding Tasks----------------//

function addTaskToArray (taskText) {
    let task={
        id: Date.now(),
        completed : false,
        content: taskText,
    }

    tasksArray.push(task);
    addTasksIntoPage(tasksArray);
}


function addTasksIntoPage (tasksArray) {
    tasks.innerHTML="";

    tasksArray.forEach(task => {
        let div=document.createElement("div");
        div.className="task";

        if(task.completed) div.classList.add("done");

        div.setAttribute("data-id",task.id);
        div.innerHTML=`
                <div class="content">${task.content}</div>
                <span class="delete">delete</span>`;

        tasks.append(div);
        
    });

}