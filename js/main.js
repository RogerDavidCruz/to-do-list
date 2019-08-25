//Declairing variables from DOM to control the functions to each respective Button
document.querySelector("#addTask").onclick = addTaskToList;
document.querySelector("#clearComplete").onclick = clearComplete
document.querySelector("#clearAll").onclick = clearList
let count = 0; //Represents Onclick starting point

document.querySelector("form").addEventListener("submit",function(e){
  let item = document.querySelector("#taskGen").value;
  e.preventDefault()  //stops refreshing page
  if (item == ""){
    alert ("Please add a task")
  }else {
    addTaskToList()
    document.querySelector("#taskGen").value = ""
  }
})

function addTaskToList(){
  let item = document.querySelector("#taskGen").value
  let ul = document.querySelector("#toDoTasks")
  let textNode = document.createTextNode(item)
  let li = document.createElement("li")
  //input value, if string empty , alert
  if (item == ""){
    alert ("Please add a task")
  }else {
    li.appendChild(textNode)
    //appendChild causes text to become child of the ul element
    ul.appendChild(li)
    count++
    document.querySelector("#taskGen").value = ""
    document.querySelector("#activeTasks").innerHTML = count
}
}

let ul = document.querySelector("#toDoTasks")
ul.addEventListener("click",function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("clearCompleted")
    let completedNumber = document.getElementsByClassName("clearCompleted").length
    let totalNumber = count - completedNumber
    document.querySelector("#activeTasks").innerHTML = totalNumber
  }
})

function clearList (){
  ul.innerHTML = ""
  count = 0
  document.querySelector("#activeTasks").innerHTML = count
}

function clearComplete(){
  let completed = ul.querySelectorAll(".clearCompleted")
  completed.forEach(function(li){
    count--
    ul.removeChild(li)
    document.querySelector("#activeTasks").innerHTML = count;
  })
}
