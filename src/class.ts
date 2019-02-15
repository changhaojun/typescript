class Test {
    area: number;
    private color: string; // private只能在类中使用

    constructor(public name: string, width: number, height: number) { //public可以在任何地方访问
        this.area = width * height;
        this.color = 'pink';
    }   

    shotout() {
        return `I'm ${this.color} ${this.name} with an area of ${this.area} cm squared.`;
    }
}
const square = new Test('square', 30, 30);
console.log(square.shotout());
console.log(square.area);
console.log(square.name);