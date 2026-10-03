// arr = [7,1,4,5,6,3,2]
// Best time to buy and sell stock

function buyandSell(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);

    maxProfit = Math.max(maxProfit, arr[i] - minPrice);
  }
  return maxProfit;
}
console.log(buyandSell([7, 1, 4, 5, 6, 3, 2])); // 5
console.log(buyandSell([7, 6, 4, 3, 1])); // 0
console.log(buyandSell([2, 4, 1, 7])); // 6
