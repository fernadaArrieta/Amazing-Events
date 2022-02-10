var fechaActual = []
var futuros = []
var Val = []
var category = []
var arrayCategory = []

async function capturaJSON(){
    await fetch("../styles/datos.json")  
    .then (response => response.json())
    .then (json => Val.push(json))
    fechaActual.push(Val[0].fechaActual)
    console.log(fechaActual)
    futuros.push(...Val[0].eventos.filter(fecha=> fecha.date > fechaActual))
    
    
    category.push(...futuros.map(category => category.category))
    var clearCategory = new Set(category)
    arrayCategory = [...clearCategory]

  


    updateDisplay(futuros)
}
   
    


capturaJSON()


function updateDisplay(filtrado){
    var toDisplay = []
    if (filtrado == undefined){
        toDisplay.push(...futuros)
    } else {
        toDisplay.push(...filtrado)
    }
    var html = ""
    toDisplay.map(evento =>{
        html +=
        ` <div class="blog-card">
        <div class="meta">
          <h2>${evento.category}</h2>
          <h4>${evento.name}</h4>
          <img class="img-card" src="../Imagenes/Images/${evento.image}" alt="">
          <p class="date">${evento.date}, ${evento.place}</p>
          <p>${evento.price}</p>
        
        </div>
        </div> `

        document.querySelector("#imprimir").innerHTML = html 
    })
}





