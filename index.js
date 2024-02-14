/////////////

//Proyecto "ASOCIATE A BELGRANO"

//Es socio? Que tribuna quiere? Tenemos disponible? 

let lugarTribuna = prompt("Bienvenido al club Atletico Belgrano, primero, consultaremos la disponibilidad de ubicacion \n Popular \n Heredia \n Preferencial \n Cuellar \n\n consulta disponibilidad.")


function contratarAbono() {


    const TRIBUNAS = [
        {
            nombre: "Popular",
            estado: "No Disponible",
            precio: "$25000"
        },
        {
            nombre: "Heredia",
            estado: "Disponible",
            precio: "$35000",
        },
        {
            nombre: "Preferencial",
            estado: "No Disponible",
            precio: "$50000",
        },
        {
            nombre: "Cuellar",
            estado: "Disponible",
            precio: "$60000"
        }
    ];

    // Buscar la tribuna seleccionada por el usuario
    const tribunaSeleccionada = TRIBUNAS.find(tribuna => tribuna.nombre.toLowerCase() === lugarTribuna.toLowerCase());

    // Verificar si se encontró la tribuna
    if (tribunaSeleccionada) {
        console.log(`Información sobre la tribuna ${tribunaSeleccionada.nombre}:`);
        console.log(`Estado: ${tribunaSeleccionada.estado}`);
        console.log(`El precio es de ${tribunaSeleccionada.precio}`)
    }else {
        console.log("Ingresa una tribuna valida")
    } 
        
}

contratarAbono()


let asociate = prompt("Si tu tribuna tiene disponibilidad, sigue los siguientes pasos, si no, proba con otra! No te quedes afuera! \n Tiene disponibilidad SI/NO?")

if (asociate === "no") {
    console.log("Actualiza Y proba con otra, no te pierdas ver al mas convocante del interior.")
   
} else if (asociate === "si") {
    const UBICACION = Number(prompt("A que tribuna queres asociarte? Ingrese el numero \n 1 - Popular \n 2 - Heredia \n 3 - Preferencial \n 4 - Cuellar "))

    switch (UBICACION) {

        case 1:
            console.log("Estas comenzando la gestion de la Tribuna Popular")
            break;

        case 2:
            console.log("Estas comenzando la gestion de la Tribuna Heredia")
            break;

        case 3:
            console.log("Estas comenzando la gestion de la Tribuna Preferencial")
            break;

        case 4:
            console.log("Estas comenzando la gestion de la Tribuna Cuellar")
            break;

        default:
            console.log("Ingresa un numero valido");
            break;
    }
} else { console.log("ingresa si o no") }


/////////////////////////////



//Ingresar datos


//Forma de asociarse


if (asociate === "si") {
    let tribuna = (prompt("Forma de asociarse \n A - Socio Cab \n B - Grupo familiar (4 socios maximo) ")).toLowerCase()


    if (tribuna === "a" && asociate === "si") {
        let nombreA = prompt("Ingresa tu nombre y apellido")
        let dniA = prompt("Ingresa tu DNI")
        console.log(`Bienvenido ${nombreA}, tu numero de socio es ${dniA}`)

    } else if (tribuna === "b") {

        let cantidad = prompt("Bienvenida Familia Pirata, a continuacion ingresa la cantidad de socios.")
        let contador = 0;
        while (contador < cantidad && contador <= 4) {

            let nombreB = prompt("Ingrese Nombre y Apellido");
            let dniB = prompt("Ingrese Dni");
            contador++;

            console.log(`Bienvenido ${nombreB}, tu numero de socio es ${dniB}`)

        }
    }

    else {
        console.log("Ingrese un caracter valido")
    }
}



////////////////////////////////////////////////////////////

//ENTREGA JAVASCRIPT PARTE DOS

/* class Tribuna{
    constructor(capacidad, precio, nombre){
        this.capacidad = capacidad
        this.precio = precio
        this.nombre = nombre
    }

    hayLugar(){
        console.log(`La tribuna ${this.nombre}, cuenta con una capacidad de ${this.capacidad} y tiene un valor de ${this.precio}` )
    }
}

const HEREDIA = new Tribuna(6000, "$77.000", "Heredia")
const POPULAR = new Tribuna(5000, "$25000", "Popular")
const PREFERENCIAL = new Tribuna (7000, "$45.0000", "Preferencial")
const CUELLAR = new Tribuna (8000, "$60.000", "Cuellar")



HEREDIA.hayLugar()
POPULAR.hayLugar()
PREFERENCIAL.hayLugar()
CUELLAR.hayLugar() */


//////////////////////////////////////

//Comprobar lugar

