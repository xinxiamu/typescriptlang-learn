//继承，扩展类

//与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。

//在类中，成员变量、方法默认的修饰符都是public，公有。
//当类的成员被指定为私有private时候，该成员在类外部无法访问。

class Animal { //动物类
    name: string; //默认是public

    constructor(theName: string) { //构造函数
        this.name = theName;
    }

    move(distanceInMeters: number = 0) { //所有动物都会移动
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//狗是一种动物,子类，继承属性和行为
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    bark() { //狗叫
        console.log('Woof! Woof!');
    }
}

//蛇
class Snake extends Animal {
    //子类的构造函数必须调用super方法
    constructor(name: string) {
        super(name); //必须调用，否则编译时就报错
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

//马
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}


const dog = new Dog("狗-丁丁"); //构造一只狗的对象

function testDog() {
    dog.bark();
    dog.move(10);
    dog.bark()
}

function testAnimal(snakeName: string, horseName: string) {
    let snake = new Snake(snakeName);
    let horse: Animal = new Horse(horseName); //多态，调用的是实际的子类
    snake.move(10);
    horse.move(50);
}

//===============
//当成员被标记成 private时，它就不能在声明它的类的外部访问。
/*class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.*/

/////=========

/*class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino; //认为是同一类，所以兼容的
animal = employee; // 错误: Animal 与 Employee 不兼容.*/

//===============理解 protected
// protected成员在派生类中仍然可以访问。
/*class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误*/

//=======构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

/*class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.*/
