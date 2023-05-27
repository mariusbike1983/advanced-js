function callWithParams(test) {
    test("A", "B");
}

function callWithoutParams(test) {
    test();
}

function callWithReturn(test) {
    let value = test();
    console.log("with Return", value);
}

function main() {
    // arrow function calling
    callWithoutParams(() => console.log("without Params"));
    // standard way, function calling
    callWithoutParams(function() { 
        console.log("without Params");
    })

    // standard way, function calling
    callWithParams(function(param1, param2) { 
        console.log("with params", param1, param2);
    });
    // arrow function calling
    callWithParams((param1, param2) => console.log("with params", param1, param2));

    callWithReturn(() => { return "A" });
    callWithReturn(() => "B" );
    callWithReturn(function() {
        return "AB";
    });
}

main();