// Capturar elementos del DOM
const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const resultDisplay = document.getElementById("result") as HTMLSpanElement;

const addButton = document.getElementById("suma") as HTMLButtonElement;
const subtractButton = document.getElementById("resta") as HTMLButtonElement;
const multiplyButton = document.getElementById("multiplicacion") as HTMLButtonElement;
const divideButton = document.getElementById("division") as HTMLButtonElement;

// Función para realizar cálculos
function calculate(operation: string): void {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Por favor ingresa números válidos";
    return;
  }

  let result: number | string;

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
      } else {
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
