function findLargestPerfectSquare(arr) {
  let largestPerfectSquare = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      if (arr[i] > largestPerfectSquare) {
        largestPerfectSquare = arr[i];
      }
    }
  }
  
  return largestPerfectSquare;
}

// Пример использования:
function isBitwiseOROddOrEven(arr) {
  let result = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
  result = result | arr[i];
  console.log(result);
  }
  
  return result % 2 === 0 ? "even" : "odd";
  }

const array = [2,10,12];
const largestPerfectSquare = findLargestPerfectSquare(array);
console.log(isBitwiseOROddOrEven(array));
console.log(largestPerfectSquare); // Вывод: 36
