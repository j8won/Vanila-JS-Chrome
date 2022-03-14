const generateForm = document.querySelector("#generate-number");
const generateInput = document.querySelector("#generate-number input");
const guessForm = document.querySelector("#guess-number");
const guessInput = document.querySelector("#guessing-number");
const chooseForm = document.querySelector("#choose");
const resultForm = document.querySelector("#result");

const RANGE_NUM = "generateNumber";
let savedRangeNum = localStorage.getItem(RANGE_NUM);

function getGenerateNum(event) {
  event.preventDefault();
  let rangeNum = generateInput.value;
  if (savedRangeNum === null) {
    //range 추가
    saveRangeNum(rangeNum);
  } else {
    //range 삭제 후 추가
    localStorage.removeItem(RANGE_NUM);
    saveRangeNum(rangeNum);
  }
}

function saveRangeNum(rangeNum) {
  localStorage.setItem(RANGE_NUM, rangeNum);
  savedRangeNum = localStorage.getItem(RANGE_NUM);
  guessInput.setAttribute("max", savedRangeNum);
}

function guessComputerNum(event) {
  event.preventDefault();
  const guessNum = parseInt(guessInput.value);
  let computerNum = Math.ceil(Math.random() * guessNum);

  answer(guessNum, computerNum);
}

function answer(user, computer) {
  chooseForm.innerText = `YOU CHOSE: ${user}, THE MACHINS CHOSE: ${computer}.`;
  if (user === computer) {
    resultForm.innerText = "You won!";
  } else {
    resultForm.innerText = "You lost!";
  }
}

generateForm.addEventListener("submit", getGenerateNum);
guessForm.addEventListener("submit", guessComputerNum);
