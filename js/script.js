// Selectors

let dice = document.querySelector(".dice");
let score = document.querySelector(".score");

// Event listeners

dice.addEventListener("click", createDiceFace);

// dice faces

let arr = [
  [0, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
  [2, 0, 2],
  [2, 1, 2],
  [3, 0, 3],
];

// Functions

function createDiceFace() {
  let num = Math.floor(Math.random() * 6) + 1;

  clearDiceFace();
  createColsAndDots(num);
  score.innerText = num;
}

function clearDiceFace() {
  dice.innerHTML = "";
  dice.className = "dice";
}

function createColsAndDots(num) {
  let colsCount = 0;

  for (let i = 0; i < 3; i++) {
    if (arr[num - 1][i] !== 0) {
      let colClass = "";
      let dotsHtml = "";
      colsCount++;

      if (arr[num - 1][i] == 1) {
        switch (i) {
          case 0:
            colClass = "start";
            break;
          case 1:
            colClass = "center";
            break;
          case 2:
            colClass = "end";
            break;
        }
      } else {
        colClass = "between";
      }
      for (let j = 0; j < arr[num - 1][i]; j++) {
        dotsHtml += `<div class="dot"></div>`;
      }
      dice.innerHTML += `<div class="col ${colClass}">${dotsHtml}</div>`;
    }
  }
  if (colsCount > 1) {
    dice.classList.add("between");
  } else {
    dice.classList.add("align-center");
  }
}
