
const plus= document.getElementById("increase");
const minus = document.getElementById("decrease");
const reset = document.getElementById("reset");
const save = document.getElementById("save");
const load = document.getElementById("load");


let counter = 0;

plus.addEventListener("click", icreasecount)
minus.addEventListener("click", decreaseCount)
reset.addEventListener("click", resetCount)
save.addEventListener("click",savecount )
load.addEventListener("click",loadCount)

function updateCount() {
  document.getElementById("count").innerHTML = counter;
}

function icreasecount(){
    counter++;
    updateCount();
}
function decreaseCount(){
    
        counter--;
        updateCount();
    
    
}
function resetCount(){
    counter=0;
    updateCount();
}

function savecount(){
    localStorage.setItem("count" , counter)
}
function loadCount(){
    let saved=localStorage.getItem("count" , counter)
    if(saved!==""){
      counter=Number(saved);
    }
     updateCount();
}
