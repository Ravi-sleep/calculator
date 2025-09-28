    let display = document.getElementById('display');
    let currentInput = '';
    let shouldReset = false;

    function input(value) {
      if (shouldReset) {
        currentInput = '';
        shouldReset = false;
      }
      if (currentInput === '0' && value !== '.') {
        currentInput = '';
      }
      currentInput += value;
      display.innerText = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      display.innerText = '0';
    }

    function calculate() {
      try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
        shouldReset = true;
      } catch {
        display.innerText = 'Error';
        currentInput = '';
        shouldReset = true;
      }
    }

    function resetCalculator() {
      currentInput = '';
      display.innerText = '0';
      shouldReset = false;
    }
    function backspace() {
    const input = document.getElementById('myInput');
    input.value = input.value.slice(0, -1); // removes the last character
}