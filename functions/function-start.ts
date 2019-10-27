//可以创建有名字的函数和匿名函数

//===为函数定义类型

//有名字函数，返回类型为number
function add(x: number, y: number): number {
    return x + y;
}

//匿名函数,函数结果作为值赋值。
let myAdd = function (x: number, y: number): number {
    return x + y;
}

//====书写完整的函数类型
//第一步是参数类型：(x: number, y: number) => number
//第二部分是返回值类型。
// 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
let myAdd1: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
//函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
let myAdd2: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };
//只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。



function showFunction() {
    console.log(myAdd1(1,2));
    console.log(myAdd2(3,4));
}

