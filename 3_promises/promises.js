function fetchTodos(url) {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.status === 200 && request.readyState === 4) {
                const json = JSON.parse(request.responseText);
                resolve(json.todos);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        });
        request.open('GET', url);
        request.send();
    });
    return promise;
}

function test() {    
    fetch("https://dummyjson.com/todos?limit=5")
    .then(data => data.json()) // data.json() returns a new promise, thus we chain it to the stack
    .then(json => console.log("todos", json.todos))
    .catch(err => console.log("err", err));
}

function testErr() {
    fetchTodos("https://dummyjson.com/todoss?limit=5") // invalid URL, will throw an error
    .then(data => data.json())
    .then(todos => console.log("todos", todos))
    .catch(err => console.log("err", err));
}

test();
testErr();