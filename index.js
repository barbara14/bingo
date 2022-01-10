/* Bombo:
- Generar un array (1 a 90)
- Desordenar el array
*/

/*Carton 1:
- Generar un array (1 a 90)
- Desordenar el array
- Quedarse solo con los primeros 15 números
*/

/*Carton 2:
- Generar un array (1 a 90)
- Desordenar el array
- Quedarse solo con los primeros 15 números
*/

const generateNumbers = function () {
  let NUMBERS = _.range(1, 91);
  return (NUMBERS = _.shuffle(NUMBERS));
};

const randomCardboard = () => {
  let cardboard = generateNumbers().slice(0, 15);
  cardboard = _.shuffle(cardboard);
  const container = document.querySelectorAll(".boxPlayer > .cardboard");
  console.log(container);
  for (let i of cardboard) {
    const number = document.createElement("div");
    number.textContent = i;
    number.className = `number number${i}`;
    console.log(number);
    container.appendChild(number);
  }
};

const baseNumbers = _.range(1, 91);

const nextTurn = function () {
  let luckyNumber = baseNumbers[Math.floor(Math.random() * 91)];
  let divRandomNumber = document.querySelector(".randomNumber");
  divRandomNumber.textContent = luckyNumber;

  _.pull(baseNumbers, luckyNumber);
  checkWin();
};

const checkWin = function () {};

const btn = document.querySelector("button");
btn.addEventListener("click", nextTurn);

window.addEventListener("DOMContentLoaded", () => {
  // const Player = document.querySelectorAll(".boxPlayer .cardboard");
  // const CPU = document.querySelectorAll(".boxCPU .cardboard");
  // randomCardboard(Player);
  randomCardboard();
});
