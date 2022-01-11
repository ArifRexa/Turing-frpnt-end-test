import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loginData, setLoginData] = useState({});
    const [isRegister, setIsRegister] = useState(false)

    const handleEmail = e => {
        setEmail(e.target.value)

    }
    const handleName = e => {
        setName(e.target.value)

    }
    const handlePassword = e => {
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
        if (password.length < 3) {
            alert("Your Password should be three digits");
            return
        }
        else if(loginData.password !== loginData.password2){
            alert("Your Password did not matched. Try again");
            return
        }
        const users = {
            Name: name,
            password: password
        }

        let KeyOfEmail = []
        for (let i = 0; i <= localStorage.length; i++) {
            KeyOfEmail.push(localStorage.key(i))
        }
        console.log(KeyOfEmail);
        if (KeyOfEmail.indexOf(email) !== -1) {
            alert("This Email Has Already Exist. Please Sign in")
            return 
            
        }
        else{
            localStorage.setItem(email, JSON.stringify(users))
            alert("Sign Up Successfully")
            setIsRegister(true)
        }
        e.preventDefault()
    }
    return (
        <div>
            <div className='form-style '>
                <div className='form-border'>
                    <form onSubmit={handleSubmit}>
                        <h5>Signup</h5>
                        <hr />
                        <label for="name">Name:</label><br />
                        <input className='input-field' type="text" name="name" onChange={handleOnChange} onBlur={handleName} placeholder='Enter Your Name' required/><br />

                        <label for="email">Email:</label><br />
                        <input className='input-field' type="text" onChange={handleOnChange} onBlur={handleEmail} placeholder='Enter Your Email' name="email" required/><br />

                        <label for="password">Password:</label><br />
                        <input className='input-field' type="password" name="password" onChange={handleOnChange} onBlur={handlePassword} placeholder='Enter Password' required/><br />

                        <label for="password2">Confirm Password:</label><br />
                        <input className='input-field' type="password" name="password2" onChange={handleOnChange} onBlur={handlePassword} placeholder='Confirm Password' required/><br />

                        <input type="submit" value="SIGN UP" />
                        
                    </form>
                    <hr />
                    <p>Already registered?</p>
                    <Link to="/login"> <button type="submit" >SIGN IN</button>  </Link>
                </div>
                {
                    isRegister && <Navigate to="/login" />
                }
            </div>
        </div>
    );
};

export default Register;