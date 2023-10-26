
const replModule = require("repl");

function calculator(){
    console.log("Command Line calculator");
    console.log("enter your expression");

    const repl = replModule.start();

    repl.on("exit", ()=>{
        console.log("exiting the calculator");
    });
    repl.on("line", (line)=>{
        try {
            const result = eval(line);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log("error", error.message)
        }
    });
}

calculator();