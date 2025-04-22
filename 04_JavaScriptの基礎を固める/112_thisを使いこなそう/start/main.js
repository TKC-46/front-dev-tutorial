
// thisは直近のオブジェクトを参照する
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    


    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.btanimate.bind(ta));// btanimateのthisにTextAnimationのインスタンスを渡す
});

class TextAnimation {
    constructor(el) {
        // thisはTextAnimationのインスタンスを指すtaやta2
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    btanimate() {
        console.log(this);// taのインスタンス
        this.el.classList.toggle('inview');
    }

    animate() {
        // このthisはTextAnimationのインスタンスを指すwindowオブジェクトのスコープにないため
        console.log(this);
        window.setTimeout(function () {// windowオブジェクトは省略可能
            console.log(this);// この this:はwindowオブジェクトを参照する
            this.el.classList.toggle('inview');
        }.bind(this));// windowのthisを渡すこのメソッドを呼び出したインスタンスを参照できる
        
    }

    // もう一つのthisの使い方
    animate2() {
        // 定数を使ってthisを参照する
        const _that = this;
        window.setTimeout(function () {
            console.log(_that);// _that:TextAnimationのインスタンスを格納している
            _that.el.classList.toggle('inview');
        });
        
    }
}
