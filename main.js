/**
 * membuat function untuk ambil probability pilihan yg akan dikeluarkan oleh computer
 * membuat function untuk mengambil nilai dari user
 * function untuk mengambil pemenang dari user / computer
 */


function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function getHumanChoice(input) {
    input = input.toLowerCase();
    if (input === "batu") {
        input = 0;
    } else if (input === "gunting") {
        input = 1;
    } else if (input === "kertas") {
        input = 2;
    } else {
        input = null;
    }

    return input;
}

const humanChoice = getHumanChoice(prompt("masukan pilihanmu").toString());
const computerChoice = getComputerChoice();

console.log(humanChoice)
console.log(computerChoice)