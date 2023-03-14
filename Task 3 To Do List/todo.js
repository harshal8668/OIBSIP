function addtask(){
    if(document.getElementById('title').value.length==0 && document.getElementById('description').value.length==0){
        window.alert("Please Enter Title for a task and Description");
    }
    else if(document.getElementById('title').value.length==0){
        window.alert("Please Enter Title for a task");
    }
    else if(document.getElementById('description').value.length==0){
        window.alert("Please Enter Title for a Description");
    }
    else{
        
        document.querySelector('#newtask').innerHTML+=`
            <div class="list-container">
                <input onclick="mark_complete(this)" type="checkbox" name="check" id="check-box">
                <span id="added-title">
                    ${document.getElementById('title').value}
                </span>
                <span id="added-description">
                    ${document.getElementById('description').value}
                </span>
                <button id="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
                </button>
                <br>
            </div>
    
        `;

        var cur_task=document.querySelectorAll('#delete');
            for(var i=0;i<cur_task.length;i++){
                cur_task[i].onclick=function(){
                    this.parentNode.remove();
                }
            }       
    }      
}

function mark_complete(checkbox) {
    var taskTitle = checkbox.nextElementSibling;
    var taskDescription=taskTitle.nextElementSibling;
    if (checkbox.checked) {
      taskTitle.style.textDecoration = "line-through";
      taskDescription.style.textDecoration="line-through";
    } else {
      taskTitle.style.textDecoration = "none";
      taskDescription.style.textDecoration="none";
    }
}
  
function displayAll(){
    var tasks = document.querySelectorAll('.list-container');
    tasks.forEach(function(task) {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked || !checkbox.checked) {
            task.style.display = "grid";
        } 
        
      });
}
function displayComplete(){
    var tasks = document.querySelectorAll('.list-container');
    tasks.forEach(function(task) {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (!checkbox.checked) {
            task.style.display = "none";
        } 
      });
   
}
function displayPending(){
    var tasks = document.querySelectorAll('.list-container');
    tasks.forEach(function(task) {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            task.style.display = "none";
        } 
        if(!checkbox.checked){
            task.style.display = "grid";
        }
      });
}