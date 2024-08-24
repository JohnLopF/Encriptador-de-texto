function encriptar () {
    let textoOriginal = document.getElementById("textarea").value;

    if (!textoOriginal) {
        alert('Por favor digite el texto.');
        return;
      }
    if (!/^[a-zñ ]+$/.test(textoOriginal)) {
        alert('Solo se permiten letras minúsculas sin caracteres especiales.');
        return;
      }

    let textoEncriptado = textoOriginal
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');

    mostrarResultado(textoEncriptado);
}   

function desencriptar () {
    let textoEncriptado = document.getElementById("textarea").value

    if (!textoEncriptado) {
        alert('Por favor digite el texto.');
        return;
      }
    if (!/^[a-zñ ]+$/.test(textoEncriptado)) {
        alert('Solo se permiten letras minúsculas sin caracteres especiales.');
        return;
      }

    let textoDesencriptado = textoEncriptado
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi,'u');

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let resultado = document.getElementById("textoderecha");
    resultado.textContent = texto;
    resultado.style.fontFamily = 'sans-serif';
    resultado.style.fontSize = '30px';
    resultado.style.color = "#495057"

    let muneco = document.getElementById("muneco");
    muneco.style.display = "none";
    
    // let copiar = getElementById("btnCopiar");
    // copiar.style.display = "block";
    // copiar.addEventListener ('click', () => {
    //     navigator.clipboard.writeText(resultado.textContent);
    //     alert("Texto copiado al portapapeles");
    // });
}