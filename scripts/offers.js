const OffersDataURL = "./data/offers.json"

let active = 0

getOffersData()

//      Get DATA from OffersDataURL by fetch
async function getOffersData() {
    const response = await fetch(OffersDataURL);
    const data = await response.json();
    const OffersData = data.categories
    const Info = data.info

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
            changeTable(OffersData, Info)

    })
  })

//      Change table's data on load page
    changeTable(OffersData, Info)

}

//      Function - Change table content
let changeTable = (OffersData, Info)=> {

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