function encriptar(){

    var frase = document.getElementById("textoInput").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "xdter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imws");
    var textoEncriptado = textoEncriptado.replace(/a/img, "api");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ocvr");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoAreaText").innerHTML = textoEncriptado;
}

function desencriptar(){

    var frase = document.getElementById("textoInput").value.toLowerCase();

    var textoEncriptado = frase.replace(/xdter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imws/img, "i");
    var textoEncriptado = textoEncriptado.replace(/api/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ocvr/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoAreaText").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#textoAreaText");
    contenido.select();
    document.execCommand("copy");
}

function borrarPlaceHolder(){
    var miTextArea = document.getElementById("miTextArea");
    if (miTextArea.value === miTextArea.placeholder) {
        miTextArea.value = "";
    }
}
