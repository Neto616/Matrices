const buttonClick = document.getElementById('btn');
const matriz1 = document.querySelector('#A');
const matriz2 = document.querySelector('B');
const respuesta = document.querySelector('#R');

buttonClick.addEventListener('click', actionButton);

    function actionButton(){
        listenClickBtn(matriz1.value, matriz2.value)
    }

    function listenClickBtn(matriz1, matriz2){
     let num= ""
     let arreglo = [];
     
     for (let i=0; i < matriz1.length; i++){
        if(matriz1[i]==="\n"){
            for(let j = 0; j < matriz1.length; j++)
            if(matriz1[i]==="\n"){
                arreglo [i][j] = num
            }else if(i==matriz1.length-1){
                num = num.concat(matriz1[i])
                arreglo.push(num)
            }else if(matriz1[i]!==","){
                num = num.concat(matriz1[i])
            }else if(matriz1[i] ==","){
                arreglo.push(num)
                num=""
            }
        }
        else if(i==matriz1.length-1){
            num = num.concat(matriz1[i])
            arreglo.push(num)
        }else if(matriz1[i]!==","){
            num = num.concat(matriz1[i])
        }else if(matriz1[i] ==","){
            arreglo.push(num)
            num=""
        }
        // else if(i==matriz1.length-1){
        //     num = num.concat(matriz1[i])
        //     arreglo.push(num)
        // }else if(matriz1[i]!==","){
        //     num = num.concat(matriz1[i])
        // }else if(matriz1[i] ==","){
        //     arreglo.push(num)
        //     num=""
        // }
       
     }
     console.log(arreglo)
        //  for(let i = 0; i < matriz1.length; i++){
    //     if(matriz1[i]==='\n'){
    //         console.log(palabra)
    //         palabra = ""
    //     }else if (i === matriz1.length-1){
    //         palabra = palabra.concat(matriz1[i])
    //         console.log(palabra)
    //     }else{
    //         palabra = palabra.concat(matriz1[i])
    //     }
    //  }
    } 
