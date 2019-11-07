//泛型学习

//==精确类型
//明确指定类型
/*function identity(arg: number): number {
    return arg;
}*/

//使用any类型来定义函数：
//使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。
/*function identity(arg: any): any {
    return arg;
}*/

//正在泛型
//这里来使用泛型变量T。
//T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
function identity<T>(arg: T): T {
    return arg;
}

//==使用方法一
//传入所有的参数，包含类型参数
// let output = identity<string>("myString");  // type of output will be 'string'

//==使用方法二
//利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output = identity("myString");  // type of output will be 'string'

function testGenerics1() {
    alert(">>>>>>>>>" + output);
}

//=====泛型类型
//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity1;
//我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
// let myIdentity: <U>(arg: U) => U = identity;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数：
// let myIdentity: {<T>(arg: T): T} = identity;

function testGeneratics2() {
    alert(">>>>" + myIdentity(123));
    alert(">>>>" + identity1("abc"));
}

//======泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

// let myIdentity3: GenericIdentityFn<number> = identity3;
let myIdentity3: GenericIdentityFn<number> = identity3;

function testGenerics3() {
    alert(">>>>>>>>>" + myIdentity3(123));
}

//==========泛型类
//泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "aa";
stringNumeric.add = function(x, y) { return x + y; };

function testGenerics4() {
    alert(myGenericNumber.add(2,3))
    alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
}

//=============泛型约束
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }
//上面函数泛型没有约束，并不是每个T都有.length属性。
//下面添加上泛型约束，约束该泛型是某一类泛型。
interface Lengthwise {
    length: number;
}
//参数是类型Lengthwise
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3);  // Error, number doesn't have a .length property
// loggingIdentity({length: 10, value: 3});


//=======在泛型约束中使用类型参数
//你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }
//
// let x = { a: 1, b: 2, c: 3, d: 4 };
//
// getProperty(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

//==========在泛型里使用类类型
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
function create<T>(c: {new(): T; }): T {
    return new c();
}

//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
class BeeKeeper { //养蜂人
    hasMask: boolean;
}

class ZooKeeper { //动物园管理员
    nametag: string;
}

class Animal { //动物
    numLegs: number;
}

class Bee extends Animal { //蜜蜂
    keeper: BeeKeeper;
}

class Lion extends Animal { //狮子
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!