var selectorLabel= document.querySelector("#searchLabel")

async function getEvents(){
   let response = await fetch("../styles/datos.json")
    let data = await response.json()
    let events = data.eventos
    let date = data.fechaActual
    
    return [events, date] 


}
const getJson = await getEvents()
var amazingEvents = getJson[0]
var actualDate = getJson[1]

// INTENTAR CREAR LOS CHECKBOX DINAMICOS
/* var unique = amazingEvents.map(eventos => eventos.name)
const dataArray = new Set(unique)
var names = [...dataArray]

var inputCheckbox = ""
names.forEach(name =>{
inputCheckbox += `<label class="micheckbox"><input type="checkbox" class="checkboxN" value="${name}">${name}<label>`
})
document.querySelector("#checkboxName")

//INTENTO CAPTURAR LOS EVENTOS DE LOS CHECKBOX
var checkbox = document.querySelectorAll(".checkboxN") //PREGUNTAR
checkbox.forEach( check => check.addEventListener("click",function(event){
    var checked = event.target.checked
    if (checked == true){
        checkboxSelected.push(event.target.value)
        dataCheck(checkboxSelected)
    }else{
        checkboxSelected = checkboxSelected.filter(uncheck => uncheck !== event.target.value)
        dataCheck(checkboxSelected)
    }
}))

amazingEvents() */
//INTENTO CREAR SELECT DINAMICO
 function selectEvent(event){
     var eventoSelect = event.target.value
     if(eventoSelect == "primera"){
         muestradeTarjetas(amazingEvents)
     }else{
         var select = amazingEvents.filter(card =>
            card.category === eventoSelect)
            muestradeTarjetas(select)
     }
 } 
 selectorLabel.addEventListener("change",selectEvent)

//INTENTO CREAR SEARCH
var inputSearch = document.querySelector("#searchInput")
inputSearch.addEventListener("keyup",search)

var data=[] 

function search(event){
    var val = event.target.value
    data = amazingEvents.filter(cards => cards.category.toLowerCase().includes(val.toLowerCase()))

   muestradeTarjetas(data)
   
}

var arraydeTarjetas=[]
var impresionHtml =document.getElementById("imprimir")

function muestradeTarjetas(arrayEventos){
    console.log(arrayEventos)
  
    if (arrayEventos && arrayEventos.length>0){
        arraydeTarjetas.push(...arrayEventos)
         console.log(arraydeTarjetas)
    }else{ 
        arraydeTarjetas.push(...amazingEvents)
        console.log(arraydeTarjetas)
         
    }
    console.log(arraydeTarjetas)
    impresionHtml.innerHTML=""

    arraydeTarjetas.map(cadaTarjeta =>{
        impresionHtml.innerHTML +=

        ` <div class="blog-card">
        <div class="meta">
          <h2>${cadaTarjeta.category}</h2>
          <h4>${cadaTarjeta.name}</h4>
          <img class="img-card" src="../Imagenes/Images/${cadaTarjeta.image}" alt="">
          <p class="date">${cadaTarjeta.date}, ${cadaTarjeta.place}</p>
          <p>${cadaTarjeta.price}</p>
          <button class="botonCard"><a href= "cards.html?id=${cadaTarjeta.id}">Ver Más</a></button>
        
        </div>
        </div> `

    })


arraydeTarjetas =[]
}
muestradeTarjetas()



