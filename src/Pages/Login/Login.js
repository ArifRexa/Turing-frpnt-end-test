import React, { useState, createContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Dashboard from "../Dashboard/Dashboard"
import Header from '../Home/Header/Header';


// export const userLoginContext = createContext(isLogin)

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [myName, setMyName] = useState("")
    const [loginData, setLoginData] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [pageSet, setPageSet] = useState(false);




    const handleEmail = e =>{
        setEmail(e.target.value)

    }
    
    const handlePassword = e =>{
        setPassword(e.target.value)

    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(field, value, loginData);
    }

    const handleSubmit = (e) => {
        const loginUsers = {
            Email: email,
            password: password
        }

        let KeyOfEmail = []
        for (let i = 0; i <= localStorage.length; i++) {
            KeyOfEmail.push(localStorage.key(i))
        }

        if (KeyOfEmail.indexOf(email) !== -1) {
            let KeyEmail = localStorage.getItem(email)
            KeyEmail = JSON.parse(KeyEmail)
            
            console.log(setMyName);
            if (loginUsers.password === KeyEmail.password) {
                alert("Sign in successful")
                setIsLogin(true)
                setMyName = `${KeyEmail.Name}`
                
            } 
            else {
                alert("Something went wrong with email or password. Please try again")
                
            }
            console.log(KeyEmail.password);
            
        }
        else{
            alert("This email has not any account. Please sign up.")
            return

        }
        console.log(loginUsers);
        e.preventDefault()
    }


    return (
        <div>
            This is login page
            <div className='form-style '>
                <div className='form-border'>
                    <form onSubmit={handleSubmit}>
                        <h5>SIGN IN</h5>
                        <hr />

                        <label for="email">Email:</label><br />
                        <input className='input-field' type="email" name="email" onChange={handleOnChange} onBlur={handleEmail} placeholder='Enter Your Email' /><br />

                        <label for="password">Password:</label><br />
                        <input className='input-field' type="password" name="password" onChange={handleOnChange} onBlur={handlePassword} placeholder='Enter Your Password'/><br />


                        <input  type="submit" value="SIGN IN" />

                    </form>
                    <hr />
                    <p>New User?</p>
                    <Link to="/register"> <button type="submit" >SIGN UP</button>  </Link>
                </div>
                {
                    isLogin && <Navigate to="/dashboard"></Navigate>
                }
                {
                pageSet && <>
                <Dashboard isLogin={isLogin}></Dashboard>
                <Header isLogin={isLogin} myName={myName}></Header></>}
            </div>
        </div>
    );
};
export default Login;