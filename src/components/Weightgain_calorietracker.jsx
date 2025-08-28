import React, { useState } from "react";
import '../css/Weightgaincalorie_tracker.css'

const foods = [
  {
    id: 1,
    name: "Grilled Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    image: "https://source.unsplash.com/400x300/?chicken",
  },
  {
    id: 2,
    name: "Brown Rice",
    calories: 112,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    image: "https://source.unsplash.com/400x300/?rice",
  },
  {
    id: 3,
    name: "Avocado",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    image: "https://source.unsplash.com/400x300/?avocado",
  },
];

export default function CalorieTracker() {
  const [dailyCalories, setDailyCalories] = useState(0);
  const [loggedFoods, setLoggedFoods] = useState([]);

  const targetCalories = 2000;

  const addFood = (food) => {
    setDailyCalories(dailyCalories + food.calories);
    setLoggedFoods([...loggedFoods, food]);
  };

  const removeFood = (index) => {
    const foodToRemove = loggedFoods[index];
    setDailyCalories(dailyCalories - foodToRemove.calories);
    setLoggedFoods(loggedFoods.filter((_, i) => i !== index));
  };

  return (
    <div className="tracker-container">
      <h1 className="title">Daily Calorie Tracker</h1>
      <div className="tracker-grid">
        
        {/* Daily Summary */}
        <div className="summary-card">
          <h2>Daily Summary</h2>
          <p className="calories">
            {dailyCalories} / {targetCalories}
          </p>
          
          <p>Remaining: {targetCalories - dailyCalories} cal</p>
          <p>Foods logged: {loggedFoods.length}</p>

          {loggedFoods.length > 0 && (
            <div className="food-list">
              <h3>Today's Foods</h3>
              <ul>
                {loggedFoods.map((food, index) => (
                  <li key={index}>
                    {food.name} - {food.calories} cal
                    <button
                      className="remove-btn"
                      onClick={() => removeFood(index)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Food Cards */}
        <div className="food-section">
          <h2>Add Foods</h2>
          <div className="food-grid">
            {foods.map((food) => (
              <div key={food.id} className="food-card">
                <img src={food.image} alt={food.name} />
                <div className="food-info">
                  <h3>{food.name}</h3>
                  <p>
                    {food.calories} cal • P: {food.protein}g • C: {food.carbs}g •
                    F: {food.fat}g
                  </p>
                  <button
                    className="add-btn"
                    onClick={() => addFood(food)}
                  >
                    + Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
