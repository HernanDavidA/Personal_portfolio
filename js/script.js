
const writingMachine = document.querySelector("#writeMachine");
const words = ["Hola, soy", "Welcome, i'm", "Salut, je suis"]

const designBottom = document.querySelector(".fondo")
const maxLength = designBottom.offsetWidth;
const iconWidth = 8
const limiteIcons = Math.floor(maxLength / iconWidth)
let indiceInicial = 0



// ==== WRITING MACHINE EFFECT =====
function maquinaEscribir(){
    
    let textArray = words[indiceInicial];
    textArray = textArray.split("");

    let i= 0;

    const mostrarMensaje = setInterval(()=>{
        writingMachine.textContent += textArray[i];
        i++;
    
        if(textArray.length == i){
            clearInterval(mostrarMensaje)

            setTimeout(()=>{
                borrarPalabras()
            },1000)
        }
    },200)

}
function borrarPalabras(){
 let texto = writingMachine.textContent;
    const borrarSaludo = setInterval(()=>{

        texto = texto.slice(0, -1);
        writingMachine.textContent = texto;

        if(texto == ""){
            clearInterval(borrarSaludo)
            indiceInicial = (indiceInicial + 1) % words.length
            setTimeout(()=>{
                maquinaEscribir()
            },500)
        }
    },100)

}
maquinaEscribir()

// BOTTOM 2 WINDOW


function bottom(){
designBottom.innerHTML += ``;
console.log(limiteIcons);
for (let index = 0; index < limiteIcons; index++) {
    
    designBottom.innerHTML +=`

    <i class='bx bxs-heart m-4 index' ${index} style='color: var(--picton-blue-200);'></i>
    <i class='bx bxs-square m-4 index' ${index} style='color: var(--picton-blue-200);'></i>`
    
}

}

bottom()