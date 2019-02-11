interface Shape {
    name: string,
    width: number,
    height: number,
    color?: string
}

function area_(shape: Shape) {
    const area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

console.log(area_({name: 'reatangle', width: 30, height: 15}));
console.log(area_({name: 'square', width: 30, height: 30, color: 'blue'}));

const shape = {
    name: 'reatangle',
    popup: function() {
        console.log('This inside popup(): ' + this.name);
        setTimeout(() => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        },3000);
    }
}

shape.popup();