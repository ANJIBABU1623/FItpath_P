import React, { useState } from "react";
import '../css/user_input.css'
import Options from "./Options";

function User_input() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setResult(null);

    // Validate inputs
    if (!height || !weight || height <= 0 || weight <= 0) {
      setError("Please enter valid height and weight.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          height_cm: height,
          weight_kg: weight,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Could not connect to server");
    }
  };

  return (
    <>
  <div className="bmi-container">
    <h2>BMI Calculator</h2>
    <div className="input-group">
      <label>Weight</label>
      <input
      type="number"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
      placeholder="Enter weight in kg"
      />
    </div>
    <div className="input-group">
      <label>Height</label>
      <input
      type="number"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
      placeholder="Enter height in cm"
      />
    </div>
    <button onClick={handleSubmit}>GET BMI</button>
    {error && <p className="error">{error}</p>}
   



      {/* Result Display */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your BMI: {result.bmi}</h3>
          <p>Category: {result.category}</p>
          
          
        </div>
      )}
    </div>
    <div>
      <Options />
    </div>

    </>
    
  );
}

export default User_input;