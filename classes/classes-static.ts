//类的静态属性

//静态属性属于类，类的所有实例共享

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        // debugger;
        let xDist = (point.x - Grid.origin.x);//引用静态属性
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

function showClassesStatic() {

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
}


