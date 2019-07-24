function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };

function printLabeTest() {
    printLabel(myObj); //自动推断匹配lable属性
}

//=======把上面改造
interface LabelledValue { //接口
    label: string;
}
function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj1 = {size: 10, label: "Size 10 Object"};
function printLabel1Test() {
    printLabel1(myObj1);
}

