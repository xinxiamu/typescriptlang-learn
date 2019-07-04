interface Person {//接口
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "zhang", lastName: "mutian"};

document.body.innerHTML = greeter(user);
