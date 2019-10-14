module.exports = function solveSudoku(matrix) {
  // my solution
  //thanks for idea to https://github.com/mmerkes/sudoku_solvers
  
  let index
  let row
  let colm
  let found
  let empty = saveEmptyPositions(matrix)
  for (index = 0; index < empty.length;) {
    row = empty[index][0]
    colm = empty[index][1]
    value = matrix[row][colm] + 1
    found = false
    while(!found && value <= 9) {
      if (checkValue(matrix, colm, row, value)) {
        found = true
        matrix[row][colm] = value
        index++
      }
      else {
        value++
      }
    }
    if(!found) {
      matrix[row][colm] = 0
      index--
    }
  }

  return matrix


  function checkValue (matrix, colm, row, value) {
    if (checkRow(matrix, row, value) &&
        checkColm(matrix, colm, value) &&
        checkBox(matrix, colm, row, value)) {
          return true
        }
        else {
          return false
        }
  }

  function checkBox (matrix, colm, row, value) {
    let rowStart = Math.floor(row/3)*3
    let colmStart = Math.floor(colm/3)*3
    for (let i = rowStart; i < rowStart + 3; i++) {
      for (let j = colmStart; j < colmStart + 3; j++) {
        if (matrix[i][j] === value) {
          return false
        }
      }
    }
    return true
  }


  function checkColm (matrix, colm, value) {
    for (let i = 0; i < matrix.length; i++) {
      if(matrix[i][colm] === value) {
        return false
      }
    }
    return true
  }


  function checkRow (matrix, row, value) {
    for (let i = 0; i < matrix[row].length; i++) {
      if(matrix[row][i] === value) {
        return false
      }
    }
    return true
  }

  function saveEmptyPositions (matrix) {
    let emptyPositions = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === 0) {
          emptyPositions.push([i, j])
        }
      }
    }
    return emptyPositions;
  }
}
