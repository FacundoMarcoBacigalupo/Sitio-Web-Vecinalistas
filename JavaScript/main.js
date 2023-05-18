//Cuando el usuario salga del Sitio Web se cambia el TITULO
let tituloPrevio = document.title

window.addEventListener("blur", () => {
    tituloPrevio = document.title
    document.title = "¡Vota a Vecinalista!"
})


window.addEventListener("focus", () => {
    document.title = tituloPrevio
})

















                                                    //CURSO JAVASCRIPTS

/*//Primero se le da la bienvenida al cliente, luego se le pregunta si está interesado en nuestros Servicios, después se le pregunta en cuál de los servicios tiene interés y al final se pregunta si quiere saber nuevamente los nombres y precios de los servicios.

    alert("Bienvenido a MFL")


                            //Array con todos los servicios de MFL(serviciosMFl)
    const serviciosMFl = [
        {nombre: "Júpiter", contenido: "4 publicaciones", precio: "$9000"},
        {nombre: "Saturno", contenido: "8 publicaciones" , precio: "$11000"},
        {nombre: "Urano", contenido: "12 publicaciones", precio: "$15000"}
    ]





                            //Nombres de mis servicios dentro de mi Array (serviciosMFl)
    const serviciosNombres = serviciosMFl.map((servicio) => servicio.nombre).join(", ");



                            //Función constructura
    function Servicio(nombre, contenido, precio){

            this.nombre = nombre
            this.contenido = contenido
            this.precio = precio

            this.info = ()=>{
                let respuestaCliente =  prompt(`Este servicio se llama ${nombre}, cuenta con ${contenido} y tiene un valor de ${precio} ¿Desea continuar con este servicio? SI-NO`).toUpperCase().trim()


                if (respuestaCliente === true || respuestaCliente === "SI"){
                    alert ("+54 11 2904439 este es nuestro numero de celular para contactarnos y concreatar una reunion, lo esperamos.")
                }
                else{ 
                    alert("Esperamos volver a verte")
                } 
            return "Gracias por su tiempo"  
            }
        }



                            //Servicio JÚPITER
    const jupiter = new Servicio("Jupiter", "4 publicaciones", "$16000 ARS")



                            //Servicio SATURNO
    const saturno = new Servicio("Saturno", "8 publicaciones", "$21000 ARS")



                            //Servicio URANO                        
    const urano = new Servicio("Urano", "12 publicaciones", "$28600 ARS")







let consulta = confirm(`¿Estas interesado en nuestros servicios de Marketing Digital? Contamos con estos servicios: ${serviciosNombres}`)




if(consulta === true){

    let interesCliente =  prompt("¿Que servicio le interesa de los que tenemos?").toLowerCase().trim()

    while(interesCliente !="" && interesCliente !=null){

        if(interesCliente === "jupiter"){
                alert(jupiter.info())
            break;
        }
        
        else if(interesCliente === "saturno"){
                alert(saturno.info())
            break;
        }
        
        else if(interesCliente === "urano"){
                alert(urano.info())
            break;
        }

        else{
            alert(`No contamos con el servicio ${interesCliente} intente con uno de estos sercicios: ${serviciosNombres}`)
            break;
        }
    }

}
else{
    alert("Esperamos volver a verte por acá")
}





let consultaPrecios =   prompt(`¿Queres conocer todos los nombres y precios de los servicios que tenemos?`).toUpperCase().trim()


    if(consultaPrecios === true || consultaPrecios === "SI"){
        for(let i = 0; i < serviciosMFl.length; i++){
        alert( ( serviciosMFl[i].nombre + ", ".concat(serviciosMFl[i].precio + " ARS") ) )
        }
    }
    else{
        alert("Esperamos volver a verte por acá")
    }*/