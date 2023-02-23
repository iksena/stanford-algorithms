function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let i = 0; i < Math.floor((n + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const temp = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  return matrix;
}

// INPUT
// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const matrix1 = [[1, 2], [4, 5], [7, 8]];
// const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [8, 7, 6, 5], [4, 3, 2, 1]];

// CALL FUNCTION
// console.log(rotateMatrix(matrix1));
// console.log(rotateMatrix(matrix2));

function transposeMatrix(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!result[j]) result[j] = [];
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

// INPUT
const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix2 = [[1, 2, 3], [4, 5, 6]];

// CALL FUNCTION
console.log(transposeMatrix(matrix1)); // it should be [[1,4,7],[2,5,8],[3,6,9]]
console.log(transposeMatrix(matrix2)); // it should be [[1,4],[2,5],[3,6]]
