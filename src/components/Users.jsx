import { useEffect, useState } from "react";
import axios from "axios";

function Users(){
    let [data,setdata] = useState([])
    useEffect (()=>{
        let get_url = 'http://127.0.0.1:8000/api/users'
        axios.get(get_url).then((resp)=>{
            console.log(resp)
            setdata(resp.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    return(
        <div>
            {data.map((obj, index) =>(
                <p key ={index}>{obj.user_name}-{obj.user_weight}-{obj.user_height}</p>
            ))}

        </div>
    );
}
export default Users