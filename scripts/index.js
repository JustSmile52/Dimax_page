AOS.init();



function scrollToTop() {
    scrollTo({ top: 0, behavior: 'smooth' });
    console.log(document.body.clientHeight)
    console.log(document.body.scrollHeight)
    console.log(document.body.clientTop)
}
let btn = document.getElementById('scrollToTopBtn')
window.onscroll = function () {
    // console.log(scrollY)
    if (window.scrollY > 10) {
        btn.style.visibility = "visible";

    } else {
        btn.style.visibility = "hidden";
    }

}

