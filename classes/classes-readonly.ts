//readonly修饰符

// 只读属性必须在声明时或构造函数里被初始化。

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }

}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

//==============参数属性
//仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
/*class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}*/


