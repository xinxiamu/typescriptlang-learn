//========== 解构数组
let input = [1, 2];
let [first, second] = input; //这创建了2个命名变量 first 和 second。first = input[0];second = input[1];

function showArray() {
    console.log(first); // outputs 1
    console.log(second); // outputs 2
}

function showArray1([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

//用...语法创建剩余变量
function showArray2() {
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); //outputs 1
    console.log(rest); //outputs [ 2, 3, 4 ]
}

//元组解构
function tuple_destructuring() {
    let tuple: [number, string, boolean] = [7, "hello", true];
    let [a, b, c] = tuple; // a: number, b: string, c: boolean
    // let [a, b, c, d] = tuple; // Error, no element at index 3
    // let [a, ...bc] = tuple; // bc: [string, boolean]
    // let [a, b, c, ...d] = tuple; // d: [], the empty tuple
    // let [a] = tuple; // a: number
    // let [, b] = tuple; // b: string

    console.log(a);
    console.log(c);
}

//==========对象解构
function object_destructuring() {
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    // let { a, b } = o; //let a = o.a,let b=o.b
    // console.log(a);
    // console.log(b);

    let { a, ...passthrough } = o;
    let total = passthrough.b + passthrough.c.length;
    console.log(a);
    console.log(total);

    //把a重命名为newName1， b为newName2
    let { a: newName1, b: newName2 } = o;
    console.log(newName1);
    console.log(newName2);
}
