let numeroIngresado = 0 //global
let aux = ""
let enOperacion = false
function HacerClick(numero){
    
    const input = document.getElementById("caja")
    if(input.value == "0" || enOperacion ){
        input.value = numero
        enOperacion = false
    }else{
        input.value+= numero
    }
    
}

function operacionClick(tipo){
    const input = document.getElementById("caja")
    if(tipo == "C"){
        input.value = "0"
    }else if(tipo == "igual"){
        if(aux=="suma"){
            const resultado = parseInt(input.value) + parseInt(numeroIngresado)
            input.value = resultado + ""
        
        }
        else if(aux == "resta"){
            const resultado =   parseInt(numeroIngresado) - parseInt(input.value)
            input.value = resultado + ""
        }else if(aux=="multi"){
            const resultado =   parseInt(numeroIngresado) * parseInt(input.value)
            input.value = resultado + ""
        }else{
            console.log(numeroIngresado)
            console.log(input.value)
            if(input.value = 0){
                input.value = "No se puede dividir entre 0"
            }else{
                const resultado =   parseInt(numeroIngresado) / parseInt(input.value)
                input.value = resultado + ""
            }
            console.log(resultado)
            
        }
    } 
    else{
        numeroIngresado = input.value
        enOperacion = true
        aux = tipo
        console.log(aux)
    }
      


}
