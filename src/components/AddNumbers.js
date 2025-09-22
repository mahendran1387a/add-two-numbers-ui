import React, { useState } from 'react';

const AddNumbers = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState(null);

    const handleAddition = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        if (!isNaN(number1) && !isNaN(number2)) {
            setSum(number1 + number2);
        } else {
            setSum(null);
        }
    };

    return (
        <div>
            <h1>Add Two Numbers</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <button onClick={handleAddition}>Add</button>
            {sum !== null && <h2>Sum: {sum}</h2>}
        </div>
    );
};

export default AddNumbers;