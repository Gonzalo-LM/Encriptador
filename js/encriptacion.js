var DivImagen = document.querySelector('#imagen');

var ingresarTexto = document.querySelector('#mensaje');
var mostarTexto = document.querySelector('#mensajeE')

var ButtonLimpiar = document.querySelector('#limpiar')
var ButtonEncriptar = document.querySelector('#encriptar');
var ButtonDesencriptar = document.querySelector('#desencriptar');
var ButtonCopiar = document.querySelector('#copiar');

var texto = [];

var oracion = "";
var mensaje = "";
var frase = "";

DivImagen.style.visibility = "visible";
mostarTexto.style.visibility = "hidden";
mostarTexto.style.height = "0px";
ButtonCopiar.style.visibility = "hidden";

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
        DivImagen.style.visibility = "hidden";
        DivImagen.style.height = "0";
        mostarTexto.style.visibility = "visible";
        mostarTexto.style.height = "600px";
        ButtonCopiar.style.visibility = "visible";
    }else{
        DivImagen.style.visibility = "visible";
        DivImagen.style.height = "100%";
        mostarTexto.style.visibility = "hidden";
        mostarTexto.style.height = "0";
        ButtonCopiar.style.visibility = "hidden";
    }
}

function encriptar(){
    if(ingresarTexto != ""){
        texto = [];
        texto = ingresarTexto.value.toString().split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            encriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else{
        alert("ingresa algo ps oe");
    }
    mostrar_ocultar();
}

function desencriptar(){
    if(ingresarTexto != ""){
        texto = [];
        texto = ingresarTexto.value.toString().split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            desencriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else{
        alert("ingresa algo ps oe");
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