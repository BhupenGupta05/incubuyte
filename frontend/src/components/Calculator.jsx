import React, { useState } from "react";
import { addition } from "../addition";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [err, setErr] = useState("");

    const calculateSum = (inputVal) => {
        try {
            const processedInput = inputVal.replace(/\\n/g, "\n");
            const sum = addition(processedInput);
            setResult(sum);  
            setErr("");     
        } catch (err) {
            setErr(err.message);  
            setResult("");        
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);        
        calculateSum(value);     
    };

    return (
        <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-xl font-bold mb-4">String Calculator</h1>

            <div className="flex flex-col gap-3">
                <label htmlFor="">Input Strings</label>
                <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter numbers"
                className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            </div>
            
            <button
                onClick={() => calculateSum(input)}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
                Calculate
            </button>
            {result !== "" && <h2 className="mt-4 text-lg">Result: {result}</h2>}
            {err && <h2 className="mt-4 text-lg text-red-500">{err}</h2>}
        </div>
    );
};

export default Calculator;
