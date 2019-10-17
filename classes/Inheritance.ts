//继承，扩展类

//例子

class Animal { //动物类
    move(distanceInMeters: number = 0) { //所有动物都会移动
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {//狗是一种动物,子类，继承属性和行为
    bark() { //狗叫
        console.log('Woof! Woof!');
    }
}


const dog = new Dog(); //构造一只狗的对象

function test1() {
    dog.bark();
    dog.move(10);
    dog.bark()
}

;

