//Obtener elementos principales provenientes del HTML: entrada, botones, y salida.
const textoUsuario = document.querySelector (".texto-usuario");

const btnEncriptar = document.querySelector (".btn-encriptar");
const btnDesencriptar = document.querySelector (".btn-desencriptar");
const btnCopiar = document.querySelector (".btn-copiar")

const textoFinal = document.querySelector (".texto-resultado");


//`La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`
//...y viceversa. 


//Encriptador.
function encriptar() { 
    let mensaje = textoUsuario.value.toLowerCase().split('');  //Convierte el texto del usuario a minúsculas y luego lo parte en un array.

    //Conversión:
    for (let i = 0; i < mensaje.length; i++) { 
        mensaje[i] = mensaje[i].replace('e', 'enter');
        mensaje[i] = mensaje[i].replace('i', 'imes'); 
        mensaje[i] = mensaje[i].replace('a', 'ai');
        mensaje[i] = mensaje[i].replace('o', 'ober');
        mensaje[i] = mensaje[i].replace ('u', 'ufat')
    } 

    textoFinal.value = mensaje.join(''); //Trae el texto encriptado, volviéndolo string otra vez.
    resultado() //Abre el div con el resultado.
}


//Desencriptador. (solución alternativa).
function desencriptar () {
    let mensaje = textoUsuario.value.toLowerCase();

    //Llaves de encriptación:
    const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 

    //For de conversión:
    for (let i = 0; i < llaves.length; i++) {
        if (mensaje.includes (llaves[i][0])) {
            mensaje = mensaje.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }

    textoFinal.value = mensaje; //Trae el texto desencriptado.
    resultado() //Abre el div con el resultado.
}

//Función para el botón copiar.
function copiar () {
    navigator.clipboard.writeText(textoFinal.value);
    textoFinal.value = "";
}

//Esconde el resultado: texto encriptado/desencriptado:
document.querySelector(".texto-salida").style.display = 'none';
//Muestra el resultado: texto encriptado/desencriptado:
function resultado() {
    document.querySelector (".salida-inicial").style.display = 'none';
    document.querySelector(".texto-salida").style.display = 'flex';
}

//Eventos de botones con sus respectivas funciones.
btnEncriptar.onclick = encriptar; 
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar; 