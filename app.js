(function() {
  
  document.getElementById('addBtn').addEventListener('click', function(){
    var li = document.createElement("LI");
    var nameH4 = document.createElement("H4");
    var descriptionP = document.createElement("P");
    
    var removeButton = document.createElement("BUTTON");
    removeButton.setAttribute('type' , 'button');
    removeButton.innerText = "Remove";
    removeButton.classList.add('btn', 'btn-danger')
        // Bind the 'this' keyword in the deleteTask function to the <li>
    removeButton.addEventListener('click' , removeItem.bind(li));
    
    var moveUpButton = document.createElement("BUTTON");
    moveUpButton.setAttribute('type', 'button');
    moveUpButton.innerText = "Move UP";
    moveUpButton.classList.add('btn', 'btn-info')
    // Bind the 'this' keyword in the moveUp function to the <li>
    moveUpButton.addEventListener('click', moveUp.bind(li));
    
    var moveDownButton = document.createElement("BUTTON");
    moveDownButton.setAttribute('type', 'button');
    moveDownButton.innerText = "Move DOWN";
    moveDownButton.classList.add('btn', 'btn-success')
    // Bind the 'this' keyword in the moveDown function to the <li>
    moveDownButton.addEventListener('click', moveDown.bind(li));
    
    var taskName = document.getElementById('taskName');
    var taskDescription = document.getElementById('taskDescription');
    
    var taskList = document.getElementById('taskList');
    
    li.classList.add("list-group-item");
    
    nameH4.innerText = taskName.value;
    descriptionP.innerText = taskDescription.value;
    
    nameH4.classList.add('list-group-item-heading');
    descriptionP.classList.add('list-group-item-text');
    
    li.appendChild(nameH4);
    li.appendChild(descriptionP);
    li.appendChild(removeButton);
    li.appendChild(moveUpButton);
    li.appendChild(moveDownButton);
    
    li.addEventListener('mouseover', function() {
        li.classList.add('active');
    });
    
    li.addEventListener('mouseout' , function () {
        li.classList.remove('active');
    })
    
    taskList.appendChild(li);
    
  })
  
  function removeItem(event){
    event.target.parentNode.remove();
  }
  
  function moveUp(event){
    // var taskList = document.getElementById('taskList');
    // var listItem = event.target.parentNode;
    // var previousItem = this.previousElementSibling;
    
    // if(previousItem){
    //   taskList.insertBefore(listItem, previousItem);
    //   taskList.insertBefore(this, previousItem);
    // }
    if(this.previousElementSibling){
      // taskList.insertBefore(listItem, previousItem);
      this.parentNode.insertBefore(this, this.previousElementSibling);
    }
  }
  
  
  function moveDown(event){
    // var taskList = document.getElementById('taskList');
    // // var listItem = event.target.parentNode;
    // var nextItem = this.nextElementSibling; 
    
    // if(nextItem){
    //   taskList.insertBefore(nextItem, listItem);
    //   taskList.insertBefore(nextItem, this);
    // }
    
    if(this.nextElementSibling){
      this.parentNode.insertBefore(this.nextElementSibling, this);
    }
  }
  
//   function moveUp(event) {
//   var upping = document.getElementById('taskList');
//   upping.insertBefore(this.parentNode, event.target.parentNode.previousElementSibling); 
// }

// function moveDown(event) {
//   var downing = document.getElementById('taskList');
//   downing.insertBefore(event.target.parentNode.nextElementSibling, this.parentNode); 
// }
  
})();