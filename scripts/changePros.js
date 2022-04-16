const data = [
    {
        "name":"Część teoretyczna",
        "content1":"Skłąda się na nią 30 jednostek lekcyjnych czyli każda po 45 minut. <br>Obejmuje:",
        "table":[
            "przepisy ruchu drogowego",
            "zasady bezpiecznego poruszania się po drodze", 
            "zasady postępowania w przypadku uczestniczenia w wypadku drogowym oraz zasady udzielania pierwszej pomocy",
            "Szkolenie prowadzone jest przez ratownika medycznego"
        ],
        "content2":null,
        "photoURL": "https://picsum.photos/id/0/600/400"
    },
    {
        "name":"Część praktyczna",
        "content1":"Skłąda się na nią 30 jednostek lekcyjnych <br>Obejmuje:",
        "table":[
            "wykonywanie podstawowych czynności kontrolno – obsługowych pojazdu",
            "szkolenie na placu manewrowym", 
            "jazdy w obszarze zabudowanym i poza nim",
        ],
        "content2":null,
        "photoURL": "https://picsum.photos/id/1/600/400"
    },
    {
        "name":"Egzamin wewnętrzny",
        "content1":"Po ukończeniu szkolenia przeprowadzany jest egzamin wewnętrzny na identycznych zasadach co egzamin państwowy. <br>Obejmuje dwie części:",
        "table":[
            "teoretyczną",
            "praktyczną", 
        ],
        "content2":"Po ukończeniu kursu Ośrodek Szkolenia aktualizuje Profil Kandydata na Kierowcę . Od tego momentu należy udać się do Wojewódzkiego Ośrodka Ruchu Drogowego ( WORD) ,aby zapisać się na egzamin państwowy.",
        "photoURL": "https://picsum.photos/id/1/600/400"
    },
]
const contentDiv = document.getElementById("sectionProsContent")
let activePros = 0


function changeSectionPros(x) {
    let contentHTML = ""

    if (x == 0) {
        document.getElementById('sectionButton1').style.backgroundColor = "#efefef"
        document.getElementById('sectionButton3').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#63b2e3"
    } else if (x == 1) {
        document.getElementById('sectionButton1').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#efefef"
        document.getElementById('sectionButton3').style.backgroundColor = "#63b2e3"
    } else if (x == 2) {
        document.getElementById('sectionButton1').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton2').style.backgroundColor = "#63b2e3"
        document.getElementById('sectionButton3').style.backgroundColor = "#efefef"
    }
    activePros = x

    contentHTML += `<h3 class="text-center display-6 py-3">${data[activePros].name}</h3>`
    contentHTML += `<div class="px-3">`
    contentHTML += `<p>${data[activePros].content1}</p>`
    contentHTML += `<ul class="fa-ul">`
    data[activePros].table.forEach((item,idx)=>{
        contentHTML += `<li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>${data[activePros].table[idx]}</li>`
    })
    contentHTML += `</ul>`
    if(data[activePros].content2!=null) contentHTML += `<p>${data[activePros].content2}</p>`
    contentHTML += `</div>`
    console.log(contentDiv)
    contentDiv.innerHTML = contentHTML
}


changeSectionPros(activePros)

