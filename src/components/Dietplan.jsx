import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Dietplan.css';
import Weight_gain_tracker from './Weightgain_calorietracker';
import {useNavigate} from 'react-router-dom';



const DietPlans = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/diet_plan/')
      .then(response => setPlans(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          
          <h3>{plan.title}</h3>
          <p>{plan.calories_per_day}</p>
          <p>{plan.description}</p>
          <p>{plan.duration_weeks} weeks program</p>
          <p>{plan.meals_per_day}</p>
          <button onClick={() => navigate('/Weightgain_caloriestracker')}>Start plan</button>
        </div>
      ))}
    </div>
  );
};

export default DietPlans;