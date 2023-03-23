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
    var body = document.getElementsByTagName('body')[0];

    // Obtener el tamaño actual de fuente
    var currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));

    // Calcular el nuevo tamaño de fuente
    var newFontSize = 17;

    // Establecer el nuevo tamaño de fuente en el elemento body
    body.style.fontSize = newFontSize + 'px';

    cambiarColorTextoNegro();
    restablecerImagenes();
}

function aplicarEfectoBlancoNegro() {
    // Seleccionar todas las imágenes en la página
    const imagenes = document.getElementsByTagName('img');

    // Precargar imágenes con el efecto de blanco y negro aplicado
    const imagenesPrecargadas = [];
    for (let i = 0; i < imagenes.length; i++) {
        const imgBlancoNegro = new Image();
        imgBlancoNegro.src = imagenes[i].src;
        imgBlancoNegro.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imgBlancoNegro.width;
            canvas.height = imgBlancoNegro.height;
            ctx.drawImage(imgBlancoNegro, 0, 0);
            ctx.filter = 'grayscale(100%)';
            ctx.drawImage(imgBlancoNegro, 0, 0);
            const imgBlancoNegroDataUrl = canvas.toDataURL();
            imagenes[i].dataset.originalSrc = imagenes[i].src; // Añadir atributo "originalSrc"
            imagenes[i].src = imgBlancoNegroDataUrl;
            imagenesPrecargadas.push(new Image());
            imagenesPrecargadas[i].src = imgBlancoNegroDataUrl;
        };
    }

    // Reemplazar cada imagen con la versión precargada en blanco y negro
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenesPrecargadas[i].src;
    }
}


// function aplicarEfectoSepia() {
//     // Crear un arreglo para almacenar las imágenes precargadas
//     const imagenesPrecargadas = [];
//
//     // Seleccionar todas las imágenes en la página
//     const imagenes = document.getElementsByTagName('img');
//
//     // Precargar cada imagen con el efecto de sepia y agregarla al arreglo
//     for (let i = 0; i < imagenes.length; i++) {
//         const img = new Image();
//         img.src = imagenes[i].src;
//         img.onload = function () {
//             const canvas = document.createElement('canvas');
//             const ctx = canvas.getContext('2d');
//             canvas.width = img.width;
//             canvas.height = img.height;
//             ctx.drawImage(img, 0, 0);
//             const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//             for (let j = 0; j < imageData.data.length; j += 4) {
//                 const r = imageData.data[j];
//                 const g = imageData.data[j + 1];
//                 const b = imageData.data[j + 2];
//                 imageData.data[j] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);
//                 imageData.data[j + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);
//                 imageData.data[j + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);
//             }
//             ctx.putImageData(imageData, 0, 0);
//             const imgSepia = new Image();
//             imgSepia.src = canvas.toDataURL('image/jpeg', 1.0);
//             imagenesPrecargadas.push(imgSepia);
//         }
//     }
//
//     // Reemplazar cada imagen con la versión precargada con efecto de sepia
//     for (let i = 0; i < imagenes.length; i++) {
//         imagenes[i].src = imagenesPrecargadas[i].src;
//     }
// }


function aplicarEfectoSepia() {
    // Obtener todas las imágenes de la página
    const images = document.getElementsByTagName('img');

    // Iterar sobre cada imagen
    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        // Crear un canvas temporal y obtener su contexto
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Establecer el tamaño del canvas para que sea igual que la imagen
        canvas.width = image.width;
        canvas.height = image.height;

        // Dibujar la imagen en el canvas
        context.drawImage(image, 0, 0);

        // Obtener los datos de píxeles del canvas
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;

        // Iterar sobre cada píxel y aplicar el efecto sepia
        for (let j = 0; j < pixels.length; j += 4) {
            const r = pixels[j];
            const g = pixels[j + 1];
            const b = pixels[j + 2];

            const tr = Math.min(0.393 * r + 0.769 * g + 0.189 * b, 255);
            const tg = Math.min(0.349 * r + 0.686 * g + 0.168 * b, 255);
            const tb = Math.min(0.272 * r + 0.534 * g + 0.131 * b, 255);

            pixels[j] = tr;
            pixels[j + 1] = tg;
            pixels[j + 2] = tb;
        }

        // Escribir los datos de píxeles de vuelta en el canvas
        context.putImageData(imageData, 0, 0);

        // Reemplazar la imagen original con la imagen sepia
        image.src = canvas.toDataURL();
    }
}

