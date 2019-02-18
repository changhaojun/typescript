// Interface 用来定义对象的类型;
// 赋值的时候变量的形状必须和接口的形状保持一致;
function area_(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
console.log(area_({ name: 'reatangle', width: 30, height: 15 }));
console.log(area_({ name: 'square', width: 30, height: 30, color: 'blue' }));
var shaper = {
    name: 'reatangle',
    popup: function () {
        var _this = this;
        console.log("This inside popup(): " + this.name);
        setTimeout(function () {
            console.log("This inside setTimeout():  " + _this.name);
            console.log("I'm a  " + _this.name + " !");
        }, 3000);
    }
};
shaper.popup();
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
console.log(tom_);
