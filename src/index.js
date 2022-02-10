
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) { return [] }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) { matrix[i].reverse()}
  }

  return matrix.reduce((acc, elemMatrix) => acc.concat(elemMatrix), []) 
  
}
