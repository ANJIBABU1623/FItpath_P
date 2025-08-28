import '../css/Headingfile.css'
import BMICalculator from './BMIcalculator';
import { useNavigate } from 'react-router-dom';
function Heading(){
    const navigate = useNavigate();
    return (
        <><div className="main_heading">
            <h1>FITPATH</h1>
            <h2>Track your BMI. Reach your fitness path</h2>
        </div><div className="main_content">
            <p>Welcome to Fit path</p>
            <p>Fitpath is a diet plan website.we suggest your diet plan based on your Body mass Index(BMI).</p>
            <p>Body mass index is a measurement of a person where a person is in which catageory like OverWeight or underweight or Good </p>
            <p>BMI is calcuted by using weight and height</p>

            <div>
                <h1>Do you want to calculate your BMI</h1>
                 <button onClick={() => navigate('/BMICalculator')}>Yes</button>
            </div>

            </div></>
            
    );
}

export default Heading