console.log(typeof test);
test();

function test() {
    console.log(">> Inside hoisted function");
}

console.log(typeof testArrow);
testArrow();

var testArrow = () => {
    console.log("Inside hoisted arrow function");
}