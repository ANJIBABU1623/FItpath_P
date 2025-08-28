import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Day1(){
    const navigate = useNavigate();
    
    const meals = [
        {time: "8:30 AM",meal: "2 medium size apple"},
        { time: "10:30 AM", meal: "Sliced muskmelon (1/2 bowl)" },
        { time: "12:30 PM", meal: "Watermelon (1 bowl)" },
        { time: "4:00 PM", meal: "1 big Mosambi or Orange" },
        { time: "6:30 PM", meal: "Pomegranate salad with 1 cup of muskmelon" },
        { time: "8:30 PM", meal: "½ cup watermelon" }

]
    
    return (
        <div className="maindiet">
            <h1>Diet on Day 1</h1>
            <div className="diet">
                <p>Since your bmi is More. you belongs to over weight catageory </p>
                <p1>Day 1 is fruits Day</p1>
                <p1>On the first day, you should take as many fruits as possible. However, including more watermelon and muskmelon is better, as these fruits are fibre-rich. You can also have fruits like oranges, papaya, and apples.

Ensure to drink around 8-12 glasses of water and avoid starving at any point in the day. Whenever you are hungry, grab yourself some fruit. Being fibre-rich and low-fat, fruits satisfy your hunger without increasing calorie intake.</p1>

                <table border="1" cellPadding="8" cellSpacing="0">
                    <thead>
                        <tr>    
                            <th>Time</th>
                            <th>Meal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meals.map((item, index) => (
                            <tr key={index}>
                                <td>{item.time}</td>
                                <td>{item.meal}</td>


                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
            <button onClick={()=> navigate('/day2')}>Do you want diet plan for day2</button>
        </div>
    );
}

export default Day1