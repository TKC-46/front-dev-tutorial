document.addEventListener('DOMContentLoaded', function () {

    const cb = function(el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
    // so.destroy();


    const els = document.querySelectorAll('.animate-title');
    // const cb = function(entries, observer) {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             const ta = new TextAnimation(entry.target);
    //             ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
                
    //         }
    //     });
    //     // alert('intersecting');
    // }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => {
        io.observe(el);
    })
});


class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        // defaultOptionsとoptionsをマージ
        // するためにObject.assignを使用
        // Object.assignは第一引数にマージ先のオブジェクトを指定する
        // 第二引数にマージ元のオブジェクトを指定する
        // ここではdefaultOptionsをマージ先にしている
        // optionsをマージ元にしている
        // つまり、optionsが優先される
        // ただし、optionsがundefinedの場合はdefaultOptionsを使用する
        this.options = Object.assign(defaultOptions, options);
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if(this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        }

        this.io = new IntersectionObserver(callback.bind(this), this.options);

        
        this.els.forEachA(el => this.io.observe(el));
    }

    destroy() {
            this.io.disconnect();
    }
}