/////////////

//Proyecto "ASOCIATE A BELGRANO"

//Es socio? Que tribuna quiere? Tenemos disponible? 

let asociate = prompt("Bienvenido al area de socios del club atletico Belgrano, sos socio? si/no")

if (asociate === "si") {
    console.log("Bienvenido Pirata")
} else if (asociate === "no") {
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


if (asociate === "no") {
    let tribuna = (prompt("Forma de asociarse \n A - Socio Cab \n B - Grupo familiar (4 socios maximo) ")).toLowerCase()


    if (tribuna === "a" && asociate === "no") {
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







