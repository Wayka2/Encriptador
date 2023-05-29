const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado;

    for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
    stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

    }
    }
    return stringEncriptado
}

function btnDesencriptar(){
   const textoEncriptado = desencriptar(textArea.value);
   mensaje.value = textoEncriptado;
   textArea.value = "";
    
    
}

function desencriptar(stringDesencriptado){
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   stringDesencriptado = stringDesencriptado;
   for(let i = 0; i < matrizCodigo.length; i++){
   if(stringDesencriptado.includes(matrizCodigo[i][1])){
   stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    
}

}
    
return stringDesencriptado;
}
function btnCopiar(){
    const textoEncriptado = copiar(mensaje.value);
    mensaje.value = textoEncriptado;
    mensaje.value = "";
   // mensaje.style.backgroundImage = "none";
}
//return stringCopiado;

function copiar() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");

  }
  
  
  
  //document.querySelector("pegar").addEventListener("click", paste);
  

  
  
  
  
  
  
  



