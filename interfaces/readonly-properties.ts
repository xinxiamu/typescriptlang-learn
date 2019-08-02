//一些对象属性只能在对象刚创建时候赋值，赋值后就不能再修改，能读，不能写。
interface Point {
    readonly x: number;
    readonly y: number;
}

//创建对象后，属性不能更改值。
// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

//TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!  //不能赋值到普通数组

//可以用类型断言重写，重新改成一个新的可赋值的值。
// let b = ro as number[];
// b[0] = 6;

//readonly vs const
//最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。
