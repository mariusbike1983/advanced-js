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

function doFetchData(skip) {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/todos?limit=5&skip="+skip)
        .then(data => data.json())
        .then(json => resolve(json.todos))
        .catch(err => reject(err))
    });
}

function test2() {
    doFetchData(0)
    .then(todos => console.log(0, "todos", todos))
    .then(() => doFetchData(5))
    .then(todos => console.log(5, "todos", todos))
    .then(() => doFetchData(10))
    .then(todos => console.log(10, "todos", todos))
    .catch(err => console.log("err", err));
}

function test() {
    fetch("https://dummyjson.com/todos?limit=5&skip="+0)
    .then(data => data.json()) // data.json() returns a new promise, thus we chain it to the stack
    .then(json => console.log(skip, "todos", json.todos))

    .then(() => fetch("https://dummyjson.com/todos?limit=5&skip="+5))
    .then(data => data.json()) // data.json() returns a new promise, thus we chain it to the stack
    .then(json => console.log(skip, "todos", json.todos))

    .then(() => fetch("https://dummyjson.com/todos?limit=5&skip="+10))
    .then(data => data.json()) // data.json() returns a new promise, thus we chain it to the stack
    .then(json => console.log(skip, "todos", json.todos))

    .catch(err => console.log("err", err));
}

test2();