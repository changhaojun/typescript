for (var i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() { 
            // console.log(i); 
        }, 100 * i);
    })(i);
}


const a = 0.2 + 0.1;
console.log(a);
// string number boolean undefined null 


const v = [1,2,3,4,5];
const max = Math.max.apply(null, v);
console.log(max);
const max_ = Math.max(...v);
console.log(max_);


const obj = {
    color: 'blue'
}
window.color = 'red';
function getColor(a) {
    console.log(this.color + '-' + a);
}
getColor(1);
getColor.apply(obj, [2]);
getColor.call(obj, 3);
getColor.apply(this, [4]);

console.log([] instanceof Object);