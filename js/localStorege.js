

window.onload = leerPerferencias;

function  leerPerferencias(){

    //Nombre de usuario
    if(localStorage.getItem("nombreUsuario")) {
        saludo.innerHTML = "Hola, " +localStorage.getItem("nombreUsuario");
                
    }else{
        nombre = prompt("Como te llamas");
        localStorage.setItem("nombreUsuario", nombre);
    }

    // ver se hay valores guardados en localStorage
    if(localStorage.getItem("tamanoTexto")&&localStorage.getItem("colorTexto")&&localStorage.getItem("fuenteTexto")) {

        let tamanoFinal = localStorage.getItem("tamanoTexto");
        let colorFinal = localStorage.getItem("colorTexto");
        let fuenteFinal = localStorage.getItem("fuenteTexto");

        parrafo.style.fontSize= tamanoFinal +"px";
        parrafo.style.color= colorFinal;
        parrafo.style.fontFamily= fuenteFinal;

        //aqui se leen las últimas perferencias duardadas
        tamano.value = tamanoFinal;
        color.value = colorFinal;

        // Asignar el valor correcto en el select basado en la fuente guardada
        const fuenteOptions = {
            "Monsieur La Doulaise": "1",
            "Montserrat": "2",
            "Poppins": "3"
        };
        fuente.value = fuenteOptions[fuenteFinal] || "1"; // Default a "Monsieur" si no se encuentra

        mensaje.innerHTML = "!!! Mostrando Tus Perferencias !!!";
    }
}

function guardarPerferencias(){
    let tamanoFinal = tamano.value;
    let colorFinal = color.value;

    // Obtener el texto de la opción seleccionada
    let fuenteFinal;

    switch (fuente.value){
        case "1":
            // `${fuenteFinal}`
            fuenteFinal = "Monsieur La Doulaise";
            break;

        case "2":
            // `${fuenteFinal}`
            fuenteFinal = "Montserrat";
            break;

        case "3":
            // `${fuenteFinal}`
            fuenteFinal = "Poppins";
            break;

        default:
            fuenteFinal = "sans-serif"; // Fuente por defecto
    }

    alert(`Fuente Elegida: ${fuenteFinal}`);

    localStorage.setItem("tamanoTexto", tamanoFinal);
    localStorage.setItem("colorTexto", colorFinal);
    localStorage.setItem("fuenteTexto", fuenteFinal);

    parrafo.style.fontSize= tamanoFinal +"px";
    parrafo.style.color= colorFinal;
    parrafo.style.fontFamily = fuenteFinal;
    // tamano.value = tamanoFinal;
    // color.value = colorFinal;
    mensaje.innerHTML = "Mostrando Tus Perferencias";

}

