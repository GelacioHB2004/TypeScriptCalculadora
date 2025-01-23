"use strict";
// Capturar elementos del DOM
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result");
const addButton = document.getElementById("suma");
const subtractButton = document.getElementById("resta");
const multiplyButton = document.getElementById("multiplicacion");
const divideButton = document.getElementById("division");
// Función para realizar cálculos
function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Por favor ingresa números válidos";
        return;
    }
    let result;
    switch (operation) {
        case "suma":
            result = num1 + num2;
            break;
        case "resta":
            result = num1 - num2;
            break;
        case "multiplicacion":
            result = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                result = "Error: No se puede dividir entre 0";
            }
            else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Operación no válida";
    }
    resultDisplay.textContent = result.toString();
}
// Asignar eventos a los botones
addButton.addEventListener("click", () => calculate("suma"));
subtractButton.addEventListener("click", () => calculate("resta"));
multiplyButton.addEventListener("click", () => calculate("multiplicacion"));
divideButton.addEventListener("click", () => calculate("division"));
