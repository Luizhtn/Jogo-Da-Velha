const celulas=document.querySelector(".ceula")

let checarTurno = true;

let turno; 

const JOGADOR_X = "X"
const JOGADOR_O = "O"

let jogoacabou = false;

document.addEventListener ("clik", (event) =>) {
    if (event.target.matches(".celula")&&) !jogoacabou {
        jogar(event.target.id);
    } 
});