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

const modal = document.querySelector(".modal")
const salir = document.querySelector("#salir")
const overlay = document.querySelector(".overlay")

const modal_abierto = function(){

    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const modal_cerrado = function(){

    modal.classList.add("hidden")
    overlay.classList.add("hidden")

}

salir.addEventListener('click',function(){

    modal_cerrado()

})

boton.addEventListener('click',function(){

    contador++
    contador_rounds.setAttribute('value',contador)
    
    if(contador >= 4){
        
        //contador_rounds.setAttribute('value',"Finish him!")
        modal_abierto()
        contador = 0
    }

    Resultado()

})


function Items(player1,player2){

    const random1 = Math.floor(Math.random() * elementos.length)
    const random2 = Math.floor(Math.random() * elementos.length)
    // console.log("Random 1 "+random1)
    // console.log("Random 2 "+random2)
   
    //1 ./components/rock.png 2 ./components/hand.jpg 0 ./components/bloody-scissors.png
   // console.log(random,elementos[random])
     // img_player1 = elementos[random]
     //console.log(player1.getAttribute('src'))
     
    player1.setAttribute('src',elementos[random1])
    player2.setAttribute('src',elementos[random2])
     
    return player1,player2

}

function Resultado(){

    Items(img_player1,img_player2)

    let player_cadena = JSON.stringify(img_player1.src)
    //console.log(typeof player_cadena)
    let scorpion = img_player1.getAttribute('src')
    let sub_zero = img_player2.getAttribute('src')
    //console.log(imagen_player1) // ./components/rock.png
    //console.log(tijeras) // ./components/bloody-scissors.png
    
    //console.log(typeof player_cadena)//String
    //console.log(typeof imagen_player1)//String
    //console.log(typeof tijeras)//String
    
    //Si en imagen_player1 sale piedra gana a tijera
    
    
    console.log(scorpion) // ./components/rock.png
    console.log(sub_zero) // ./components/rock.png


    //PARTE EN LA QUE SCORPION GANA

    if(scorpion === piedra && sub_zero  === tijeras){

        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }else semCircIzq_Scorpion.style.background = "white"

        
        // alert("Scorpion saca piedra VS. "  + "Sub-Zero saca tijeras"+"\n"+       
        // "Scorpion gana a Sub Zero "+ "!Scorpion gana!")
        
        
    }else if(scorpion === papel && sub_zero  === piedra){

        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }else semCircIzq_Scorpion.style.background = "white"

        
        // alert("Scorpion saca papel VS. "  + "Sub-Zero saca piedra"+"\n"+       
        // "Scorpion gana a Sub Zero "+ "!Scorpion gana!")
        
    
    }else if(scorpion === tijeras && sub_zero  === papel){
        
        if(semCircDcha_Scorpion.style.background !== "white"){
            semCircDcha_Scorpion.style.background = "white"
        }else semCircIzq_Scorpion.style.background = "white"

        
        // alert("Scorpion saca tijeras VS. "  + "Sub-Zero saca papel"+"\n"+       
        // "Scorpion gana a Sub Zero "+ "!Scorpion gana!")
        
    }

    //PARTE EN LA QUE SUB-ZERO GANA

    if(sub_zero === piedra && scorpion  === tijeras){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }else semCircIzq_SubZero.style.background = "white"

        
        // alert("Sub-Zero saca piedra VS. "  + "Scorpion saca tijeras"+"\n"+       
        // "Sub-Zero gana a Scorpion "+ "!Sub-Zero gana!")
        
    }else if(sub_zero === papel && scorpion  === piedra){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }else semCircIzq_SubZero.style.background = "white"

        
        // alert("Sub-Zero saca papel VS. "  + "Scorpion saca piedra"+"\n"+       
        // "Sub-Zero gana a Scorpion "+ "!Sub-Zero gana!")
        
    
    }else if(sub_zero === tijeras && scorpion  === papel){
        
        if(semCircDcha_SubZero.style.background !== "white"){
            semCircDcha_SubZero.style.background = "white"
        }else semCircIzq_SubZero.style.background = "white"

        
        // alert("Sub-Zero saca tijeras VS. "  + "Scorpion saca papel"+"\n"+       
        // "Sub-Zero gana a Scorpion "+ "!Sub-Zero gana!")
        
    }


}
