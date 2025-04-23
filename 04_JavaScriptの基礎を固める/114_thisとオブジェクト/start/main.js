const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function() {
        console.log(this.first_name);
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn);// windowはブラウザが独自に用意したオブジェクト
    }
}

const window = {
    setTimeout: function(fn) {
        fn();// コールバック関数の中で呼び出されたthisはこのwindowを指す
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        
        window.setTimeout(function () {
            console.log(this);// これはwindowを指す
        })
    }
}

const window = {
    setTimeout: function(fn) {
        fn();// windowオブジェクトを指す
    }
}


const obj2 = new MyObj();


obj.printFullName();
obj2.printFullName();