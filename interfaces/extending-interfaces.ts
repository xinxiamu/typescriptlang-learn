//和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
//继承接口(可继承多个接口)，同时继承接口的属性color。
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let square = <Square>{};//？啥子意思，这里。接口的一个实现吗
square.color = "blue";
square.sideLength = 10;
square.penWidth = 0.55;

function extending_test1() {
    alert(square.color);
    alert(square.sideLength);
    alert(square.penWidth);
}