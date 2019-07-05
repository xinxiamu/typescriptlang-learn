//数组

//两种方式定义数组

let  list: number[] = [1, 2, 3]; //方式一
let list1: Array<number> = [4, 5, 6]; //方式二,使用数组泛型，Array<元素类型>

function showArrays() {
    alert(list.toString());
    alert(list1.length);
}

