let cell = document.querySelectorAll('.slot')
const table = document.querySelector('table')
let gameEnded = false;
const game = {
  board: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  isPlayerOne: true,

  toggleTurn: function () {
    this.isPlayerOne = !this.isPlayerOne
  },

  reset: function () {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
  },

  placeChecker: (e) => {
    if (gameEnded) { return }
    let col = e.target.cellIndex
    let row = e.target.parentElement.rowIndex
    // console.log(e.target.parentElement.rowIndex)
    if (game.board[row][col] === 0) {
      for (let i = row; i < 5; i++) {
        if (game.board[i][col] !== 0) {
          game.board[i - 1][col] = game.isPlayerOne ? "R" : "B"
          row = i - 1
          break
        } else if (i === 4) {
          game.board[i][col] = game.isPlayerOne ? "R" : "B"
          row = i
        }
      }
      game.renderBoard()
      game.winningCases(row, col)
      game.toggleTurn()
    }
  },

  winningCases: function (row, col) {
    // console.log(row, "ROW")
    // console.log(col, 'COL')
    this.checkUpWinsR(col)
    this.checkUpWinsB(col)
    this.checkDownWinsR(row)
    this.checkDownWinsB(row)
    this.checkDieWinsB(row, col)
    this.checkDieWinsR(row, col)
  },

  checkUpWinsR: function (col) {
    let rowArray = []
    for (let row = 0; row < this.board.length; row++) {
      rowArray.push(this.board[row][col])
    }
    let count = 1
    // console.log(rowArray)
    for (let i = 0; i <= rowArray.length; i++) {
      if (rowArray[i] === "R" && rowArray[i + 1] === "R") {
        count++
        // console.log(count, "<--count")
        if (count == 4) {
          let winnerRed = document.querySelector(".winners")
          winnerRed.innerHTML = "Red Wins"
          // winnerRed.style.visibility  = "Visible"
          // console.log("winner")
          gameEnded = true;

        }
      } else {
        count = 1
      }

    }
  },

  checkUpWinsB: function (col) {
    let rowArray = []
    for (let row = 0; row < this.board.length; row++) {
      rowArray.push(this.board[row][col])
    }
    let count = 1
    // console.log(rowArray)
    for (let i = 0; i <= rowArray.length; i++) {
      if (rowArray[i] === "B" && rowArray[i + 1] === "B") {
        count++
        // console.log(count, "<--count")
        if (count == 4) {
          // console.log("winner")
          let winnerRed = document.querySelector(".winners")
          winnerRed.innerHTML = "Blue Wins"
          gameEnded = true;


        }
      } else {
        count = 1
      }

    }
  },

  checkDieWinsR: function (row, col) {
    //fucking hell
    if (this.board[row][col] == "R"
      && this.board[row + 1]
      && this.board[row + 1][col - 1]
      && this.board[row + 1][col - 1] == "R"
      && this.board[row + 1]
      && this.board[row - 1][col + 1]
      && this.board[row - 1][col + 1] == "R"
      && this.board[row - 2]
      && this.board[row - 2][col + 2]
      && this.board[row - 2][col + 2] == "R") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

    ////-+-+
    if (this.board[row][col] == "R"
      && this.board[row - 1]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "R"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "R"
      && this.board[row + 2]
      && this.board[row + 2][col + 2]
      && this.board[row + 2][col + 2] == "R") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

    ////+-+-
    if (this.board[row][col] == "R"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "R"
      && this.board[row - 1]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "R"
      && this.board[row - 2]
      && this.board[row - 2][col - 2]
      && this.board[row - 2][col - 2] == "R") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

    //++
    if (this.board[row][col] == "R"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "R"
      && this.board[row + 2]
      && this.board[row + 2][col + 2]
      && this.board[row + 2][col + 2] == "R"
      && this.board[row + 3]
      && this.board[row + 3][col + 3]
      && this.board[row + 3][col + 3] == "R") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

    //--
    if (this.board[row][col] == "R"
      && this.board[row - 1]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "R"
      && this.board[row - 2]
      && this.board[row - 2][col - 2]
      && this.board[row - 2][col - 2] == "R"
      && this.board[row - 3]
      && this.board[row - 3][col - 3]
      && this.board[row - 3][col - 3] == "R") {
      // console.log("winner --")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

    //+-
    if (this.board[row][col] == "R"
      && this.board[row + 1]
      && this.board[row + 1][col - 1]
      && this.board[row + 1][col - 1] == "R"
      && this.board[row + 2]
      && this.board[row + 2][col - 2]
      && this.board[row + 2][col - 2] == "R"
      && this.board[row + 3]
      && this.board[row + 3][col - 3]
      && this.board[row + 3][col - 3] == "R") {
      // console.log("winner +-")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }


    //-+
    if (
      this.board[row][col] == "R"
      && this.board[row - 1]
      && this.board[row - 1][col + 1]
      && this.board[row - 1][col + 1] == "R"
      && this.board[row - 2]
      && this.board[row - 2][col + 2]
      && this.board[row - 2][col + 2] == "R"
      && this.board[row - 3]
      && this.board[row - 3][col + 3]
      && this.board[row - 3][col + 3] == "R"
    ) {
      // console.log("winner from -+")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Red Wins"
      gameEnded = true;
    }

  },

  checkDieWinsB: function (row, col) {
    ////fuckin hell
    if (this.board[row][col] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col - 1]
      && this.board[row + 1][col - 1] == "B"
      && this.board[row + 1]
      && this.board[row - 1][col + 1]
      && this.board[row - 1][col + 1] == "B"
      && this.board[row - 2]
      && this.board[row - 2][col + 2]
      && this.board[row - 2][col + 2] == "B") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }

    ////-+-+
    if (this.board[row][col] == "B"
      && this.board[row - 1]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "B"
      && this.board[row + 2]
      && this.board[row + 2][col + 2]
      && this.board[row + 2][col + 2] == "B") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }


    ////+-+-
    if (this.board[row][col] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "B"
      && this.board[row - 2]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "B"
      && this.board[row - 2]
      && this.board[row - 2][col - 2]
      && this.board[row - 2][col - 2] == "B") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }

    //++
    if (this.board[row][col] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "B"
      && this.board[row + 2]
      && this.board[row + 2][col + 2]
      && this.board[row + 2][col + 2] == "B"
      && this.board[row + 3]
      && this.board[row + 3][col + 3]
      && this.board[row + 3][col + 3] == "B") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }

    //++
    if (this.board[row][col] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col + 1]
      && this.board[row + 1][col + 1] == "B"
      && this.board[row + 2]
      && this.board[row + 2][col + 2]
      && this.board[row + 2][col + 2] == "B"
      && this.board[row + 3]
      && this.board[row + 3][col + 3]
      && this.board[row + 3][col + 3] == "B") {
      // console.log("winner ++")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }

    //--
    if (this.board[row][col] == "B"
      && this.board[row - 1]
      && this.board[row - 1][col - 1]
      && this.board[row - 1][col - 1] == "B"
      && this.board[row - 2]
      && this.board[row - 2][col - 2]
      && this.board[row - 2][col - 2] == "B"
      && this.board[row - 3]
      && this.board[row - 3][col - 3]
      && this.board[row - 3][col - 3] == "B") {
      // console.log("winner --")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }

    //+-
    if (this.board[row][col] == "B"
      && this.board[row + 1]
      && this.board[row + 1][col - 1]
      && this.board[row + 1][col - 1] == "B"
      && this.board[row + 2]
      && this.board[row + 2][col - 2]
      && this.board[row + 2][col - 2] == "B"
      && this.board[row + 3]
      && this.board[row + 3][col - 3]
      && this.board[row + 3][col - 3] == "B") {
      // console.log("winner +-")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;
    }


    //-+
    if (
      this.board[row][col] == "B"
      && this.board[row - 1]
      && this.board[row - 1][col + 1]
      && this.board[row - 1][col + 1] == "B"
      && this.board[row - 2]
      && this.board[row - 2][col + 2]
      && this.board[row - 2][col + 2] == "B"
      && this.board[row - 3]
      && this.board[row - 3][col + 3]
      && this.board[row - 3][col + 3] == "B"
    ) {
      // console.log("winner from -+")
      let winnerRed = document.querySelector(".winners")
      winnerRed.innerHTML = "Blue Wins"
      gameEnded = true;

    }

  },

  checkDownWinsR: function (row) {
    let colArray = []
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {

      })
    })
    for (let col = 0; col < this.board[row].length; col++) {
      // console.log('row ====>', row)
      // console.log('col======>', col)
      colArray.push(this.board[row][col])
    }
    let count = 1
    // console.log(colArray, "<--colArray")
    for (let i = 0; i <= colArray.length; i++) {
      if (colArray[i] === "R" && colArray[i + 1] === "R") {
        count++
        // console.log(count, "<--count")
        if (count == 4) {
          // console.log("winner")
          let winnerRed = document.querySelector(".winners")
          winnerRed.innerHTML = "Red Wins"
          gameEnded = true;

        }
      } else {
        count = 1
      }

    }
  },

  checkDownWinsB: function (row) {
    let colArray = []
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {

      })
    })
    for (let col = 0; col < this.board[row].length; col++) {
      // console.log('row ====>', row)
      // console.log('col======>', col)
      colArray.push(this.board[row][col])
    }
    let count = 1
    // console.log(colArray, "<--colArray")
    for (let i = 0; i <= colArray.length; i++) {
      if (colArray[i] === "B" && colArray[i + 1] === "B") {
        count++
        console.log(count, "<--count")
        if (count == 4) {
          // console.log("winner")
          let winnerRed = document.querySelector(".winners")
          winnerRed.innerHTML = "Blue Wins"
          gameEnded = true;

        }
      } else {
        count = 1
      }

    }
  },

  renderBoard: function () {
    this.board.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        let cell = table.rows[rowIndex].cells[colIndex]
        this.board[rowIndex][colIndex] === "R"
          ? cell.style = "background-color: red;"
          : this.board[rowIndex][colIndex] === "B"
            ? cell.style = "background-color: blue;"
            : cell.style = "background-color: white;"
      })
    })
  }
}

function listeners() {
  cell.style = "background-color: white;"
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', game.placeChecker)
  }
}
listeners()

// let variableNameAudio = new Audio("mp3/Chinese battle music - Xian.mp3");
// function music() {
//   document.querySelector("BODY")[0].addEventListener("load", () => {
//     variableNameAudio.play(); // place this where you want the audio to start
//   })
// }
// music()