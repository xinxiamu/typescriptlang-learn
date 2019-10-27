//抽象类

//类似于java的抽象类，抽象类不能被实例化，但可以继承。区别于接口，抽象类可以包含成员的实现细节。

abstract class Animal {
    abstract makeSound: void; //不包含实现，必须在派生类中实现。

    move(): void {
        console.log('roaming the earch...');
    }
}

abstract class Department {

    protected constructor(public name: string) {

    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department{

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

function show() {
    let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
}

///////////////////高级技巧-把类当作接口使用 start

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

///////////////////把类当作接口使用 end


