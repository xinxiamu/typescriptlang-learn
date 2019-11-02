//函数的可选参数和默认参数

//===正常情况下，TypeScript的函数参数都是必须的。
//Javascript中，可以不传参数，不传则为undefined。
function buildName(firstName: string, lastName: string) {
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right


//=========TypeScript中函数参数可选
//参数后面添加?号，就能实现可选。可选参数必须放在必须参数的后面。
function buildName1(firstName: string, lastName?: string) {
    if (lastName) //lastName有值的话
        return firstName + " " + lastName;
    else
        return firstName;
}

let result4 = buildName1("Bob");  // works correctly now
// let result5 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
let result6 = buildName1("Bob", "Adams");  // ah, just right

function showTest1() {
    alert(`>>>>>>>>可选参数${result4}`);
    alert(`>>>>>>>>可选参数${result6}`);
}

//============默认参数 start
//参数lastName设定默认值，当没传该值或者传undefined的时候，会用默认值。
//在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result7 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let result8 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
// let result9 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result10 = buildName2("Bob", "Adams");         // ah, just right

//与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 例如，我们重写最后一个例子，让 firstName是带默认值的参数：

function buildName3(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

// let result11 = buildName("Bob");                  // error, too few parameters
// let result12 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result13 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
let result14 = buildName(undefined, "Adams");     // okay and returns "Will Adams"

//============默认参数 end

//===========剩余参数 start
//类似java中的
//剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。
function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;

function showTest2() {
    
}

//===========剩余参数 end