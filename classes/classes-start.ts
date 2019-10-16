class Greeter {
    greeting: string; //成员变量

    //构造函数
    constructor(message: string) {
        this.greeting = message;
    }

    //函数
    greet() {
        return "Hello, " + this.greeting;
    }
}


// function showGreeter() {
//
//     //构造类的对象
//     let greeter = new Greeter("world");
//
//     alert(this.greeter.greeting);
//     alert(this.greeter)
// }