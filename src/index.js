const boton = document.querySelector("#boton")
const reiniciar = document.querySelector("#reiniciar")
const tijeras = "./components/bloody-scissors.png"
const piedra = "./components/rock.png"
const papel = "./components/papel.jpg"
const img_player1 = document.querySelector("#img_player1")
const img_player2 = document.querySelector("#img_player2")
const semCircIzq_Scorpion = document.querySelector(".sc_scorpion")
const semCircDcha_Scorpion = document.querySelector(".si_scorpion")
const semCircIzq_SubZero = document.querySelector(".sc_subzero")
const semCircDcha_SubZero = document.querySelector(".si_subzero")
const contador_rounds = document.querySelector("#contador")


let contador = 0
let elementos = [tijeras,piedra,papel]

const modal_scorpion = document.querySelector(".modal_scorpion")
const modal_subzero = document.querySelector(".modal_subzero")
const salir = document.querySelector("#salir")
const overlay = document.querySelector(".overlay")

const modal_abierto_scorpion = function(){

    modal_scorpion.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const modal_cerrado_scorpion = function(){

    modal_scorpion.classList.add("hidden")
    overlay.classList.add("hidden")

}

overlay.addEventListener("click",modal_cerrado_scorpion)


const modal_abierto_subzero = function(){

    modal_subzero.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const modal_cerrado_subzero = function(){

    modal_subzero.classList.add("hidden")
    overlay.classList.add("hidden")

}

overlay.addEventListener("click",modal_cerrado_subzero)


boton.addEventListener('click',function(){

    console.log("Boton habilitado")
    contadorRounds()

})

reiniciar.addEventListener('click',function(){

    console.log("Reinciar habilitado")
    reincio()

})


function switchBotonesReiniciar(){ //DESHABILITAR EL BOTON REINICIAR

    if(boton.disabled != true){

        reiniciar.disabled = true

    }

}



function switchBotonesActivar(){ //DESHABILITAR EL BOTON REINICIAR

    //reiniciar.disabled = true -> Si reiniciar está habilitado

    if(reiniciar.disabled = true){

       // console.log("Boton reiniciar habilitado")
        boton.disabled = false //Se habilita el boton MK
        //console.log("Valor contador: "+contador_rounds.value)
 
    }
    if(contador > 1){
        
        //console.log("Parte contador de Switch")
        //contador_rounds.value = "0"
        contador = 0
        console.log(contador)
        contador_rounds.setAttribute('value',contador)
    }

}

//TENDRIA QUE REINICIAR LOS COLORES DE LOS ROUNDS A VERDE ( OK )
// TENDRIA QUE REINICIAR EL CONTADOR A 0


function reincio(){

    switchBotonesActivar()

    if(semCircDcha_Scorpion.style.background  == "white" && semCircIzq_Scorpion.style.background == "white" || semCircDcha_Scorpion.style.background  == "white" || semCircIzq_Scorpion.style.background == "white"){
   
        // #5cb85c verde
        //console.log("Entra reincio Scorpion")
        semCircDcha_Scorpion.style.background = "#5cb85c"
        semCircIzq_Scorpion.style.background  = "#5cb85c"
        
    }
    
    if(semCircDcha_SubZero.style.background  == "white" && semCircIzq_SubZero.style.background == "white" || semCircDcha_SubZero.style.background  == "white" || semCircIzq_SubZero.style.background == "white"){
        
        //console.log("Entra reincio Sub Zero")
        semCircDcha_SubZero.style.background = "#5cb85c"
        semCircIzq_SubZero.style.background  = "#5cb85c"
    }

}


function contadorRounds(){


    switchBotonesReiniciar()

    console.log("Entra contadorRounds")
    //SI LAS DOS IMAGENES SON IGUALES NO SUME EL CONTADOR

    Resultado() //DIBUJA EL FONDO BLANCO A LOS ROUNDS
    let scorpion = img_player1.getAttribute('src') //  ./components/..."
    let sub_zero = img_player2.getAttribute('src')//   ./components/..."

    //console.log("Scorpion: "+scorpion) //./components/bloody-scissors.png
    //console.log("Sub Zero: "+sub_zero)
   

    if(scorpion == tijeras && sub_zero == tijeras ){

            console.log("Las dos imagenes son tijeras: Empate")
        
        }else if(scorpion == piedra  && sub_zero == piedra ){

            console.log("Las dos imagenes son piedras: Empate")
        

        }else if(scorpion  == papel && sub_zero == papel ){

            console.log("Las dos imagenes son papel: Empate")

        }else{

            contador++
            contador_rounds.setAttribute('value',contador)
        }
    
}




//FUNCION EN LA QUE OBTIENE UNA IMAGEN ALEATORIA DEL ARRAY elementos, Y ESTABLECE EL ATRIBUTO
function Items(player1,player2){

    const random1 = Math.floor(Math.random() * elementos.length)
    const random2 = Math.floor(Math.random() * elementos.length)
     
    player1.setAttribute('src',elementos[random1])
    player2.setAttribute('src',elementos[random2])
     
    return player1,player2

}

//FUNCION QUE IMPLENTE EL COLOR BLANCO A LOS ROUNDS GANADOS
function Resultado(){

    Items(img_player1,img_player2)

    let scorpion = img_player1.getAttribute('src')
    let sub_zero = img_player2.getAttribute('src')

    //PARTE EN LA QUE SCORPION GANA

    if(scorpion === piedra && sub_zero  === tijeras){

        console.log("Piedra vs tijeras")
        
        if(semCircDcha_Scorpion.style.background !== "white"){

            semCircDcha_Scorpion.style.background = "white"

            }else if(semCircIzq_Scorpion.style.background !== "white"){

                    semCircIzq_Scorpion.style.background = "white"

            }
        }
            
 
        
        if(scorpion === papel && sub_zero  === piedra){
            
            console.log("Papel vs piedra")

            if(semCircDcha_Scorpion.style.background !== "white"){
    
                semCircDcha_Scorpion.style.background = "white"
    
                }else if(semCircIzq_Scorpion.style.background !== "white"){
    
                        semCircIzq_Scorpion.style.background = "white"
    
                }
            }

        if(scorpion === tijeras && sub_zero  === papel){
            
            console.log("Tijeras vs papel")

            if(semCircDcha_Scorpion.style.background !== "white"){
    
                semCircDcha_Scorpion.style.background = "white"
    
                }else if(semCircIzq_Scorpion.style.background !== "white"){
    
                        semCircIzq_Scorpion.style.background = "white"
    
                }
            }
                

            //COMPROBACION DE QUE LOS DOS ESTEN EN BLANCO

    if(semCircDcha_Scorpion.style.background  == "white" && semCircIzq_Scorpion.style.background == "white"){
            
            console.log("SCORPION GANA")
            modal_abierto_scorpion()
            boton.disabled = true
            reiniciar.disabled = false
                    
    }


 //PARTE EN LA QUE SUB-ZERO GANA

            if(sub_zero  === piedra && scorpion  === tijeras){

                console.log("Piedra vs tijeras")
                
                if(semCircDcha_SubZero.style.background !== "white"){
        
                    semCircDcha_SubZero.style.background = "white"
        
                    }else if(semCircIzq_SubZero.style.background !== "white"){
        
                            semCircIzq_SubZero.style.background = "white"
        
                    }
                }
                    
         
                
                if(sub_zero === papel && scorpion  === piedra){
                    
                    console.log("Papel vs piedra")
        
                    if(semCircDcha_SubZero.style.background !== "white"){
            
                        semCircDcha_SubZero.style.background = "white"
            
                        }else if(semCircIzq_SubZero.style.background !== "white"){
            
                                semCircIzq_SubZero.style.background = "white"
            
                        }
                    }
        
                if(sub_zero === tijeras && scorpion  === papel){
                    
                    console.log("Tijeras vs papel")
        
                    if(semCircDcha_SubZero.style.background !== "white"){
            
                        semCircDcha_SubZero.style.background = "white"
            
                        }else if(semCircIzq_SubZero.style.background !== "white"){
            
                                semCircIzq_SubZero.style.background = "white"
            
                        }
                    }
        
    if(semCircDcha_SubZero.style.background  == "white" && semCircIzq_SubZero.style.background == "white"){
            
            console.log("SUBZERO GANA")
            modal_abierto_subzero()
            boton.disabled = true
            reiniciar.disabled = false
    }

}