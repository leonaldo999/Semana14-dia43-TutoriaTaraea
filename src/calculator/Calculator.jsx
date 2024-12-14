import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right border border-gray-300 rounded mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600 ${item === '/' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
            >
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600 ${item === '*' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
            >
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button
              key={item}
              onClick={() => handleButtonClick(item)}
              className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600 ${item === '-' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => handleButtonClick('0')}
            className={`bg-blue-500 text-white p-4 rounded hover:bg-blue-600`}
          >
            0
          </button>
          {['.', '=', '+'].map((item) => (
            <button
              key={item}
              onClick={item === '=' ? handleCalculate : () => handleButtonClick(item)}
              className={`bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 text-white p-4 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;