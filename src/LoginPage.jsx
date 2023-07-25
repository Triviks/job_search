import { useEffect } from 'react';
import logo from './assets/images/students-icon.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {LoginValidate, TopSvg, BottomSvg, BodybgColor} from './Global.js';

export function Login() {

    useEffect(() => {
        var form = document.querySelector('.submit_btn');
        form.addEventListener('click', (e) => {

            if (!LoginValidate()) {
                e.preventDefault(); // PREVENTS FORM SUBMISSION IF FUNCTION RETURNS FALSE
            }
            
        });
    }, []);

    return(
        <>  
            <Helmet>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Login Page</title>
                {/* <link rel="stylesheet" href="./assets/css/login.css" /> */}
            </Helmet>
            
            {/* Start */}
            <div className='container'>
                {/* Top SVG */}
                <TopSvg/>

                {/* Navbar Code */}
                <div className="navbar">

                    <div className="web-title">
                        <img src={logo} alt='Company Logo' />
                        <span>JOB SEARCH</span>
                    </div>
                    <div className="buttons">
                        <Link to="/register"><button type="button" className="register-button">REGISTER</button></Link>
                        <Link to="/"><button type="button" className="login-btn">LOGIN</button></Link>
                    </div>

                </div>

                {/* Login details  */}

                <div className="login">
                    <img src = {logo} alt='Comapny Logo' /><br/>
                    <span>LOGIN</span>
                    <form id="form">
                        <input type="number, email" name ='id' id='id' placeholder="EMAIL ADDRESS / MOBILE" /><br/>
                        <input type="password" name='password' id='password' placeholder="PASSWORD" /><br/>
                        <button className='submit_btn' type='submit' onClick={() => {}}>Submit</button>
                        {/* <button type='button' className='forgot_pwd'>Forgot Password?</button> */}

                    </form>
                    <div><p className='iderror'></p></div> <br/>
                    <div><p id="error"></p></div>
                </div>
                
            
                {/* Bottom SVG */}
                <BottomSvg/>

            </div>

            <BodybgColor/>
            {/* End */}
        </>
    );
}