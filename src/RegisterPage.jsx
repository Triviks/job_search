import { useEffect } from 'react';
import logo from './assets/images/students-icon.png';
import { Helmet } from 'react-helmet'; 
import { Link } from 'react-router-dom';
import {OtpEnable, BodybgColor,TopSvg, BottomSvg, RegisterValidate} from './Global.js';

export function Register() {

    useEffect(() => {
        var form = document.querySelector('#sub_btn');
        form.addEventListener('click', (e) => {
            
            if(!RegisterValidate()) {
                e.preventDefault();
            }

        });
      }, []);

    return(
        <>
            <Helmet>
                <title>Register page</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                {/* <link rel="stylesheet" href="./assets/css/register.css" /> */}
            </Helmet>

            {/* Start  */}
            <div className="container">

                {/* Top SVG */}
                <TopSvg/>

                {/* Navigation bar */}
                <div className="navbar">

                    <div className="web-title">
                        <img src={logo} alt='Company Logo'/>
                        <span>JOB SEARCH</span>
                    </div>
                    <div className="buttons">
                        <Link to="/register"><button type="button" className="register-btn">REGISTER</button></Link>
                        <Link to="/"><button type="button" className="login-button">LOGIN</button></Link>
                        {/* <button type="button" className="business">Business</button> */}
                    </div>

                </div>

                {/* Register details */}
                <div className="registerr">
                    <img src={logo} alt='Company Logo'/><br/>
                    <h2>REGISTER ACCOUNT</h2>

                    <form>
                        <div className="detail">

                            <div className="details">
                                <div className="field">
                                    <label htmlFor="fullname">Full Name*</label><br/>
                                    <input id="fullname" name='fullname' type="text" placeholder="FULL NAME" />
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email ID*</label><br/>
                                    <input id="id" name='email' type="text" placeholder="EMAIL ADDRESS" />
                                </div>

                                <div className="field">
                                    <label htmlFor="skills">Skills*</label><br/>
                                    <input id="skills" name='skills' type="text" placeholder="SKILLS" />
                                </div>
                                
                                <div className="field">
                                    <label htmlFor="phone">Phone Number*</label><br/>
                                    <input  onChange={OtpEnable}  id="phone" name='phone' type="number" placeholder="PHONE NUMBER" /><br/>
                                    {/* <button type='button' className="num_submit" >Submit</button> 
                                    <small>(Submit to receive OTP)</small> */}
                                </div>
                            </div>

                            <div className="details">
                                <div className="field">
                                    <label htmlFor="password">Password*</label><br/>
                                    <input id="password" name='password' type="password" placeholder="PASSWORD" /> <br/>
                                    
                                </div>

                                <div className="field">
                                    <label htmlFor="work">Work Experience</label><br/>
                                    {/* <input id="work" type="text" placeholder="WORK STATUS"/> */}
                                    <select id='work' name='work'>
                                        <option value='0'>----Select----</option>
                                        <option value='1'> &lt; 1 Year</option>
                                        <option value='2'> 2-5 Years</option>
                                        <option value='3'> 6-10 Years</option>
                                        <option value='4'> 10-15 Years </option>
                                        <option value='5'> &gt; 15 Years </option>
                                    </select>
                                </div>

                                <div className="field">
                                    <label htmlFor="degree">Degree*</label><br/>
                                    <input id="degree" name='degree' type="text" placeholder="Eg: CSE" />
                                </div>
                                
                                <div className="field">
                                    <div className='OTP'>
                                        <label>OTP</label><br/>
                                        <input id="otp" name='otp' type="text" placeholder="ENTER OTP*" disabled /><br/>
                                        {/* <button type="button" id='verify_num'>Verify</button> */}
                                    </div>
                                </div>
                            </div>

                        </div> <br/>
                        <p id='error' className='iderror'></p>
                        <button type="submit" id="sub_btn" onClick={() => {}} >Sumbit</button>
                    </form>

                </div>   

                {/* Bottom SVG */}
                <BottomSvg/>


            </div>

            <BodybgColor/>
            {/* End */}

        </>
    );
};


