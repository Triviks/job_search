import logo from './assets/images/students-icon.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import profile from './assets/images/profile.png';
import {TopSvg, BottomSvg, BodybgColor} from './Global.js';
import './assets/css/ProfileUpdate.css';
import search from './assets/images/search-removebg-preview.png';
import noti from './assets/images/icons8-bell-50.png';

export function UpdateProfile() {
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

                    <div class="links">
                        <a href=""> Link </a>
                        <a href=""> Link </a>
                        <a href=""> Link </a>
                        <a href=""> Link </a>
                    </div>

                    <div className="search">
                        <img className="search-icon" src={search} />
                        <input type="search" placeholder="Search" className='searchbox' />
                        <img src={noti} className='noti_icon' />
                    </div>

                    <div className="buttons">
                        <Link to="/"><button type="button" className="logout-btn">Logout</button></Link>
                    </div>

                </div>



                {/* Profile Update */}
                <div className='mainbox'>
                    <div className='box'>
                        <div className='avatar'>
                            <img src={profile} alt="Profile Picture" />
                        </div>

                        <div className='text'>
                            <h1>NAME</h1>
                            <h3>Recruiters are waiting for your complete profile!!</h3> <br/>
                            <button>Edit Profile</button>
                        </div>
                       

                    </div>
                </div>











                {/* Bottom SVG */}
                <BottomSvg/>

            </div>
            <BodybgColor/>
            {/* End */}
        </>
    );
}