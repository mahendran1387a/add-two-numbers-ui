import React, { useState } from 'react';
import './styles/App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('add');

  const handleCalculate = (e) => {
    e.preventDefault();
    const n1 = Number(num1);
    const n2 = Number(num2);
    let res = null;
    if (operation === 'add') {
      res = n1 + n2;
    } else if (operation === 'subtract') {
      res = n1 - n2;
    } else if (operation === 'multiply') {
      res = n1 * n2;
    } else if (operation === 'divide') {
      res = n2 !== 0 ? n1 / n2 : '🤔 Cannot divide by zero!';
    }
    setResult(res);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%), url('https://i.ytimg.com/vi/IRlx_DD0NAA/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBzyYn0kug4paz43RofubVvg6j7MQ') no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}
    >
      <div className="backdrop-blur-xl bg-white/80 border-4 border-pink-300 rounded-3xl shadow-2xl p-10 w-full max-w-md relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-30 animate-pulse"></div>
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
          🎉 The Best Calculator in the World! 🎉
        </h1>
        <form onSubmit={handleCalculate} className="space-y-6">
          <input
            type="number"
            value={num1}
            onChange={e => setNum1(e.target.value)}
            placeholder="Enter first number"
            required
            className="w-full px-5 py-3 text-lg border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-200 transition shadow-md"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => setOperation('add')}
              className={`text-2xl px-4 py-2 rounded-full transition transform hover:scale-110 shadow-md ${
                operation === 'add'
                  ? 'bg-gradient-to-r from-pink-400 to-yellow-300 text-white'
                  : 'bg-gray-100 text-pink-500'
              }`}
              title="Add"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => setOperation('subtract')}
              className={`text-2xl px-4 py-2 rounded-full transition transform hover:scale-110 shadow-md ${
                operation === 'subtract'
                  ? 'bg-gradient-to-r from-yellow-400 to-green-400 text-white'
                  : 'bg-gray-100 text-yellow-500'
              }`}
              title="Subtract"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => setOperation('multiply')}
              className={`text-2xl px-4 py-2 rounded-full transition transform hover:scale-110 shadow-md ${
                operation === 'multiply'
                  ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white'
                  : 'bg-gray-100 text-green-500'
              }`}
              title="Multiply"
            >
              ×
            </button>
            <button
              type="button"
              onClick={() => setOperation('divide')}
              className={`text-2xl px-4 py-2 rounded-full transition transform hover:scale-110 shadow-md ${
                operation === 'divide'
                  ? 'bg-gradient-to-r from-blue-400 to-pink-400 text-white'
                  : 'bg-gray-100 text-blue-500'
              }`}
              title="Divide"
            >
              ÷
            </button>
          </div>
          <input
            type="number"
            value={num2}
            onChange={e => setNum2(e.target.value)}
            placeholder="Enter second number"
            required
            className="w-full px-5 py-3 text-lg border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 transition shadow-md"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 text-white text-xl font-bold rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            Calculate 🚀
          </button>
        </form>
        {result !== null && (
          <div className="mt-8 text-center text-3xl font-bold text-green-700 drop-shadow-lg animate-bounce">
            Result: <span className="text-pink-600">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;