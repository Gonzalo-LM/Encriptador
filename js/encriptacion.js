var imgdiv = document.querySelector('#imagen_div');
var txtdiv = document.querySelector('#mensaje_div');

var ingresarTexto = document.querySelector('#mensaje');
var mostarTexto = document.querySelector('#mensajeE');

var ButtonLimpiar = document.querySelector('#limpiar');
var ButtonEncriptar = document.querySelector('#encriptar');
var ButtonDesencriptar = document.querySelector('#desencriptar');
var ButtonCopiar = document.querySelector('#copiar');

ingresarTexto.focus();

var texto = [];

var oracion = "";
var frase = "";
var valor = true;

imgdiv.style.display  = "block";
txtdiv.style.display  = "none";

function encriptarTexto(letra){
    if((letra == "a")){
        letra = "ai";
    }else if(letra == "e"){
        letra = "enter";
    }else if(letra == "i"){
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

function validacion(validar){
    valor = true;
    comprobar = [];
    for(var r = 0; r < 8; r++){
        comprobar.push(String.fromCharCode(r));
    }
    for(var t = 9; t < 13; t++){
        comprobar.push(String.fromCharCode(t));
    }
    for(var y = 14; y < 32; y++){
        comprobar.push(String.fromCharCode(y));
    }
    for(var u = 33; u < 96; u++){
        comprobar.push(String.fromCharCode(u));
    }
    for(var o = 123; o < 164; o++){
        comprobar.push(String.fromCharCode(o));
    }
    for(var p = 166; p < 255; p++){
        comprobar.push(String.fromCharCode(p));
    }

    for(var x = 0; x < validar.length; x++){
        palabra = validar.split("");
        if(comprobar.includes(palabra[x])){
            valor = false;
            break;
        }
    }
}

function encriptar(){
    let texto_encriptar = ingresarTexto.value.toLowerCase();
    validacion(texto_encriptar)

    if((texto_encriptar != "") && (valor)){
        texto = [];
        texto = texto_encriptar.split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            encriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else if(texto_encriptar == ""){
        alert("No hay texto para encriptar");
    }else{
        alert("no se aceptan simbolos ni letras con acentos")
    }
    mostrar_ocultar();
}

function desencriptar(){
    let texto_desencriptar = ingresarTexto.value.toLowerCase();
    validacion(texto_desencriptar)

    if((texto_desencriptar != "") && ((texto_desencriptar.includes("ai")) || (texto_desencriptar.includes("enter"))
     || (texto_desencriptar.includes("imes")) || (texto_desencriptar.includes("ober")) || (texto_desencriptar.includes("ufat"))) && (valor)){
        texto = [];
        texto = texto_desencriptar.split("");
        oracion = "";
        for(var i = 0; i < texto.length; i++){
            desencriptarTexto(texto[i]);
        }
        mostarTexto.value = oracion;
    }else if(!valor){
        alert("no se aceptan simbolos ni letras con acentos")
    }else{
        alert("No hay texto en clave para desencriptar");
    }
    mostrar_ocultar();
}

function copiarTexto(){
    texto_copiar = mostarTexto.value;
    navigator.clipboard.writeText(texto_copiar);
    alert("Texto copiado")
}

function limpiarTexto(){
    ingresarTexto.value = "";
    mostarTexto.value = "";
    mostrar_ocultar();
    ingresarTexto.focus();
}

function letrasMinusculas(x){
    key = x.keyCode || x.which;
    tecla = String.fromCharCode(key).toString();
    letras = [];//"abcdefghijklmnñopqrstuvwxyz";
    for(var l = 97; l < 123; l++){
        letras.push(l);
    }
    especiales = [32, 8, 13];
    tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    for(var a in letras){
        if(key == letras[a]){
            tecla_especial = true;
            break;
        }
    }
    if(!tecla_especial){
        alert("Ingrese solo letras minusculas y sin acentos.");
        return false;
    }
}

ButtonLimpiar.onclick = limpiarTexto;
ButtonEncriptar.onclick = encriptar;
ButtonDesencriptar.onclick = desencriptar;
ButtonCopiar.onclick = copiarTexto;
ingresarTexto.onkeypress = letrasMinusculas;