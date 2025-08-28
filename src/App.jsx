import BMICalculator from "./components/BMIcalculator";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import FAQ from "./components/FAQ";
import Heading from "./components/Heading";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from "./components/Users";
import User_input from "./components/user_input";
import Sample from "./components/Sample";
import Weight_gain from "./components/Weight_gain";
import DietPlans from "./components/Dietplan";
import Weightgain_calorietracker from "./components/Weightgain_calorietracker"

function show(){
  return(
    <div>
      <Router>
      <Routes>
        
        <Route path="/" element={<User_input />} />

       
        <Route path="/Diet_plan" element={<DietPlans />} />
        <Route path="//Weightgain_caloriestracker" element={<Weightgain_calorietracker />} />
        
      </Routes>
    </Router>

    </div>
  );
}
export default show
