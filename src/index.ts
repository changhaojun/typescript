// 基本类型的批注是number,string,boolean; 动态类型的结构是any;

let show: boolean = true;
show = false;

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
let tom_: Person = {
    id: 1527,  // id一旦赋值再不能改变
    name: 'Tom',
    age: 23,
    gender: 'male'
};

// 数组类型
let fibonacci: number[] = [1, 1, 2, 3, 5]; // 定义number类型的数组
let fibonacci_: (number | string)[] = [1, '1', 2, 3, 5]; //number类型和string类型的联合类型数组
let list: any[] = ['Xcat Liu', 25, {id: 1365, addr: 'http://xcatliu.com'}] //any类型的数组

// 函数类型
function sum(x: number, y: number): number { // 函数声明
    return x + y;
}
let sum_: (x: number, y: number) => number = function(x: number, y: number): number { // 函数表达式
    return x + y;
}
function sum__(x: number, y?: number): number { // 可选参数     可选参数必须在必需参数后面
    if(y) {
        return x + y;
    }else {
        return x;
    }
}
function buildName(firstName: string, lastName: string = 'Cat'): string { // 参数默认值     
    return `${firstName} ${lastName}`;
}
let tomcat = buildName('Tom');
console.log(tomcat);

function buildName_(firstName: string = 'Tom', lastName: string) {
    return `${firstName} ${lastName}`;
}
let tomcat_ = buildName_(undefined,'Cat');
console.log(tomcat_);

function push(array: any[], ...items: any[]) { // 剩余参数      rest参数只能是最后一个参数
    items.forEach(function(item) {
        array.push(item);
    });
    return array;
}
let a:any = [];
const arr = push([], 1, 2, 3); // [1, 2, 3]
console.log(arr);


// 类型断言     <Type>值
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

// 定义函数无返回值 void
function test(): void { 
    console.log(1000);
}

const username: string = 'Gener';
let senten: string = `Hello my name 
is ${username}`
console.log(senten);







