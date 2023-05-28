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
            let err = true;
            if (!err) {
                const newTodo = { todo: 'Todo3' };
                todos.push(newTodo);
                resolve();
            } else {
                reject('Some error occured');
            }
        }, 2000);
    });
    
}

async function main() {
    try {
        document.getElementById('output').innerHTML = 'Loading some dummy data...';
        await createTodo();
        
        // use fetchAPI to make an HTTP request and load some todos
        document.getElementById('output').innerHTML = 'Loading some "real" todos...';
        const response = await fetch("https://dummyjson.com/todos?limit=5");
        const data = await response.json();
        todos.push(...data.todos);
        
        displayTodos();
    } catch(err) {
        document.getElementById('output').innerHTML = err;
    }
}

main();
