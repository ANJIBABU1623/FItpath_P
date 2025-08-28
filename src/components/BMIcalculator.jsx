import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Day1 from './Day1';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [response, setResponse] = useState('');
  const navigate = useNavigate();

  const calculateBMI = () => {
    if (weight && height) {
      const calculatedBmi = (weight / (height * height)).toFixed(2);
      setBmi(calculatedBmi);

      // Show question if BMI is 25 or more
      if (calculatedBmi >= 25) {
        setShowOptions(true);
      } else {
        setShowOptions(false);
        setResponse('');
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (in kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (in meters): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>GET BMI</button>

      {bmi && <p>Your BMI is: {bmi}</p>}

      {showOptions && (
        <div>
          <p>Your BMI is in the overweight range. Would you like a diet plan to help lose weight?</p>
          <button onClick={() => navigate('/day1')}>Yes</button>
          <button onClick={() => setResponse('No')}>No</button>
        </div>
      )}
      

      {response && (
        <p>
          <Day1 />
        </p>
      )}
    </div>
  );
};

export default BMICalculator;