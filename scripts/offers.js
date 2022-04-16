const OffersData = 
        [
        {
            "name":"B",
            "courses":[
                {
                    "name":"podstwawowy",
                    "cost":"2500",
                    "time": "8-9 tygodni"
                },
                {
                    "name":"przyspieszony",
                    "cost":"2500",
                    "time": "6-7 tygodni"
                },
                {
                    "name":"rozszerzony",
                    "cost":"2800",
                    "time": "35 godzin"
                },
                {
                    "name":"",
                    "cost":"3200",
                    "time": "40 godzin"
                }
            ],
            "description":[
                "30 h zajęć teoretycznych",
                "30 h zajęć praktycznych",
                "Egzamin wewnętrzny teoretyczny i  praktyczny",
                "Materiały szkoleniowe",
                "Samochód Hyundai i20 taki jak na egzaminie"
            ],
            "other":[
                {
                    "name":"Jazdy doszkalające <br>dla kursantów naszego ośrodka",
                    "cost":"90",
                    "time": "1 godzina"
                },
                {
                    "name":"Jazdy doszkalające <br>dla kursantów z innych ośrodków",
                    "cost":"95",
                    "time": "1 godzina"
                },
                {
                    "name":"Podwyższenie z kat B1 na kat. B",
                    "cost":"unkown",
                    "time": ""
                }
            ]
        },
        {
            "name":"A1 (od 16 roku życia)",
            "courses":[
                {
                    "name":"podstwawowy",
                    "cost":"2200"
                },
                {
                    "name":"przyspieszony (15 dni)",
                    "cost":"2400"
                }
            ],
            "description":[
                "30 h zajęć teoretycznych",
                "20 h zajęć praktycznych",
                "Egzamin wewnętrzny teoretyczny i  praktyczny",
                "Motocykl YBR 125 CUSTOM taki jak na egzaminie"
            ],
            "other":[
                {
                    "name":"Jazdy doszkalające (1 godzina)",
                    "cost":"110"
                },
                {
                    "name":"Podwyższenie z kat. A1 na kat. A2",
                    "cost":"Unkown"
                },
                {
                    "name":"Podwyższenie z kat. A2 na kat. A",
                    "cost":"Unkown"
                }
            ]
        },
        {
            "name":"A2 (od 18 roku życia)",
            "courses":[
                {
                    "name":"podstwawowy",
                    "cost":"2400"
                },
                {
                    "name":"przyspieszony (15 dni)",
                    "cost":"2650"
                }
            ],
            "description":[
                "30 h zajęć teoretycznych",
                "20 h zajęć praktycznych",
                "Egzamin wewnętrzny teoretyczny i  praktyczny",
                "Motocykl YAMAHA MT 07 35 KW"
            ],
            "other":[
                {
                    "name":"Jazdy doszkalające (1 godzina)",
                    "cost":"110"
                },
                {
                    "name":"Podwyższenie z kat. A1 na kat. A2",
                    "cost":"Unkown"
                },
                {
                    "name":"Podwyższenie z kat. A2 na kat. A",
                    "cost":"Unkown"
                }
            ]
        },
        {
            "name":"A (od 24 roku życia)",
            "courses":[
                {
                    "name":"podstwawowy",
                    "cost":"2400"
                },
                {
                    "name":"przyspieszony (15 dni)",
                    "cost":"2650"
                }
            ],
            "description":[
                "30 h zajęć teoretycznych",
                "20 h zajęć praktycznych",
                "Egzamin wewnętrzny teoretyczny i  praktyczny",
                "Motocykl YAMAHA MT 07 powyżej 35 KW"
            ],
            "other":[
                {
                    "name":"Jazdy doszkalające (1 godzina)",
                    "cost":"110"
                },
                {
                    "name":"Podwyższenie z kat. A1 na kat. A2",
                    "cost":"Unkown"
                },
                {
                    "name":"Podwyższenie z kat. A2 na kat. A",
                    "cost":"Unkown"
                }
            ]
        }
        ]

