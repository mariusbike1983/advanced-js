function fetchData(skip, callbackResolve, callbackReject) {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.status === 200 && request.readyState === 4) {
            const json = JSON.parse(request.responseText);
            callbackResolve(json.todos);
        } else if (request.readyState === 4) {
            callbackReject('could not fetch data');
        }
    });
    request.open('GET', 'https://dummyjson.com/todos?limit=5&skip='+skip);
    request.send();
}

function main() {
    console.log("1");
    fetchData(0, data => {
        console.log(data);
        fetchData(5, data => {
           console.log(data);
           fetchData(10, data => {
                console.log(data);
           });
        });
    }, err => {
        console.log(err); 
    });
    console.log("2");
}

main();
