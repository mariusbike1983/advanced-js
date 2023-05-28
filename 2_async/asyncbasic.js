const todos = [
    { title: 'Todo1'},
    { title: 'Todo2'}
];

function displayTodos() {
    setTimeout(() => {
        let output = "";
        for(let i = 0; i<todos.length; i++) {
            const todo = todos[i];
            output += `<li>${todo.title}</li>`;
        }
    
        document.getElementById('output').innerHTML = output;
    }, 1000);
};

function createTodo(callback) {
    setTimeout(() => {
        const newTodo = { title: 'Todo3' };
        todos.push(newTodo);
        callback();
    }, 2000);
}

document.getElementById('output').innerHTML = 'Loading...';
createTodo(displayTodos);
//displayTodos();