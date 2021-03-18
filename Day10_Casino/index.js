const range = document.querySelector(".range");
const select = range.querySelector("span");
const maxNum = document.getElementById("jsRange");
const play = document.getElementById("jsplay");
const player = document.getElementById("chosenNum");
const text = document.querySelector(".text");
const result = document.querySelector(".result");
let change = [200, 200];

function handleRangeChange(event) {
  const value = event.target.value;
  select.innerText = value;
}

function playBtnClick() {
  const playerNum = player.value;
  const machineNum = parseInt(select.innerText, 10);
  const number = Math.floor(Math.random() * machineNum);
  change[0] = change[1];
  change[1] = playerNum;
  text.innerText = `You chose: ${playerNum}, the machine chose: ${number}`;
  if (change[0] !== change[1])
    result.innerText = parseInt(playerNum, 10) >= number ? "You Won!" : "You lost!";
}

if (maxNum) {
  maxNum.addEventListener("input", handleRangeChange);
}

if (play) {
  play.addEventListener("click", playBtnClick);
}