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

//============
