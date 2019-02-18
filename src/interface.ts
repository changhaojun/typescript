// Interface 用来定义对象的类型;
// 赋值的时候变量的形状必须和接口的形状保持一致;

interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function area_(shape: Shape): string {
    let area = shape.width * shape.height;
    return `I'm ${shape.name} with area ${area} cm squared`;
}
console.log(area_({name: 'reatangle', width: 30, height: 15}));
console.log(area_({name: 'square', width: 30, height: 30, color: 'blue'}));

const shaper = {
    name: 'reatangle',
    popup: function() {
        console.log(`This inside popup(): ${this.name}`);
        setTimeout(() => {
            console.log(`This inside setTimeout():  ${this.name}`);
            console.log(`I'm a  ${this.name} !`);
        },3000);
    }
}
shaper.popup();


// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}
const tom: Person = {
    name: 'Tom',
    gender: 'male'
};
tom.name = 'Lem';
tom.gender = 100;
console.log(tom);


// 只读属性 readonly    只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface Person_ {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom_: Person_ = {
    id: 1527,  // id一旦赋值再不能改变
    name: 'Tom',
    age: 23,
    gender: 'male'
}
console.log(tom_);




