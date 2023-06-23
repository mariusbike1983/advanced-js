const test1 = (a, b) => { a+b };
console.log("test1", test1(1,2));

const test2 = (a, b) => a+b;
console.log("test2", test2(1,2));

const test3 = (a, b) => { return a+b };
console.log("test3", test3(1,2));

function fTest1(a, b) {
    a+b;
}

console.log("fTest1", fTest1(1,2));
function fTest2(a, b) {
   return a+b;
}

console.log("fTest2", fTest2(1,2));
