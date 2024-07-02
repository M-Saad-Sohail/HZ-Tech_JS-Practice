function squareMultiply(num1, num2) {
    function squarer(num) {
        return num * num;
    }
    return squarer(num1) * squarer(num2)
}
console.log(squareMultiply(5, 6));