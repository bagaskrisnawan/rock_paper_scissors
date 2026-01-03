/**
 * membuat function untuk ambil probability pilihan yg akan dikeluarkan oleh computer
 * membuat function untuk mengambil nilai dari user
 * function untuk mengambil pemenang dari user / computer
 */


function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice(input = prompt("Rock/Scissors/Paper").toString()) {
    switch (input.toLowerCase()) {
        case "batu":
            return 0;
        case "gunting":
            return 1;
        case "kertas":
            return 2;
        default:
            return undefined;
    }
}


function playRound(humanChoice, computerChoice) {
    let x = humanChoice - computerChoice;
    switch (x) {
        case 0:
            return alert("DRAW");
        case 1:
        case -2:
            return alert("LOSE");
        case -1:
        case 2:
            return alert("WIN");
        default:
            return alert("ERROR");
    }
    
}

playRound(getHumanChoice(),getComputerChoice())