const Info = [
    "Zmiany terminu umówionych jazd można dokonać najpóźniej 24 godziny przed jazdą. Brak odwołania w wymaganym terminie lub nie przybycie na umówioną jazdę powoduje naliczenie dodatkowych kosztów 1h – 50zł",
    "Płatność za godziny jazd lub wybrane pakiety należy dokonać w ustalonym terminie przelewem lub gotówką w biurze ośrodka."
]

    
let active = 0

//      Get DATA from OffersDataURL by fetch
function getOffersData() {

//      Change active category element
    document.querySelectorAll('.pricing-list-elem').forEach((item, index) => {
        item.addEventListener('click', event => {
            event.currentTarget.classList.add("active")
            document.querySelectorAll('.pricing-list-elem').forEach(item => {
                if(item!=event.currentTarget ) item.classList.remove("active")
            })
            active = index
            console.log(event.currentTarget)

//      Change table's data after change active category element
            changeTable()

    })
  })

//      Change table's data on load page
    changeTable()

}

//      Function - Change table content
let changeTable = ()=> {

//      Change Header
    document.getElementById("categoryName").innerText = `Kategoria ${OffersData[active].name}`

//      Table content
    let categoryContent = ''
//      Create table
    categoryContent+='<table class="table table-light">'
    categoryContent+='<thead class="thead-primary">'
//      Header "Kursy"
    categoryContent+='<tr class="thead-light">'
    categoryContent+='<th class="text-center" colspan="3"><spam class="fs-5">Kursy</spam></th>'
    categoryContent+='</tr>'
//      Headers of table from JSON
    categoryContent+='<tr><th scope="col"></th>'
    if (Object.keys(OffersData[active].courses[0]).length == 3)
        categoryContent+='<th scope="col">Czas trwania</th>'
    categoryContent+='<th scope="col">Cena</th></tr>'
//      Courses from JSON
    categoryContent+='</tr></thead><tbody>'
    OffersData[active].courses.forEach((course)=>{
        if(course.name !="")
            categoryContent+=`<tr><th scope="row" class="px-4">Kurs ${course.name}</th>`
        else
            categoryContent+=`<tr><th scope="row" class="px-4">${course.name}</th>`
        if (Object.keys(OffersData[active].courses[0]).length == 3)    
            categoryContent+=`<td>${course.time}</td>`
        categoryContent+=`<td>${course.cost} zł</td></tr>`
    })
//      Header "Inne"
    categoryContent+='<tr class="thead-light">'
    categoryContent+='<th class="text-center" colspan="3"><spam class="fs-5">Inne</spam></th>'
    categoryContent+='</tr>'
//      Others from JSON
    OffersData[active].other.forEach((other)=>{
        categoryContent+=`<tr><th scope="row" class="px-4">${other.name}</th>`
        if (Object.keys(OffersData[active].courses[0]).length == 3)
            categoryContent+=`<td>${other.time}</td>`
        if(other.cost !="")
            categoryContent+=`<td>${other.cost} zł</td></tr>`
        else
            categoryContent+=`<td>${other.cost}</td></tr>`
    })
//      Header "Kursy obejmują"
    categoryContent+='<tr class="thead-light">'
    categoryContent+='<th class="text-center" colspan="3"><spam class="fs-5">Kursy obejmują</spam></th>'
    categoryContent+='</tr>'
//      Description from JSON
    OffersData[active].description.forEach((item)=>{
        categoryContent+=`<tr><td colspan="3"><i class="fa-solid fa-arrow-right px-4"></i>`    
        categoryContent+=`${item}</td></tr>`
    })
//      Empty row
    categoryContent+='<tr><td class="text-center py-4" colspan="3"></td></tr>'
//      Additionaly Info from JSON
    Info.forEach((info)=>{
        categoryContent+='<tr class="thead-light">'
        categoryContent+=`<th class="px-4" colspan="3">${info}</th></tr>`
    })
//      Close table
    categoryContent+='</tbody></table>'

//      Add categoryContent to div
    document.getElementById("categoryContent").innerHTML = categoryContent
}

getOffersData()
