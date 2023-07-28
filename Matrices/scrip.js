const buttonClick = document.getElementById('btn');
const matriz1 = document.querySelector('#A');
const matriz2 = document.querySelector('#B');
const respuesta = document.querySelector('#R');


buttonClick.addEventListener('click', actionButton);

function actionButton(){
        const tilin = listenClickBtn(matriz1.value)
        const tilin2 = listenClickBtn(matriz2.value)
        console.log(tilin)
        console.log(tilin2)
    }

    function listenClickBtn(matriz){
     let num= ""
     let arregloAux = [];
     let arreglo = [];


     for (let i=0; i < matriz.length; i++){
        if(matriz[i]=="\n"){
            arregloAux.push(num)
            arreglo.push(arregloAux);
            arregloAux = []
            num= ""
        }else if(i==matriz.length-1){
            num = num.concat(matriz[i])
            arregloAux.push(num)
            arreglo.push(arregloAux)
        }else if(matriz[i]!==","){
            num = num.concat(matriz[i])
        }else if(matriz[i] ==","){
            arregloAux.push(num)
            num=""
        } 
    }
    return arreglo
} 
