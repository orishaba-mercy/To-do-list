// let input =document.querySelector(`.list`)
// let addBtn =document.querySelector(`.add-list`)
// let tasks =document.querySelector(`.tasks`)
// //add btn disabled
// input.addEventListener("keyup"()=>{
//     if(input.value.trim() i==0){
//         addBtn.classlist.add('active')
//     }else{
//         addBtn.classlist.remove('active')  
//     }
// })
// addBtn.addEventListener('click')
const addListButton = document.querySelector('.add-list');
const inputField = document.querySelector('.list');
const tasksContainer = document.querySelector('.tasks');

//Add event listener to the Add button
addListButton.addEventListener('click', () => {
  const taskText = inputField.value;
  
  if (taskText !== '') {
    // Create a new task item
    const taskItem = document.createElement('div');
    taskItem.classList.add('items');
    
    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;
    
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('items-btn');
    
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-sharp', 'fa-solid', 'fa-pen-to-square');
    editIcon.addEventListener('click', () => {
      // Implement the edit functionality here
      console.log('Edit task:', taskText);
    });
    
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-xmark');
    deleteIcon.addEventListener('click', () => {
      // Implement the delete functionality here
      console.log('Delete task:', taskText);
    });
    
    // Append elements to the task item
    taskButtons.appendChild(editIcon);
    taskButtons.appendChild(deleteIcon);
    
    taskItem.appendChild(taskParagraph);
    taskItem.appendChild(taskButtons);
    
    // Append the task item to the tasks container
    tasksContainer.appendChild(taskItem);
    
    // Clear the input field
    inputField.value = '';
  }
});


//
// addListButton.addEventListener('click', () => {
//   // ...

//   // Create a new task item
//   const taskItem = document.createElement('div');
//   taskItem.classList.add('items');

//   // ...

//   // Add event listener to mark a task as completed
//   taskParagraph.addEventListener('click', () => {
//     taskItem.classList.toggle('completed');
//   });

//   // ...
// });

// addListButton.addEventListener('click', () => {
//   // ...

//   if (taskText !== '') {
//     // Create a new task item
//     const taskItem = document.createElement('div');
//     taskItem.classList.add('items');

//     // ...

//     // Set data attribute for user ID
//     taskItem.setAttribute('data-user-id', userID);

//     // ...

//     // Clear the input field
//     inputField.value = '';
//   }
// });

// deleteIcon.addEventListener('click', () => {
//   // Remove the task item from the tasks container
//   taskItem.remove();
// });