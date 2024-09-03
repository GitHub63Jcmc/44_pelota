

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
        fuente.value = fuenteFinal;

        mensaje.innerHTML = "!!! Mostrando Tus Perferencias !!!";
    }
}

function guardarPerferencias(){
    let tamanoFinal = tamano.value;
    let colorFinal = color.value;
    let fuenteFinal = fuente.options[fuente.selectedIndex].text;

    switch (fuenteFinal){
        case 1:
            `${fuenteFinal}`
            break;

        case 2:
            `${fuenteFinal}`
            break;

        case 3:
            `${fuenteFinal}`
            break;

        default:
            "Fuente del Sistema"
    }

    alert(`Fuente Elegida: ${fuenteFinal}`);

    localStorage.setItem("tamanoTexto", tamanoFinal);
    localStorage.setItem("colorTexto", colorFinal);
    localStorage.setItem("fuenteTexto", fuenteFinal);
    parrafo.style.fontSize= tamanoFinal +"px";
    parrafo.style.color= colorFinal;
    tamano.value = tamanoFinal;
    color.value = colorFinal;
    mensaje.innerHTML = "Mostrando Tus Perferencias";

}


// window.onload = function() {

//     if(localStorage.getItem("nombreUsuario")) {
//         saludo.innerHTML = "Hola, " +localStorage.getItem("nombreUsuario");
        
//     }else{
//         nombre = prompt("Como te llamas");
//         localStorage.setItem("nombreUsuario", nombre);
//     }
// }

// function guardar() {
//     localStorage.setItem("tamanoFuente", tamano.value);
//     localStorage.setItem("colorFuente", color.value);
//     parrafo.style.fontSize = tamano.value + "px";
//     parrafo.style.color = color.value;
//     localStorage.setItem("parrafo", color.value);
// }


// ---------------------------------------------------
// window.onload = function() {
//     if(localStorage.getItem("nombreUsuario")) {
//         saludo.innerHTML = "Hola, " +localStorage.getItem("nombreUsuario");
//     } else {
//         nombre = prompt("¿Cómo te llamas?");
//         localStorage.setItem("nombreUsuario", nombre);
//     }

//     // Aplicar el tamaño y color guardados al cargar la página
//     if(localStorage.getItem("tamanoFuente")) {
//         parrafo.style.fontSize = localStorage.getItem("tamanoFuente") + "px";
//     }
//     if(localStorage.getItem("colorFuente")) {
//         parrafo.style.color = localStorage.getItem("colorFuente");
//     }
// }