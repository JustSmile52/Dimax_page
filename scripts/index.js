AOS.init();


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(document.body.clientHeight)
    console.log(document.body.scrollHeight)
    console.log(document.body.clientTop)
}
function changeSectionPros(x) {
    let title, content, photo;
    if (x == "niezawodnie") {
        title = "Jesteśmy niezawodni";
        content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend neque eget mi finibus elementum. Maecenas dictum efficitur turpis, commodo volutpat nulla malesuada eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut egestas erat quis blandit consequat. Duis non libero arcu"
        photo = "https://picsum.photos/id/0/600/400"
        document.getElementById('sectionButton1').style.backgroundColor = "#efefef"
        document.getElementById('sectionButton3').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#63b2e3"
    } else if (x == "szybko") {
        title = "Jesteśmy szybcy i wściekli";
        content = "Lorem Ipsum is Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummys been the industry's standard dummy s been the industry's standard dummy s been the industry's standard dummy text ever since the 1500s"
        photo = "https://picsum.photos/id/1/600/400"
        document.getElementById('sectionButton1').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#efefef"
        document.getElementById('sectionButton3').style.backgroundColor = "#63b2e3"
    } else {
        title = "Nasze bloki są zajebiste";
        content = " Duis ac dolor lacus. Maecenas lobortis sit amet nisi vel fermentum. Aliquam risus metus, vestibulum vitae accumsan non, condimentum vitae lacus. Ut fermentum eros quis ligula volutpat, nec aliquet justo fringilla. Suspendisse potenti. Proin accumsan pulvinar viverra. Duis urna metus, in"
        photo = "https://picsum.photos/id/2/600/400"
        document.getElementById('sectionButton1').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton3').style.backgroundColor = "#efefef"
    }
    document.getElementById('sectionProsTitle').innerText = title
    document.getElementById('sectionProsContent').innerText = content
    document.getElementById('sectionProsPhoto').src = photo
}
let btn = document.getElementById('scrollToTopBtn')
window.onscroll = function () {
    console.log(scrollY)
    if (window.scrollY > 10) {
        btn.style.visibility = "visible";

    } else {
        btn.style.visibility = "hidden";
    }
}

