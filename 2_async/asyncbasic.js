const todos = [
    { title: 'Todo1'},
    { title: 'Todo2'}
];

function displayTodos() {
    setTimeout(() => {
        let output = "";
        todos.forEach(todo => {
            output += `<li>${todo.title}</li>`;
        })
        document.getElementById('output').innerHTML = output;
    }, 1000);
};

function createTodo(callback) {
    setTimeout(() => {
        todos.push({ title: 'Todo3' });
        if (callback) {
            callback();
        }
    }, 2000);
}

document.getElementById('output').innerHTML = 'Loading...';
// following code would not really work unless we syncronize the timeouts to make sure 
// that display is triggered AFTER create
    //createTodo();
    // displayTodos();

// by using callbacks we can safely "chain" the calls, without any need of timeout synchronization
createTodo(displayTodos);