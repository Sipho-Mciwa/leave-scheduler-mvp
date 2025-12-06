import { useState } from 'react';
import '../../assets/global.css'
import { Calendar, Lock, Mail } from "lucide-react";
import { login } from '../../services/api';


export default function Login({setSubmitted, setUser}) {
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});


    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        //Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        //Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return (isValid);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            //Form is valid, you can submit or process data her
            // console.log("Form data:", formData);
            const userInfo = await login(formData);
            // console.log(userInfo);
            setUser(userInfo.user);

            if (localStorage.getItem('token')) localStorage.clear();
            
            localStorage.setItem('token', userInfo.token);
            setSubmitted(true); // Set a submitted flag
        } else {
            // Form is not valid, display error messages.
        }
    };

    const isFormValid = Object.keys(errors).length === 0

    return (
    <div className="loginContainer">
        <div className="loginHeader">
            <div className='calenderIcon'>
                <Calendar className='cal-icon'/>
            </div>
            <p>Leave Schedular</p>
            <p>Sign in to manage your time off</p>
        </div>
        <div className="loginForm">
            <form>
                <div className='input-div'>
                    <label htmlFor='email'>Email Address</label>
                    <div className='inputIcon'>
                        <Mail className='mail-icon'/>
                    </div>
                    <input className={isFormValid ? 'login-input' : 'error-input'} placeholder="you@company.com" type="email" name='email' value={formData.email} onChange={handleInputChange}/>
                    {!isFormValid && <p className='errorMsg'>{errors.email}</p>}
                </div>

                <div className='input-div'>
                    <label htmlFor='password'>Password</label>
                    <div className='inputIcon'>
                        <Lock className='lock-icon'/>
                    </div>
                    <input className={isFormValid ? 'login-input' : 'error-input'} placeholder="Enter your password" type='password' name='password' value={formData.password} onChange={handleInputChange}/>
                    {!isFormValid && <p className='errorMsg'>{errors.password}</p>}
                </div>
                <button className='signInBtn' type="button" onClick={handleSubmit}> Sign In</button>
            </form>
        </div>
        <div className='loginFooter'>
            <p>Don't have an account? <a href="mailto:info@example.com" target="#">Contact your administrator</a></p>
        </div>
    </div>);
};