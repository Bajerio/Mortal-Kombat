const boton = document.querySelector("#boton")
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

    contadorRounds()

})



function contadorRounds(){

    //SI LAS DOS IMAGENES SON IGUALES NO SUME EL CONTADOR
     //img_player1.src = http://localhost:5173/components/bloody-scissors.png
    //tijeras =  ./components/bloody-scissors.png
    //console.log(img_player1.src) //"http://localhost:5173/components/..."
    //console.log(img_player2.src) //"http://localhost:5173/components/..."

    Resultado() //DIBUJA EL FONDO BLANCO A LOS ROUNDS
    let scorpion = img_player1.getAttribute('src') //  ./components/..."
    let sub_zero = img_player2.getAttribute('src')//   ./components/..."

    console.log("entra en boton")

     console.log("Scorpion: "+scorpion) //./components/bloody-scissors.png
     console.log("Sub Zero: "+sub_zero)
     //console.log(tijeras) //./components/bloody-scissors.png

     let ruta_tijeras = "http://localhost:5173/components/bloody-scissors.png"
    let ruta_piedra = "http://localhost:5173/components/rock.png"
    let ruta_papel = "http://localhost:5173/components/papel.jpg"

   

    if(scorpion == tijeras && sub_zero == tijeras ){

        console.log("Las dos imagenes son tijeras: Empate")
        
        }else if(scorpion == piedra  && sub_zero == piedra ){

            console.log("Las dos imagenes son piedras: Empate")
        

        }else if(scorpion  == papel && sub_zero == papel ){

            console.log("Las dos imagenes son papel: Empate")

        }else{

            contador++
            console.log("Sumado +1 al contador")
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

    let player_cadena = JSON.stringify(img_player1.src)
    let scorpion = img_player1.getAttribute('src')
    let sub_zero = img_player2.getAttribute('src')

    //Items(scorpion,sub_zero)

    //Si en imagen_player1 sale piedra gana a tijera
    
    
   // console.log(scorpion)  ./components/rock.png
   //console.log(sub_zero) ./components/rock.png


    //PARTE EN LA QUE SCORPION GANA

    if(scorpion === piedra && sub_zero  === tijeras){

        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }
            else if(semCircIzq_Scorpion.style.background !== "white"){
                semCircIzq_Scorpion.style.background = "white"
            }
                if(semCircDcha_Scorpion.style.background  == "white" && semCircIzq_Scorpion.style.background == "white"){
                    modal_abierto_scorpion()
                }
        
    }else if(scorpion === papel && sub_zero  === piedra){

        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }
        else if(semCircIzq_Scorpion.style.background !== "white"){
            semCircIzq_Scorpion.style.background = "white"
        } 
        if(semCircDcha_Scorpion.style.background == "white" && semCircIzq_Scorpion.style.background == "white"){
                    modal_abierto_scorpion()
                }

    
    }else if(scorpion === tijeras && sub_zero  === papel){
        
        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }
        else if(semCircIzq_Scorpion.style.background !== "white"){
            semCircIzq_Scorpion.style.background = "white"
        } 
        if(semCircDcha_Scorpion.style.background == "white" && semCircIzq_Scorpion.style.background == "white"){
                    modal_abierto_scorpion()
        }

    }

    //PARTE EN LA QUE SUB-ZERO GANA

    if(sub_zero === piedra && scorpion  === tijeras){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }
        else if(semCircIzq_SubZero.style.background !== "white"){
            semCircIzq_SubZero.style.background = "white"
        } 
        if(semCircDcha_SubZero.style.background == "white" && semCircIzq_SubZero.style.background == "white"){
                    modal_abierto_subzero()
        }

    }else if(sub_zero === papel && scorpion  === piedra){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }
        else if(semCircIzq_SubZero.style.background !== "white"){
            semCircIzq_SubZero.style.background = "white"
        } 
        if(semCircDcha_SubZero.style.background == "white" && semCircIzq_SubZero.style.background == "white"){
                    modal_abierto_subzero()
        }

    
    }else if(sub_zero === tijeras && scorpion  === papel){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }
        else if(semCircIzq_SubZero.style.background !== "white"){
            semCircIzq_SubZero.style.background = "white"
        } 
        if(semCircDcha_SubZero.style.background == "white" && semCircIzq_SubZero.style.background == "white"){
                    modal_abierto_subzero()
        }

        
    }


}
