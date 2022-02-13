const merge = (leftArray, rightArray) => {
    let i = 0;
    let j = 0;
    let splitInversions = 0;
    let mergedArray = []

    for(let k = 0; k < leftArray.length + rightArray.length; k++) {
        console.log(leftArray[i], rightArray[j]);
        if(leftArray[i] < rightArray[j] || !rightArray[j]){
            mergedArray[k] = leftArray[i];
            i++;
        } else {
            mergedArray[k] = rightArray[j];
            j++;
            splitInversions = splitInversions + (leftArray.length - i)
        }
    }

    return { mergedArray, splitInversions }
}

module.exports = { merge }