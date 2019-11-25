//接口的类类型学习


// interface ClockInterface {
//     currentTime: Date;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) { }
// }

//=========实现接口
interface ClockInterface {
    currentTime: Date; //接口属性
    setTime(d: Date): void; //接口方法
}
class Clock implements ClockInterface {
    currentTime: Date;
    //实现方法
    setTime(d: Date) {
        this.currentTime = d;
    }

    show() {
        alert(this.currentTime);
    };

    constructor(h: number, m: number) { }
}
let clock: Clock = new Clock(2,3);
function class_type_test() {
    clock.setTime(new Date());
    clock.show();
}

//=========类静态部分与实例部分的区别===========//

//当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误
/*
interface ClockConstructor {
    new (hour: number, minute: number);
}

//错误，不可实现。
class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}*/
//这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

//======正确方式
//因为createClock的第一个参数是ClockConstructor类型，在createClock(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名。
// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
//
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
//
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }
//
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
//
// function class_type_test1() {
//     digital.tick();
//     analog.tick();
// }

//另外一种方式，使用表达式
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }
//
// interface ClockInterface {
//     tick();
// }
//
// const Clock: ClockConstructor = class Clock implements ClockInterface {
//     constructor(h: number, m: number) {}
//     tick() {
//         console.log("beep beep" + this.h);
//     }
// }
//
// function class_type_test2() {
//     new Clock(3,4).tick();
// }
