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
