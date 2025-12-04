import '../../assets/global.css'
import { Calendar, Lock, Mail } from "lucide-react";

export default function Login({setSignedIn}) {
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
                    <input placeholder="you@company.com" type="email" />
                </div>

                <div className='input-div'>
                    <label htmlFor='password'>Password</label>
                    <div className='inputIcon'>
                        <Lock className='lock-icon'/>
                    </div>
                    <input placeholder="Enter your password" type='password'/>
                </div>
                <button className='signInBtn' type="button" onClick={() => {setSignedIn(true)}}> Sign In</button>
            </form>
        </div>
        <div className='loginFooter'>
            <p>Don't have an account? <a href="mailto:info@example.com" target="#">Contact your administrator</a></p>
        </div>
    </div>);
};