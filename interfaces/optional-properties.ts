//接口可选参数学习。


interface SquareConfig {
    color?: string; //问号，避免空指针异常。可选参数
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare  = {color: "white", area: 100};
    if (config.color) { //如果color有值
        newSquare.color = config.color; //覆盖

        // Error: Property 'clor' does not exist on type 'SquareConfig'
        // newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width; //覆盖面积，面积=长*宽。正方形长=宽。
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
// let mySquare = createSquare({colorr: "black"} as SquareConfig); //使用断言绕开属性检查
function test1(config?: SquareConfig) {
    alert(`颜色${mySquare.color}，面积${mySquare.area}`);

    if (config) {
        let msq = createSquare(config);
        alert(`颜色${msq.color}，面积${msq.area}`);
    } else {
        console.log("没有传参数值")
    }

}

//额外属性检查
// error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare({ colour: "red", width: 100 });//接口不存在colour属性，检查不通过
//-----绕开这些检查，使用类型断言
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

//更好的方式是添加一个字符串索引签名
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [propName: string]: any;
// }
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);