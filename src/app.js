import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
function selectionSort(arr) {
  let n = arr.length;
  let steps = []; // Store the result after each round

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    // Find the index of the minimum value from the remaining unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the current element at i with the minimum value found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    // Record the result of this round
    steps.push([...arr]);
  }

  return steps;
}


let arr2 = [4, 2, 5, 1];
let selectionSteps = selectionSort(arr2);
console.log("Selection sort steps:");
selectionSteps.forEach((step, i) => {
  console.log(`Pass ${i + 1}:`, step);
});

};
