// enum Color {Red, Green, Blue} //定义枚举，默认从0开始为元素编号

// enum Color {Red = 1, Green, Blue} //手动设置编号
enum Color {Red = 1, Green = 2, Blue = 4}  //全部手动设置编号

let c: Color = Color.Red;
let c1: string = Color[4];

function showEnum() {
    alert(c);
    alert(c1);
}