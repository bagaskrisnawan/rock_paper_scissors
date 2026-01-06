const result = document.querySelector(".result")
const btn = document.querySelectorAll(".choice")

btn.forEach(btn => {
    btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    const comResult = getComputerChoice();
    const humanResult = getHumanChoice(choice);
    const vsResult = playRound(humanResult,comResult);
    result.textContent = Object.values(vsResult).join(" ");
    console.log(choice);
    console.log(vsResult);
    })
});


//============FUNCTION==================
function getHumanChoice(choice) {
        switch (choice) {
        case "rock":
            return 0;
        case "scissors":
            return 1;
        case "paper":
            return 2;
        default:
            return undefined;
}};

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(human, com) {
  const names = ["Rock", "Scissors", "Paper"];

  let result;
  if (human === com) {
    result = "Draw";
  } else if (
    (human === 0 && com === 1) ||
    (human === 1 && com === 2) ||
    (human === 2 && com === 0)
  ) {
    result = "You Win";
  } else {
    result = "You Lose";
  }

  return {
    human: names[human],
    str1 : "vs",
    computer: names[com],
    str2 : "=",
    result
  };
}



//======================================
