const userContainer = document.getElementById('todolist');
const getUsers = async (userId) => {
  const response = await fetch(`https://dummyjson.com/todos?limit=20&userId=${userId}`);
  const data = await response.json();
  return data.todos;
};
const displayUsers = async (userId) => {
  const users = await getUsers(userId);
  console.log(users);
  if (Array.isArray(users)) {
    users.forEach(item => {
      let div = document.createElement('div');
      let userName = document.createElement('input');
      let ids = document.createElement('span');
      let checkbox = document.createElement('input');
      let icon = document.createElement('i');
      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      icon.classList.add('fa', 'fa-x');
      ids.appendChild(icon);
      userName.value = item.todo;
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          userName.style.textDecoration = 'line-through';
        } else {
          userName.style.textDecoration = 'none';
        }
      });
      
      icon.addEventListener('click', () => {
        deleteUser(item.id);
        div.remove();
      });
    
      div.appendChild(checkbox);
      div.appendChild(userName);
      div.appendChild(ids);
      div.setAttribute('key', item.id);
      div.setAttribute('class', 'people');
      userContainer.appendChild(div);
    });
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/${userId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.log(error);
  }
};

const userId = 1;
displayUsers(userId);

const adding = document.getElementById('forms');
adding.addEventListener('submit', event => {
  event.preventDefault();
  const taskInput = document.getElementById('form');
  const newTask = taskInput.value;
  taskInput.value = '';
  if (newTask) {
    const div = document.createElement('div');
    const userName = document.createElement('input');
    const ids = document.createElement('span');
    const checkbox = document.createElement('input');
    const icon = document.createElement('i');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    icon.classList.add('fa', 'fa-trash');
    ids.appendChild(icon);
    userName.value = newTask;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        userName.style.textDecoration = 'line-through';
      } else {
        userName.style.textDecoration = 'none';
      }
    });

  

    icon.addEventListener('click', () => {
      div.remove();
    });
    div.appendChild(checkbox);
    div.appendChild(userName);
    div.appendChild(ids);
    div.setAttribute('key', Date.now());
    div.setAttribute('class', 'people');
    userContainer.prepend(div);
  }
});





// const addListButton = document.querySelector('.add-list');
// const inputField = document.querySelector('.list');
// const tasksContainer = document.querySelector('.tasks');


// function createTaskItem(taskText) {
//   const taskItem = document.createElement('div');
//   taskItem.classList.add('items');
  
//   const taskParagraph = document.createElement('p');
//   taskParagraph.textContent = taskText;
  
//   const taskButtons = document.createElement('div');
//   taskButtons.classList.add('items-btn');
  
//   const editIcon = document.createElement('i');
//   editIcon.classList.add('fas', 'fa-pen');
//   editIcon.addEventListener('click', () => {
    
//     const editInput = document.createElement('input');
//     editInput.type = 'text';
//     editInput.value = taskParagraph.textContent;
//     editInput.classList.add('edit-input');
    
//     editInput.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
      
//         taskParagraph.textContent = editInput.value;
//         taskItem.removeChild(editInput);
//       }
//     });
    
//     taskItem.replaceChild(editInput, taskParagraph);
//     editInput.focus();
//   });
  
//   const deleteIcon = document.createElement('i');
//   deleteIcon.classList.add('fas', 'fa-trash');
//   deleteIcon.addEventListener('click', () => {
  
//     console.log('Delete task:', taskText);
//     tasksContainer.removeChild(taskItem);
//   });
  

//   taskButtons.appendChild(editIcon);
//   taskButtons.appendChild(deleteIcon);
  
//   taskItem.appendChild(taskParagraph);
//   taskItem.appendChild(taskButtons);
  
//   return taskItem;
// }


// addListButton.addEventListener('click', () => {
//   const taskText = inputField.value;
  
//   if (taskText !== '') {
  
//     const taskItem = createTaskItem(taskText);
    
    
//     tasksContainer.appendChild(taskItem);
    
   
//     inputField.value = '';
//   }
// });


// document.getElementById('add-user').addEventListener('submit',async function(event){
//   event.preventDefault();
  
//   let firstName=document.getElementById('first-name').value;
//   let lastName=document.getElementById('last-name').value;
//   let age=document.getElementById('age').value;

//   let data={
//       firstName:firstName,
//       lastName:lastName,
//       age:age,
//   }
//   console.log({data});
// let result= await fetch('https://dummyjson.com/users/add',{
//   method:'POST',
//   headers:{
//       'content-Type':'application/json'
//   },
//   body:JSON.stringify(data)
  

// })
// .then(response=>response.json())
// .then(response=>response)
// .catch(error=>error.message)


// console.log({result});
// let success=document.getElementById('success');
// result.id? success.innerHTML='user added successfully':success.innerHTMLHTML='user not added';

// })
// const userId = 1;

// fetch('https://dummyjson.com/todos')
//   .then(response => response.json())
//   .then(data => {
   
//     const filteredTodos = data.filter(todo => todo.userId === userId);

    
//     const todoList = document.querySelector('.todo-list');

//     filteredTodos.forEach(todo => {
//       const todoItem = document.createElement('div');
//       todoItem.classList.add('todo-item');

//       const todoTitle = document.createElement('h3');
//       todoTitle.textContent = todo.title;

//       todoItem.appendChild(todoTitle);
//       todoList.appendChild(todoItem);
//     });
//   })
//   .catch(error => console.error('Error fetching todos:', error));


