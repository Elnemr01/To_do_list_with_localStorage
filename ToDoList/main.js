
let tasks=document.querySelector(".tasks");
let submit=document.querySelector(".add");
let input=document.querySelector(".input");

let tasksArray=[];


getDataOnReload();
submit.addEventListener("click",handleAdding);

tasks.addEventListener("click",(eve)=> {
    if(eve.target.classList.contains("delete")) {
        eve.target.parentElement.remove();
        if(tasks.innerHTML==="") tasks.style.opacity="0";
    }
})

// ------------ handle Adding button---------//

function handleAdding () {
    
    if(input.value!=="") {
        tasks.style.opacity="1";
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
    // add tasks cotent to array and push all tasks into page and local storage
    tasksArray.push(task);
    addTasksIntoPage(tasksArray);
    addTasksTolocalStorage(tasksArray);
}

// ------------ Adding Tasks into page----------------//

function addTasksIntoPage (tasksArray) {
    tasks.innerHTML="";
    // create task div
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

// ------------ Adding Tasks into local Storage----------------//

function addTasksTolocalStorage (tasksArray) {
    localStorage.setItem("tasks",JSON.stringify(tasksArray));
}

// ------------ Adding Tasks into page on reload----------------//

function getDataOnReload () {
    let data=localStorage.getItem("tasks");
    if(data) {
        tasksArray=JSON.parse(data);
        tasks.style.opacity="1";
        addTasksIntoPage(tasksArray);
    }
    else {
        tasks.style.opacity="0";
    }
}