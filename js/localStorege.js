

window.onload = function() {

    if(localStorage.getItem("nombreUsuario")) {
        saludo.innerHTML = "Hola, " +localStorage.getItem("nombreUsuario");
        
    }else{
        nombre = prompt("Como te llamas");
        localStorage.setItem("nombreUsuario", nombre);
    }
}

function guardar() {
    localStorage.setItem("tamanoFuente", tamano.value);
    localStorage.setItem("colorFuente", color.value);
    parrafo.style.fontSize = tamano.value + "px";
    parrafo.style.color = color.value;
    localStorage.setItem("parrafo", color.value);
}


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