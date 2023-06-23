
this.greeting = "Hi! Testing function context";
console.log("outside before function: ", this.greeting);
const obj1 = {
    myParam: "Test Function Param",
    myFunction: function testFunctionContext() {
        console.log(">> ", this.myParam);
        console.log("inside function, step1: ", this.greeting);
        this.greeting = "Hello! This is the function context";
        console.log("inside function, step2: ", this.greeting);
    }
}
obj1.myFunction();
console.log("outside after function: ", this.greeting);

delete this.greeting;
console.log('');

this.greeting = "Hi! Testing arrow function context";
console.log("outside before arrow function: ", this.greeting);
const obj2 = {
    myParam: "Test Arrow Function Param",
    myFunction: () => {
        console.log(">> ", this.myParam);
        console.log("inside arrow function, step1: ", this.greeting);
        this.greeting = "Hello! This is the arrow function context";
        console.log("inside arrow function, step2: ", this.greeting);   
    }
}

obj2.myFunction();
console.log("outside after arrow function: ", this.greeting);