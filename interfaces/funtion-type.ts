//函数类型接口
interface SearchFunc  {
    (source: string, subString: string): boolean; //函数类型，接收一个函数作为属性
}

// let  mySearch: SearchFunc;
// mySearch = function (src: string, sub: string): boolean {
//     let result = src.search(sub);
//     alert(result);
//     return result > -1;
// }

//--更加简洁方式，系统会自动推断类型。因为函数赋值给了SearchFunc，所以会自动推断参数类型和返回值。
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    alert(result);
    return result > -1;
}