function cambiarColorTextoAzul() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "#005b8f";
    }
    document.body.style.backgroundColor = "white";
}

function cambiarColorTextoVerde() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "green";
    }
    document.body.style.backgroundColor = "white";
}

function cambiarColorTextoNegro() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "black";
    }
    document.body.style.backgroundColor = "white";
}

function cambiarColorTextoBlanco() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "white";
    }
    document.body.style.backgroundColor = "black";
}

function cambiarFuenteDislexia() {
    // Cambiar la fuente de todos los elementos de la página
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.fontFamily = "OpenDyslexic, Arial, sans-serif";
    }

    // Ajustar el tamaño de fuente para mejorar la legibilidad
    document.body.style.fontSize = "1.2em";
}



// function aumentarTamañoFuente() {
//     // Obtener el elemento body
//     var body = document.getElementsByTagName('body')[0];
//
//     // Obtener el tamaño actual de fuente
//     var currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
//
//     // Aumentar el tamaño de fuente en 1 píxel
//     var newFontSize = currentFontSize + 1;
//
//     // Establecer el nuevo tamaño de fuente en el elemento body
//     body.style.fontSize = newFontSize + 'px';
// }

function aumentarTamañoFuente() {
    // Obtener el elemento body
    var body = document.getElementsByTagName('body')[0];

    // Obtener el tamaño actual de fuente
    var currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));

    // Aumentar el tamaño de fuente en 1 píxel
    var newFontSize = currentFontSize + 1;

    // Establecer el nuevo tamaño de fuente en el elemento body
    body.style.fontSize = newFontSize + 'px';

    // Almacenar el nuevo tamaño de fuente en caché
    localStorage.setItem('fontSize', newFontSize);
}


function establecerTamañoFuente() {
    // Obtener el elemento body
    var body = document.getElementsByTagName('body')[0];

    // Obtener el tamaño de fuente almacenado en caché
    var cachedFontSize = localStorage.getItem('fontSize');

    // Si el tamaño de fuente está almacenado en caché, establecerlo en el elemento body
    if (cachedFontSize) {
        body.style.fontSize = cachedFontSize + 'px';
    }
}


function disminuirTamanoFuente() {
    // Obtener el elemento body
    var body = document.getElementsByTagName('body')[0];

    // Obtener el tamaño actual de fuente
    var currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));

    // Calcular el nuevo tamaño de fuente
    var newFontSize = currentFontSize - 1;

    // Establecer el nuevo tamaño de fuente en el elemento body
    body.style.fontSize = newFontSize + 'px';
}


function restablecerEstiloTexto() {
    // Obtener todos los elementos de la página
    var elementos = document.getElementsByTagName('*');

    // Establecer el tipo de letra, tamaño de fuente y peso de fuente para cada elemento
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.fontFamily = "Nunito";
        elementos[i].style.fontSize = "16px";
        elementos[i].style.fontWeight = "400";
        elementos[i].style.lineHeight = "24px";
    }
}
