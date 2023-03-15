function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function heapify(array, i, heapSize) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  console.log(`largest=${largest}`, `l=${left}`, `r=${right}`, `size=${heapSize}`, array);

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, largest, heapSize);
  }
}

function heapSort(array) {
  // Build max heap
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }

  // Extract elements from heap one by one
  for (let i = array.length - 1; i > 0; i--) {
    // Move current root to end
    swap(array, 0, i);
    // Heapify reduced heap
    heapify(array, 0, i);
  }

  return array;
}

console.log(heapSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
