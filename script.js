const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
console.table(matrizCodigo)

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
       
        }
    }
    return stringEncriptada;
}



function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
       
        }
    }
    return stringDesencriptada;
}


function copiarMensagem() {
    // Seleciona o campo de texto
    const mensagem = document.querySelector('.mensagem');
    mensagem.select();
    mensagem.setSelectionRange(0, 99999); // Para dispositivos móveis
  
    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');
  
    // Atualiza o elemento <span> com a mensagem de sucesso
    const mensagemCopiada = document.querySelector('.mensagem-copiada');
    mensagemCopiada.innerText = 'Mensagem copiada!';
  
    // Remove a mensagem de sucesso após 2 segundos
    setTimeout(() => {
      mensagemCopiada.innerText = '';
    }, 2000);
  }
  
  


// //   botao escuro e claro
//   function toggleDarkMode() {
//     var body = document.querySelector('body');
//     body.classList.toggle('dark-mode');
//   }
  
