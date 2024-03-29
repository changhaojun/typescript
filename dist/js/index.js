// 如果定义的时候没有赋值,不管之后有没有赋值，都会被推断为any类型而完全不被类型检查;
// 基本类型的批注是number,string,boolean; 动态类型的结构是any;
// typescript用Interface定义对象的类型;
var show = true;
show = false;
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
var tomcat = buildName('Tom', 'xx');
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
var arr = push(a, 1, 2, 3); // [1, 2, 3]
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
// 定义函数无返回值 void
function test() {
    console.log(1000);
}
var username = 'Gener';
var senten = "Hello my name \nis " + username;
console.log(senten);
var anyThing = 'hello';
console.log(anyThing.myName);
