function analyseArray(arr){
    let object = {}

    //fFinding max and min values
    arr.sort();
    let max = arr[arr.length-1]
    let min = arr[0]

    //finding avg
    let sum = arr.reduce((total, current) => total + current, 0)
    let avg = sum/arr.length

    //assigning to object values
    object.average = avg
    object.minimum = min
    object.maximum = max
    object.length = arr.length

    return object

}

module.exports = analyseArray;

