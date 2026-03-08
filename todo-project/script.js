function addTask(){

let input=document.getElementById("taskInput");

let li=document.createElement("li");

li.innerHTML=input.value + " <button onclick='deleteTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

input.value="";
}

function deleteTask(btn){
btn.parentElement.remove();
}