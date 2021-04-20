'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    todoRemove = document.querySelector('.todo-remove');

let todoData = [];



const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        
            li.innerHTML = '<span class="text-todo">' + item.value +'</span>' + 
                        '<div class="todo-buttons">' + 
                            '<button class="todo-remove"></button>' + 
                            '<button class="todo-complete"></button>' + 
                        '</div>';
        localStorage.setItem('toDo', JSON.stringify(todoData));
        if(item.completed){
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');
        btnTodoCompleted.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });

        const removeBtn = li.querySelector('.todo-remove');
        removeBtn.addEventListener('click', function() {
            const elem = todoData.indexOf(item);
            if (elem > -1) {
                todoData.splice(elem, 1);
                localStorage.setItem('toDo', JSON.stringify(todoData));
            }
            render();
        });
    });
};

if (localStorage.getItem('toDo')) {
    todoData = JSON.parse(localStorage.getItem('toDo'));
    render();
}

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false        
    };

    if(newTodo.value !== ''){
        todoData.push(newTodo);
        
    }

    if(headerInput.value !== ''){
    headerInput.value= "";
    }

    render();
});
