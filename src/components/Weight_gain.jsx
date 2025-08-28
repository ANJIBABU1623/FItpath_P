import { useState,useEffect } from "react";
import axios from "axios";

function weight_gain(){
    let [data,setdata] = useState([])
    useEffect (()=>{
        let post_url = 'http://127.0.0.1:8000/api/bmi'
        axios.post(post_url).then((resp)=>{
            console.log(resp)
            setdata(resp.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    return(
        <div>
            {data.map((obj, index) =>(
                <p key ={index}>{obj.intake_caloreis}</p>
            ))}

        </div>
    );
}
export default weight_gain