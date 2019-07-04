let name1: string  = 'zhangmutian';//双引号，单引号都行
let age: number = 10;

function showString() {
    console.log(name1);
    let zmt: string = `我的名字: ${name1},年龄：${age}`;//模板字符串，反引号（`）
    alert(zmt);
}

