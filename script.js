let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let dateInput = document.getElementById('dateInput');
let textArea = document.getElementById('textArea');
let msg = document.getElementById('msg');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');

form.addEventListener('submit', (e)=> {
   e.preventDefault();
   formValidation()

})

let formValidation = () =>{
    if(textInput.value === ''){
        msg.innerHTML = 'Input cannot be blank'
    }else {
         msg.innerHTML = '';
         acceptData()
         add.setAttribute("data-bs-dismiss", "modal");
         add.click();

         (()=>{
            add.setAttribute("data-bs-dismiss", "");
         })()
    }
}

let data = {};

let acceptData = () => {
   data['text'] = textInput.value;
   data['dateInput'] = dateInput.value;
   data['description'] = textArea.value;

   createTasks()
}

let createTasks = () => {
  tasks.innerHTML += `
   <div>
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.dateInput}</span>
          <p>${data.description}</p>

          <span class="options">
            <i data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onclick='deleteTask(this)' class="fas fa-trash-alt"></i>
          </span>
        </div>
  `

  resetForm();
}

let deleteTask = (e) => {
   e.parentElement.parentElement.remove();
}

let resetForm = () => {
   textInput.value = '';
   dateInput.value = '';
   textArea.value = '';
}