function aplicarBrilloAlto() {
    // Crear un arreglo para almacenar las imágenes precargadas
    const imagenesPrecargadas = [];

    // Seleccionar todas las imágenes en la página
    const imagenes = document.getElementsByTagName('img');

    // Precargar cada imagen con el brillo alto y agregarla al arreglo
    for (let i = 0; i < imagenes.length; i++) {
        const img = new Image();
        img.src = imagenes[i].src;
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (let j = 0; j < imageData.data.length; j += 4) {
                imageData.data[j] = Math.min(255, imageData.data[j] + 50);
                imageData.data[j + 1] = Math.min(255, imageData.data[j + 1] + 50);
                imageData.data[j + 2] = Math.min(255, imageData.data[j + 2] + 50);
            }
            ctx.putImageData(imageData, 0, 0);
            const imgBrilloAlto = new Image();
            imgBrilloAlto.src = canvas.toDataURL('image/jpeg', 1.0);
            imagenesPrecargadas.push(imgBrilloAlto);
        }
    }

    // Reemplazar cada imagen con la versión precargada con brillo alto
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenesPrecargadas[i].src;
    }
}


function aplicarBrilloBajo() {
    // Crear un arreglo para almacenar las imágenes precargadas
    const imagenesPrecargadas = [];

    // Seleccionar todas las imágenes en la página
    const imagenes = document.getElementsByTagName('img');

    // Precargar cada imagen con el brillo bajo y agregarla al arreglo
    for (let i = 0; i < imagenes.length; i++) {
        const img = new Image();
        img.src = imagenes[i].src;
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            for (let j = 0; j < imageData.data.length; j += 4) {
                imageData.data[j] = Math.max(0, imageData.data[j] - 50);
                imageData.data[j + 1] = Math.max(0, imageData.data[j + 1] - 50);
                imageData.data[j + 2] = Math.max(0, imageData.data[j + 2] - 50);
            }
            ctx.putImageData(imageData, 0, 0);
            const imgBrilloBajo = new Image();
            imgBrilloBajo.src = canvas.toDataURL('image/jpeg', 1.0);
            imagenesPrecargadas.push(imgBrilloBajo);
        }
    }

// Reemplazar cada imagen con la versión precargada con brillo bajo
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenesPrecargadas[i].src;
    }
}

function restablecerImagenes() {
// Seleccionar todas las imágenes en la página
    const imagenes = document.getElementsByTagName('img');

// Reemplazar cada imagen con su versión original
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenes[i].dataset.originalSrc || imagenes[i].src;
    }
}


function aplicarEfectoSaturacion() {
    // Seleccionar todas las imágenes en la página
    const imagenes = document.getElementsByTagName('img');

    // Precargar imágenes con el efecto de saturación aplicado
    const imagenesPrecargadas = [];
    for (let i = 0; i < imagenes.length; i++) {
        const imgSaturada = new Image();
        imgSaturada.src = imagenes[i].src;
        imgSaturada.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imgSaturada.width;
            canvas.height = imgSaturada.height;
            ctx.drawImage(imgSaturada, 0, 0);
            ctx.filter = 'saturate(200%)';
            ctx.drawImage(imgSaturada, 0, 0);
            const imgSaturadaDataUrl = canvas.toDataURL();
            imagenes[i].dataset.originalSrc = imagenes[i].src; // Añadir atributo "originalSrc"
            imagenes[i].src = imgSaturadaDataUrl;
            imagenesPrecargadas.push(new Image());
            imagenesPrecargadas[i].src = imgSaturadaDataUrl;
        };
    }

    // Reemplazar cada imagen con la versión precargada saturada
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenesPrecargadas[i].src;
    }
}



// function aplicarEfectoBlancoNegro() {
//     // Crear un arreglo para almacenar las imágenes precargadas
//     const imagenesPrecargadas = [];
//
//     // Seleccionar todas las imágenes en la página
//     const imagenes = document.getElementsByTagName('img');
//
//     // Precargar cada imagen y agregarla al arreglo
//     for (let i = 0; i < imagenes.length; i++) {
//         const img = new Image();
//         img.src = imagenes[i].src;
//         imagenesPrecargadas.push(img);
//     }
//
//     // Aplicar el efecto de blanco y negro a cada imagen precargada
//     for (let i = 0; i < imagenesPrecargadas.length; i++) {
//         imagenesPrecargadas[i].onload = function() {
//             this.style.filter = 'grayscale(100%)';
//         }
//     }
// }
