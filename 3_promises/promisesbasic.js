const todos = [
    { todo: 'Todo1'},
    { todo: 'Todo2'}
];

function displayTodos() {
    setTimeout(() => {
        let output = "";
        for(let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            output += `<li>${todo.todo}</li>`;
        }
        document.getElementById('output').innerHTML = output;
    }, 1000);
};

function createTodo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = false;
            if (!err) {
                const newTodo = { todo: 'Todo3' };
                todos.push(newTodo);
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
    
}

document.getElementById('output').innerHTML = 'Loading...';
createTodo()
    .then(displayTodos)
    .catch(err => console.log(err));

// use fetchAPI to make an HTTP request and load some todos
document.getElementById('output').innerHTML = 'Loading some "real" todos...';
fetch("https://dummyjson.com/todos?limit=5")
    .then(res => res.json())
    .then(data => todos.push(...data.todos))
    .catch(err => console.log(err));