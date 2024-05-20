
function createTaskList(event){
   event.preventDefault();  // This will prevent the form from submitting in the traditional way, i.e., refreshing the page.

    const inputTask = document.getElementById('taskInput').value; // gets the value of the taskInput
    const deadlineInput = document.getElementById('deadlineInput').value; // get the value of the deadline

    const ul = document.getElementById('taskList');  // selects the ul element
    const li = document.createElement('li');  // creates a new li element

    li.textContent = `${inputTask} - Due By: ${deadlineInput}`; //tell the next line what to input
    ul.appendChild(li); // inputs the previous line

    document.getElementById('taskInput').value = ''; // clears the input after creation
    document.getElementById('deadlineInput').value = ''; // clears the due date after creation
}


document.getElementById('taskForm').addEventListener('submit', createTaskList); // listens for the submit button to be clicked then runs the createTaskList function. 
