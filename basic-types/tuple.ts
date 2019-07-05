//元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同

//定义一对值为string和number类型的元组

//声明元组
let x:[string, number]

//赋值
x = ["zmt", 18]; //值要和定义的类型一致

//访问
function showTuple() {
    alert(x[0].substr(1)); //正确访问
    alert(x[1] > 18); //number，正确

    // x[3] = 'word';//当访问一个越界的元素，会使用联合类型替代：OK, 字符串可以赋值给(string | number)类型
    // alert(x[3]);
}