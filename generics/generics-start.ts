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
