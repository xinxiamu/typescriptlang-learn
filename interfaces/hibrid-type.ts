//混合类型接口

//个对象可以同时做为函数和对象使用，并带有额外的属性

interface Counter {
    (start: number): string; //函数类型
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;