 // the same function from the previous lesson. We will use it and exemplify the aync-await mechanism
function testBefore() {
    console.log("1"); 
    fetch("https://dummyjson.com/todos?limit=5")
    .then(data => data.json()) // data.json() returns a new promise, thus we chain it to the stack
    .then(json => console.log("todos", json.todos))
    .catch(err => console.log("err", err));
    console.log("2");
}

async function test() {
    console.log("1");
    const promise = await fetch("https://dummyjson.com/todos?limit=5");
    const json = await promise.json();
    console.log(json.todos);
    console.log("2");
}
console.log("0");
test();
console.log("3");