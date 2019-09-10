//可索引类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];

function indexable_test1() {
    alert(myStr);
}

//-----------------------
//typeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

//正确方式
interface NotOkay {
    [x: number]: Dog; //数字索引的返回值必须是字符串索引返回值类型的子类型
    [x: string]: Animal;
}

//------------------------------
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;    // ok, length is a number
//     name: string;      // error, the type of 'name' is not a subtype of the indexer
// }

// interface NumberOrStringDictionary {
//     [index: string]: number | string;
//     length: number;    // ok, length is a number
//     name: string;      // ok, name is a string
// }


//-------------只读索引
// interface ReadonlyStringArray {
// //     readonly [index: number]: string;
// // }
// // let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// // myArray[2] = "Mallory"; // error! //只读的，不可赋值
