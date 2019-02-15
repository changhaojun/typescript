var Test = /** @class */ (function () {
    function Test(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = 'pink';
    }
    Test.prototype.shotout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Test;
}());
var square = new Test('square', 30, 30);
console.log(square.shotout());
console.log(square.area);
console.log(square.name);
