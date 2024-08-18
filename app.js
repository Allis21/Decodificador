const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const tituloResultado = document.querySelector(".tituloResultado")
const comentarioResultado = document.querySelector(".comentarioResultado")
const buttonCopiar = document.querySelector(".buttonCopiar")

function contieneMayusculasOcaracteresEspeciales(textArea){
    return /[A-Z]/.test(textArea) || /[^a-z ]/.test(textArea)
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function buttonEncriptar(){
    if (contieneMayusculasOcaracteresEspeciales(textArea.value)) {
        alert("El texto no debe contener mayúsculas o caracteres especiales");
        return limpiarCaja(); 
    }else{
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        tituloResultado.style.display = "none"
        comentarioResultado.style.display = "none"
        buttonCopiar.style.display = "block"
    }
    
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function buttonDesencriptar(){
    if (contieneMayusculasOcaracteresEspeciales(textArea.value)) {
        alert("El texto no debe contener mayúsculas o caracteres especiales");
        return limpiarCaja(); 
    }else{
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
        tituloResultado.style.display = "none"
        comentarioResultado.style.display = "none"
        buttonCopiar.style.display = "block"
    }
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copyText(){
    navigator.clipboard.writeText(mensaje.value)
    alert("Texto copiado al portapapeles")
}

function limpiarCaja() {
    textArea.value = "";
}



