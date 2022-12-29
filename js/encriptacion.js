var imgdiv = document.querySelector('#imagen_div');
var txtdiv = document.querySelector('#mensaje_div');

var ingresarTexto = document.querySelector('#mensaje');
var mostarTexto = document.querySelector('#mensajeE');

var ButtonLimpiar = document.querySelector('#limpiar');
var ButtonEncriptar = document.querySelector('#encriptar');
var ButtonDesencriptar = document.querySelector('#desencriptar');
var ButtonCopiar = document.querySelector('#copiar');

var texto = [];

var oracion = "";
var frase = "";

imgdiv.style.display  = "block";
txtdiv.style.display  = "none";

function encriptarTexto(letra){
    if(letra == "a"){
        letra = "ai";
    }else if(letra == "e"){
        letra = "enter";
    }else if(letra =="i"){
        letra = "imes";
    }else if(letra == "o"){
        letra = "ober";
    }else if(letra == "u"){
        letra = "ufat";
    }else{
        letra = letra;
    }
    oracion = oracion + letra;
}

function desencriptarTexto(desOracion){
    oracion = oracion + desOracion
    if(oracion.includes("ai")){
        frase = oracion.replace("ai", "a");

    }else if(oracion.includes("enter")){
        frase = oracion.replace("enter", "e");

    }else if(oracion.includes("imes")){
        frase = oracion.replace("imes", "i");

    }else if(oracion.includes("ober")){
        frase = oracion.replace("ober", "o");

    }else if(oracion.includes("ufat")){
        frase = oracion.replace("ufat", "u");
    }else{
        frase = oracion;
    }
    oracion = frase;
}

function mostrar_ocultar(){
    if(mostarTexto.value != ""){
        imgdiv.style.display  = "none";
        txtdiv.style.display  = "block";
    }else{
        imgdiv.style.display  = "block";
        txtdiv.style.display  = "none";
    }
}

function encriptar(){
    if(ingresarTexto.value.toString() != ""){
        texto = [];
        texto = ingresarTexto.value.toString().split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            encriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else{
        alert("No hay texto para encriptar");
    }
    mostrar_ocultar();
}

function desencriptar(){
    var texto_desencriptar = ingresarTexto.value.toString();
    if((texto_desencriptar != "") && ((texto_desencriptar.includes("ai")) || (texto_desencriptar.includes("enter"))
     || (texto_desencriptar.includes("imes")) || (texto_desencriptar.includes("ober")) || (texto_desencriptar.includes("ufat")))){
        texto = [];
        texto = texto_desencriptar.split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            desencriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else{
        alert("No hay texto para desencriptar");
    }
    mostrar_ocultar();
}

function copiarTexto(){
    mostarTexto.select();
    document.execCommand("copy");
}

function limpiarTexto(){
    ingresarTexto.value = "";
    mostarTexto.value = "";
    mostrar_ocultar();
}

function letrasMinusculas(x){
    key = x.keyCode || x.which;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyz";

    especiales = [32, 8, 13];
    tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingrese solo letras minusculas y sin acentos.");
        return false;
    }
}

ButtonLimpiar.onclick = limpiarTexto;
ButtonEncriptar.onclick = encriptar;
ButtonDesencriptar.onclick = desencriptar;
ButtonCopiar.onclick = copiarTexto;