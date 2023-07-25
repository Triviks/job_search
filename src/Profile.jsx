import logo from './assets/images/students-icon.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {TopSvg, BottomSvg, BodybgColor, hamburgMenu, menuClose, FileUpload, EnableEdit, SaveChanges} from './Global.js';
import './assets/css/Profile.css';
import search from './assets/images/search-removebg-preview.png';
import noti from './assets/images/icons8-bell-50.png';
import './assets/css/ProfileUpdate.css';
import { Component } from 'react';

export class Profile extends Component {
    render() {
        return(
            <>
                <Helmet>
                    <meta charset="utf-8"/>
                    {/* <meta name="viewport" content="width=device-width"/>  */}
                    <title>Login Page</title>
                </Helmet>

                <div className="container">
                    {/* Top SVG */}
                    <TopSvg/>

                    {/* Navbar Code */}
                    <div className="navbar">

                        <div className="web-title">
                            <span className="menu" id='ham' onClick={hamburgMenu}><ion-icon name="menu-outline"></ion-icon></span>
                            <span className="close" onClick={menuClose}><ion-icon name="close-outline"></ion-icon></span>
                            <img src={logo} alt='Company Logo' />
                            <span>JOB SEARCH</span>
                        </div>

                        <div class="links">
                            <a href="/profile"> Link </a>
                            <a href="/profile"> Link </a>
                            <a href="/profile"> Link </a>
                            <a href="/profile"> Link </a>
                        </div>

                        <div className="search">
                            <img className="search-icon" src={search} alt='search' />
                            <input type="search" placeholder="Search" className='searchbox' />
                            <img src={noti} alt='notifications' className='noti_icon' />
                        </div>

                        <div className="buttons">
                            <Link to="/"><button type="button" className="logout-btn">Logout</button></Link>
                        </div>
                    </div>

                    <div className='hamburger_menu'>
                        <ul>
                            <li>Jobs</li>
                            <li>Posts</li>
                            <li>Groups</li>
                            <li>People</li>
                            <li>Courses</li>
                            <li>Companies</li>
                            <li>Mock Tests</li>
                            <li>More Jobs</li>
                            <li>Events</li>
                        </ul>
                    </div>

                    <div className="profile">

                        <div className="profile_left">
                            <div className="profile_cover">
                                {/* <h2>Cover Photo</h2> */}
                                {/* <button className="edit_cover" type="button">Edit Cover</button> */}
                                <span className='edit_profile' onClick={EnableEdit}><ion-icon name="create"></ion-icon></span>
                                <button className='save' onClick={SaveChanges}>Save Changes</button>
                            </div>


                            <div className="img">
                                {/* <img src={profile} /> */}
                                <label htmlFor='pro_pic'><span><ion-icon name="person"></ion-icon></span></label> <br/> <br/>
                                <input type='file' accept='jpg,png' id='pro_pic' disabled />
                                <input disabled type='text' placeholder='Name' maxLength={20} className='name'/> | <input disabled type='text' placeholder='Role' maxLength={20} className='role'/> 
                            </div>

                            <div className='info'>

                                {/* <input disabled className='mail' rows={3} placeholder='MAIL' />
                                <input disabled type='number' className='contact' placeholder='CONTACT' /> */}

            
                                <div className='right'>
                                    <div className="summary">
                                        <h3>Profile Summary</h3> 
                                        <textarea disabled rows={6} />
                                    </div>

                                    <div className="skills">
                                        <label>Skills</label> 
                                        <input type='search' className='skillsearch' placeholder='Search Skills' disabled />
                                        <div className='skillbox'>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                            <div className="skill_btn"><input disabled/> <ion-icon name="close-outline" id='close_skill'></ion-icon></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="profile_right">
                            <h1>Education</h1>
                            <div className='detail'>
                                <input disabled  type='text' placeholder='Degree/Branch' />
                                <textarea disabled className='university' placeholder='University Name' />
                                <input disabled  type='text' placeholder='Course Duration' />
                                <input disabled  type='text' placeholder='CGPA' />
                            </div>
                            <hr />
                            <div className='detail'>
                                <input disabled  type='text' placeholder='Degree/Branch' />
                                <textarea disabled className='university' placeholder='University Name' />
                                <input disabled  type='text' placeholder='Course Duration' />
                                <input disabled  type='text' placeholder='CGPA' />
                            </div>
                            <hr />
                            <div className='detail'>
                                <input disabled  type='text' placeholder='Degree/Branch' />
                                <textarea disabled className='university' placeholder='University Name' />
                                <input disabled  type='text' placeholder='Course Duration' />
                                <input disabled  type='text' placeholder='CGPA' />
                            </div>
                            <hr />
                            <div className="resume">
                                <h3>Resume</h3>
                                <label className='upload_btn' htmlFor='fileinput' >Upload Resume</label>
                                <input type='file' className='file' accept='pdf' id='fileinput' disabled/>
                                <button className='view_btn'>View Resume</button>
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
}