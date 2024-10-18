function addNumbers() {
    // Get the values from the input fields and convert them to numbers
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Check if both inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Add the numbers and display the result
        const sum = num1 + num2;
        document.getElementById('result').textContent = sum;
    } else {
        document.getElementById('result').textContent = "Please enter valid numbers.";
    }
}
