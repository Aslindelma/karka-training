import {useState} from 'react';
import { useNavigate } from "react-router-dom";


function Login(props){
    const navigate = useNavigate();

    let [loginData,setLoginData] = useState({
        email:"delma@gmail.com",
        password:12345
    })

    const checklogin=()=>{
        if(loginData.email=="delma@gmail.com" && loginData.password==12345){
            props.setIsLogged({
                log:true,
                email:loginData.email
            });
            navigate("/")
        }else{
            props.setIsLogged(false);
        }
    }
    return (
        <>
        {JSON.stringify(loginData)}
        <form>
        <label>Email:</label>
        <input type="text" defaultValue={loginData.email} onKeyUp={(e)=>setLoginData({
            ...loginData,
            email:e.target.value})}></input>
        <label>Password:</label>
        <input type="text" defaultValue={loginData.password}onKeyUp={(e)=>setLoginData({
            ...loginData,
            password:e.target.value
        })}></input>
        <button type="button" onClick={()=>checklogin()}>Submit</button>
        </form>
        </>
    )
    
}
export default Login;