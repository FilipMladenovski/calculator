document.addEventListener('DOMContentLoaded', function () {
  let currentInput = '';
  let previousInput = '';
  let operator = '';


  let inputField = document.querySelector('.input');
  function handleNumberClick(number) {
    currentInput += number;
    updateDisplay();
  }

  document.getElementById('zeroBtn').addEventListener('click', function () {
    handleNumberClick('0');
  });

  document.getElementById('oneBtn').addEventListener('click', function () {
    handleNumberClick('1');
  });

  document.getElementById('twoBtn').addEventListener('click', function () {
    handleNumberClick('2');
  });

  document.getElementById('threeBtn').addEventListener('click', function () {
    handleNumberClick('3');
  });

  document.getElementById('fourBtn').addEventListener('click', function () {
    handleNumberClick('4');
  });

  document.getElementById('fiveBtn').addEventListener('click', function () {
    handleNumberClick('5');
  });

  document.getElementById('sixBtn').addEventListener('click', function () {
    handleNumberClick('6');
  });

  document.getElementById('sevenBtn').addEventListener('click', function () {
    handleNumberClick('7');
  });

  document.getElementById('eightBtn').addEventListener('click', function () {
    handleNumberClick('8');
  });

  document.getElementById('nineBtn').addEventListener('click', function () {
    handleNumberClick('9');
  });

  document.getElementById('doubleZeroBtn').addEventListener('click', function () {
    handleNumberClick('00');
  });

  document.getElementById('decimalBtn').addEventListener('click', function () {
    let dotPresent = false;
    for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i] === '.') {
            dotPresent = true;
            break;
        }
    }

    if (!dotPresent) {
        currentInput += '.';
        updateDisplay();
    }
  });

  function handleOperatorClick(op) {
    if (currentInput !== '') {
      if (previousInput !== '') {
        calculate();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }
  }

  document.getElementById('addBtn').addEventListener('click', function () {
    handleOperatorClick('+');
  });

  document.getElementById('subtractBtn').addEventListener('click', function () {
    handleOperatorClick('-');
  });

  document.getElementById('multiplyBtn').addEventListener('click', function () {
    handleOperatorClick('*');
  });

  document.getElementById('divideBtn').addEventListener('click', function () {
    handleOperatorClick('/');
  });

  document.getElementById('percentageBtn').addEventListener('click', function () {
    if (currentInput !== '') {
      currentInput = String(parseFloat(currentInput) / 100);
      updateDisplay();
    }
  });

  document.getElementById('equalsBtn').addEventListener('click', function () {
    calculate();
  });

  document.getElementById('acBtn').addEventListener('click', function () {
    clearCalculator();
  });

  document.getElementById('backBtn').addEventListener('click', function () {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  });

  function calculate() {
    if (currentInput !== '' && previousInput !== '') {
        if (operator === '+') {
            currentInput = String(Number(previousInput) + Number(currentInput));
        } else if (operator === '-') {
            currentInput = String(Number(previousInput) - Number(currentInput));
        } else if (operator === '*') {
            currentInput = String(Number(previousInput) * Number(currentInput));
        } else if (operator === '/') {
            if (Number(currentInput) !== 0) {
                currentInput = String(Number(previousInput) / Number(currentInput));
            } else {
                currentInput = 'Error';
            }
        }
        operator = '';
        previousInput = '';
        updateDisplay();
    }
}

  function updateDisplay() {
    inputField.value = currentInput;
  }

  function clearCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
  }
});
