let imagem = document.getElementById("img-content");
const buttons = document.getElementById("buttons");
buttons.addEventListener("click",trafficLightControl);

let currentIndex = 0;
let intervalId = null;

function trafficLightControl(Event){
    stopAutomatic();
    turnOnLight[Event.target.id]();

}
const nextIndex  = () => currentIndex = currentIndex < 3? ++currentIndex : 0;

const stopAutomatic = () =>{
    clearInterval(intervalId);
}
const turnOnLight ={
    "red" : () => imagem.src = "vermelho.png",
    "yellow" : () => imagem.src = "amarelo.png",
    "green" : () => imagem.src = "verde.png",
    "automatic" : () => intervalId = setInterval(changeColorLight, 1000),
  "desligar" : () => imagem.src = "desligado.png",
}
const changeColorLight = () => {
        const colors = ["red" , "yellow" , "green", "desligar"];
        var letter = colors[currentIndex];
  console.log(currentIndex, letter)
        turnOnLight[letter]();
        nextIndex();
}



