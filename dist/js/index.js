var show = true;
show = false;
var tom = {
    name: 'Tom',
    gender: 'male'
};
tom.name = 'Lem';
tom.gender = 100;
console.log(tom);
var tom_ = {
    id: 1527,
    name: 'Tom',
    age: 23,
    gender: 'male'
};
// 数组类型
var fibonacci = [1, 1, 2, 3, 5]; // 定义number类型的数组
var fibonacci_ = [1, '1', 2, 3, 5]; //number类型和string类型的联合类型数组
var list = ['Xcat Liu', 25, { id: 1365, addr: 'http://xcatliu.com' }]; //any类型的数组
// 函数类型
function sum(x, y) {
    return x + y;
}
var sum_ = function (x, y) {
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
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + " " + lastName;
}
var tomcat = buildName('Tom');
console.log(tomcat);
function buildName_(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + " " + lastName;
}
var tomcat_ = buildName_(undefined, 'Cat');
console.log(tomcat_);
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
    return array;
}
var a = [];
var arr = push([], 1, 2, 3); // [1, 2, 3]
console.log(arr);
// 类型断言     <Type>值
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
