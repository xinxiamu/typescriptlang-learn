// interface ClockInterface {
//     currentTime: Date;
// }
//
// class Clock implements ClockInterface {
//     currentTime: Date = new Date();
//     constructor(h: number, m: number) { }
// }

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}