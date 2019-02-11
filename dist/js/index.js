let show = true;
show = false;
let tom = {
    name: 'Tom',
    gender: 'male'
};
tom.name = 'Lem';
let tom_ = {
    id: 1527,
    name: 'Tom',
    age: 23,
    gender: 'male'
};
// 数组类型
let fibonacci = [1, 1, 2, 3, 5]; // 定义number类型的数组
let fibonacci_ = [1, '1', 2, 3, 5]; //number类型和string类型的联合类型数组
let list = ['Xcat Liu', 25, { id: 1365, addr: 'http://xcatliu.com' }]; //any类型的数组
// 函数类型
function sum(x, y) {
    return x + y;
}
let sum_ = function (x, y) {
    return x + y;
};
function sum__(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
function buildName(firstName, lastName = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom');
function buildName_(firstName = 'Tom', lastName) {
    return firstName + ' ' + lastName;
}
let tomcat_ = buildName_(undefined, 'Cat');
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}
let a = [];
push(a, 1, 2, 3); // [1, 2, 3]
// 类型断言     <Type>值
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
