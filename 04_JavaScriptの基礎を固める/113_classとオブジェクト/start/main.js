const obj = {
    first_name: 'ogawa',
    last_name: 'takeshi',
    printFullName: function() {
        console.log('hello');
    }
}

class MyObj {
    constructor() {
        this.first_name = 'ogawa';
        this.last_name = 'takeshi';
    }

    printFullName() {
        console.log(this.first_name + ' ' + this.last_name);
    }
}

const oga = new MyObj();

console.log(obj);
console.log(oga);
obj.printFullName(); // hello
oga.printFullName(); // ogawa takeshi