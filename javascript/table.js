
 //Creo una variable para guardar mis objetos del json"fecha actual y eventos"
var eventos= [] //creo una variable para traer mi  de eventos
var promedio = [] //contiene los promedios
var categorias =[] //contiene las categorias
var ingreso =[] //contiene los ingresos
var asistencia=[] //contendra la asistencia
var capacidad =[]
var categorias =[]
 //INSeRTO LOS TITULOS De LAS COLUMNAS DINAMICAMeNTe

 var totalIngresos = document.querySelector(".ingresos")
 var totalAsistencia = document.querySelector(".asistencia")
  var mayorAudiencia = document.querySelector(".mayor")
  var menorAudiencia = document.querySelector(".menor")
  var rowCapacidad = document.querySelector(".capacidad")
  var impresionHtml = document.querySelector(".impresionHtml")

async function capturaJSON(){  //creo una funcion para capturar los datos del json
    await fetch("../styles/datos.json")  
    .then (response => response.json())
    .then (json => eventos.push(...json.eventos))
 console.log(eventos) 
   
 //SePARO LAS CATeGORIAS Y LAS GUARDO eN UN 
/*  var colCategorias =document.querySelector("#nombre-categoria") */
  categorias = eventos.map( categoria => categoria.category)

console.log(categorias)

/* var thCol= document.createelement("th")
var tdAsistencia = document.createelement("td")
var tdIngresos = document.createelement("td")

colCategorias.append(thCol)
thCol.append(arrayeventos.arrayCategorias) */



//SePARO LOS INGReSOS Y LOS GUARDO eN OTRO  (INGReSO)

eventos.forEach( i => {
 ingreso.push({ingreso:i.price* i.assistance , category:i.category})}) 

console.log(ingreso)

//SePARO LA ASISTeNCIA Y LA GUARDO eN OTRO (Asistencia)
asistencia = eventos.map( assistance => assistance.assistance)

console.log(asistencia)

//SePARO LA CAPACIDAD
 capacidad = eventos.map ( capacidad => capacidad.capacity)

console.log(capacidad)

/*   //SePARO LOS DATOS POR CATeGORIA
  var porCategoria =[]
  var porIgreso = []
  var porCapacidad =[]
  var porAsistencia =[] */
 
 
 
/* Categorias.foreach(cadaCategoria =>{//primero separo cada una de las categorias

  porCategoria.push({ 
  Categorias:arrayCategorias,
    categorias:categorias.filter(arrayCategorias.category ==category)

  })
  console.log()
}) */
 


   
/* imprimirTabla (arrayCategorias) */
porcentajeAsistencia(eventos)//Le PASO eL  A LA FUNCION PORCeNTAJe De ASISTeNCIA
mayorMenorIngreso(ingreso)
imprimirTabla(categorias)
}



capturaJSON() //llamo a la funcion que me va a traer el json
//arrayeventos[0].assistance

 function imprimirTabla (categorias){ //Creo la funcion para imprimir el template y le paso el vamor Categorias
 
  categorias.innerHTML =""   
  categorias.map(tabla => {
  impresionHtml.innerHTML +=

` <table id="tabla-dinamica" class="table mt-5">
<thead>
  <tr id="nombre-categorias">
    <th scope="col">${tabla.category}</th>           
 </tr>
</thead>

<tbody>
  <tr class="asistencia"></tr>
    <th scope="row">Asistencia </th>
    <td>
   
  </tr >
  <tr class="ingresos">
    <th scope="row" >Ingresos</th>
   
  </tr>
  <tr class="capacidad">
    <th scope="row" >Capacidad</th>
               
  </tr>
  <tr class="mayor">
    <th scope="row" >Mayor Asistencia</th>          
  
  </tr>
  <tr class="menor">
    <th scope="row" >Asistencia</th>          
  
  </tr>
</tbody>
</table> `

})
} 



//CReO UNA FUNCIOON PARA SACAR LOS PROMeDIOS De ASISTeNCIA POR eVeNTO ReALIZADO
function porcentajeAsistencia(arrayeventos){ 
  
   /*    let columna= document.querySelector("#anidarAsistencia") */
     
      eventos.forEach(porcentajeAsistencia =>{
        //console.log(porcentajeAsistencia.assistance) 

        if(porcentajeAsistencia.assistance == undefined ){
          promedio.push("aun no realizado")
        }else{
            promedio.push(Math.round((porcentajeAsistencia.assistance * 100)/ porcentajeAsistencia.capacity)+"%")
           console.log(promedio) 
        }
       

        
      })

 
}  
function mayorMenorIngreso(ingreso){

  var minIngreso = Math.min(...ingreso)
  var maxIngreso = Math.max(...ingreso)
  console.log(minIngreso)
  console.log(maxIngreso)
  
  

}









 
  
  
 
