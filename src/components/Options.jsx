import '../css/Options.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Day1 from './Day1';
import Sample from './Sample';
import Weight_gain from './Weight_gain';


function options(){
    const navigate = useNavigate();

    return(
        <><div className='options'>
            <div className="Weight_gain">
            <h1>Weight Gain </h1><br />
            <input type="button" value="Weight Gain" />
            <p>Do you need a diet plan or exercise</p>
            <button onClick={() => navigate('/Diet_plan')}>Yes</button>
            </div>
        <div className="Weight_Loss">
            <h1>Weight loss </h1><br />
            <input type="button" value="weight loss" />
        </div>
        <div className="Fitness">
            <h1>Fitness </h1><br />
            <input type="button" value="Fitness" />
            <p>Do you need a diet plan or exercise</p>
            <button onClick={() => navigate('/Sample')}>Yes</button>
        </div>
        </div>
        </>

    );
}
export default options

