function isEmpty(array) {
    if (array === undefined || array.length === 0) return true;
    else return false;
}

exports.min = function min(array) {
    if (isEmpty(array)) return 0;
    let min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];

        }
    }
    return min;
}

exports.max = function max(array) {
    if (isEmpty(array)) return 0;
    let max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

exports.avg = function avg(array) {
    let sum = 0;
    let average = 0;
    if (isEmpty(array)) return 0;
    else {
        array.map(function(num) {
            sum = sum + num;
        });
        average = sum / array.length;
    }
    return average;
}