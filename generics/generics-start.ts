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
