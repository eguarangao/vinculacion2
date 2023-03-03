
function cambiarColorTextoAzul() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "#005b8f";
    }
}

function cambiarColorTextoVerde() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "green";
    }
}

function cambiarColorTextoNegro() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "black";
    }
}

function cambiarColorTextoBlanco() {
    var elementosDeTexto = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (var i = 0; i < elementosDeTexto.length; i++) {
        elementosDeTexto[i].style.color = "white";
    }
}