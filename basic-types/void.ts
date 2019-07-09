//和any类型相反，表示没有任何类型

function warnUser(): void{
    console.log("This is my warning message");
}

let unusable: void = undefined; //声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null