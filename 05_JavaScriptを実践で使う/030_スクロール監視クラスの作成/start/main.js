document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);// entry.targetはIntersectionObserverが監視している要素
                // Intersectionが監視対象とした要素を取得targetに格納される
                ta.animate();
                observer.unobserve(entry.target);
            } else {
                const ta = new TextAnimation(entry.target);
                ta.DOM.el.classList.remove('inview');
                // gsap.to(entry.target, .6, {
                //     ease: Back.easeOut,
                //     y: '-50%',
                //     opacity: 0
                // });
                // entry.target.classList.remove('inview');
            }
        });
    };
    const options = {
        root: null,// ビューポートを指定
        // root: document.querySelector('.scroll-container'),// スクロールコンテナを指定
        // rootMargin: "0px 0px -100% 0px",// ビューポートのマージンを指定
        rootMargin: "0px",
        threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});
