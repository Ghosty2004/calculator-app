import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [ displayValue, setDisplayValue ] = useState('0');
  const [ operator, setOperator ] = useState(null);
  const [ storedValue, setStoredValue ] = useState(null);

  const handleNumberClick = (event) => {
    const { target: { value } } = event;
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
  };

  const handleOperatorClick = (event) => {
    const { target: { value } } = event;
    setOperator(value);
    setStoredValue(displayValue);
    setDisplayValue('0');
  };

  const handleClearClick = () => {
    setOperator(null);
    setStoredValue(null);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    let computedValue;

    switch (operator) {
      case '+':
        computedValue = parseFloat(storedValue) + parseFloat(displayValue);
        break;
      case '-':
        computedValue = parseFloat(storedValue) - parseFloat(displayValue);
        break;
      case '*':
        computedValue = parseFloat(storedValue) * parseFloat(displayValue);
        break;
      case '/':
        computedValue = parseFloat(storedValue) / parseFloat(displayValue);
        break;
      default:
        return;
    }

    setDisplayValue(computedValue);
    setOperator(null);
    setStoredValue(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <button className="button" value="7" onClick={handleNumberClick}>7</button>
      <button className="button" value="8" onClick={handleNumberClick}>8</button>
      <button className="button" value="9" onClick={handleNumberClick}>9</button>
      <button className="button operator" value="/" onClick={handleOperatorClick}>/</button>
      <button className="button" value="4" onClick={handleNumberClick}>4</button>
      <button className="button" value="5" onClick={handleNumberClick}>5</button>
      <button className="button" value="6" onClick={handleNumberClick}>6</button>
      <button className="button operator" value="*" onClick={handleOperatorClick}>*</button>
      <button className="button" value="1" onClick={handleNumberClick}>1</button>
      <button className="button" value="2" onClick={handleNumberClick}>2</button>
      <button className="button" value="3" onClick={handleNumberClick}>3</button>
      <button className="button operator" value="-" onClick={handleOperatorClick}>-</button>
      <button className="button operator" value="+" onClick={handleOperatorClick}>+</button>
      <button className="button" value="0" onClick={handleNumberClick}>0</button>
      <button className="button" value="." onClick={handleNumberClick}>.</button>
      <button className="button equal" onClick={handleEqualClick}>=</button>
      <button className="button clear" onClick={handleClearClick}>C</button>
    </div>
  );
}

export default Calculator;