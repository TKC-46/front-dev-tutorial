
function hello(callback, nickname) {
    console.log(callback);// getfirstNameのogawaが入っている
    console.log("hello" + callback(nickname));// ()を使って関数を実行
}

// jsにおいて関数は変数としても扱える
function getFirstName() {
    return "ogawa";
}

// 変数に明示的に関数を代入することもできる
const getName = function() {
    return "ogawa takeshi";
}

hello(getFirstName);// 変数として関数を渡す
hello(getName);


hello(function(name) {
    return "nickname" + name;
}, 'TCK');
// 上記のように無名関数を渡すこともできる
// ただし、無名関数は再利用できないので、あまり使わない


// アロー関数で表記
hello(() => "ogawa takeshi");



function doSomething(a, b, callback) {
    console.log("do something");
    const result = callback(a, b);// multiply || plus関数を実行
    console.log(result);
}
// マルチプライ
function multiply(a, b) {
    return a * b;
}

function plus(a, b) {
    return a + b;
}

doSomething(2, 3, multiply);
doSomething(2, 3, plus);