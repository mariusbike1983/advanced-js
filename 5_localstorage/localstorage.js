const loadData = async () => {
    let todosData = localStorage.getItem("todos");
    let todos = null;
    if (!todosData) {
        const resp = await fetch("https://dummyjson.com/todos?limit=5&skip=0");
        const json = await resp.json();
        todos = json.todos;
        localStorage.setItem("todos", JSON.stringify(todos));
    } else {
        todos = JSON.parse(todosData);
    }
    return todos;
}

const changeLocalStorage = () => {
    let todosData = localStorage.getItem("todos");
    if (!todosData) return;
    let todos = JSON.parse(todosData);
    todos.forEach(todo => {
        todo.todo = "From localstorage: "+todo.todo;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

const test = async () => {
    changeLocalStorage();
    const todos = await loadData();
    let output = "";
    todos.forEach(todo => {
        output += `<li>${todo.todo}</li>`;
    });
    document.getElementById("output").innerHTML = output;
}

test();