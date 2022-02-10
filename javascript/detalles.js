



async function getEvents(){
   let response = await fetch("../styles/datos.json")
    let data = await response.json()
    let events = data.eventos
    let date = data.fechaActual
    var id =location.search.split("?id=").filter(Number)
    var idNumber= Number(id[0]) 
    console.log(idNumber)
    var html= events.filter(event => event.id == idNumber )
    var printHtml = 
    ` <div class="blog-card">
    <div class="meta">
      <h2>${html[0].category}</h2>
      <h4>${html[0].name}</h4>
      <img class="img-card" src="../Imagenes/Images/${html[0].image}" alt="">
      <p class="date">${html[0].date}, ${html[0].place}</p>
      <p>USD${html[0].price}</p>
    
    </div>
    </div> `
    document.getElementById("imprimir").innerHTML = printHtml
    console.log(events)
    console.log(html)
    return [events, date, idNumber] 


}
const getJson = await getEvents()
var amazingEvents = getJson[0]
var actualDate = getJson[1]
var id= getJson[2]





/* var arraydeTarjetas=[]
var impresionHtml =document.getElementById("imprimir")

function muestradeTarjetas(arrayEventos){
    console.log(arrayEventos)
  

    arraydeTarjetas.map(html =>{
        impresionHtml.innerHTML +=

        ` <div class="blog-card">
        <div class="meta">
          <h2>${html.category}</h2>
          <h4>${html.name}</h4>
          <img class="img-card" src="../Imagenes/Images/${html.image}" alt="">
          <p class="date">${html.date}, ${html.place}</p>
          <p>${html.price}</p>
        
        </div>
        </div> `

    })


arraydeTarjetas =[]
}
muestradeTarjetas()
 */
