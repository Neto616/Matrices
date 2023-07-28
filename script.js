const buttonClick = document.querySelector('#btn');
const matriz1 = document.querySelector('#A');
const matriz2 = document.querySelector('#B');
const respuesta = document.querySelector('#R');

buttonClick.addEventListener('click', listenClickBtn);

function listenClickBtn(){
    let arreglo = []
    const palabra="Hola, mucho gusto, soy nestor"
    let palabraNueva = ""
    for (let i = 0; i<palabra.length; i++){
        if(palabra[i]===","){
            arreglo.push(palabraNueva)
            palabraNueva = ""
        }else{
            palabraNueva = palabraNueva.concat(palabra[i])
        }
    }
    console.log(arreglo)
    console.log(palabraNueva)
    respuesta.value = matriz1.value + matriz2.value
    
    return respuesta.value 
}