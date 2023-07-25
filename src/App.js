/* import logo from './logo.svg';
import './App.css'; */
import { Routes, Route} from 'react-router-dom';
import {Login} from  './LoginPage';
import {Register} from './RegisterPage';
import {UpdateProfile} from './ProfileUpdate';
import {Profile} from './Profile';
import './assets/css/login.css';
import './assets/css/register.css';

function App() {
  // const isLoggedIn = ValidatePwd();
  return(
    <>
      <Routes>
        <Route exact path="/" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/profile-update" element = {<UpdateProfile />} />
        <Route path='/profile' element = {<Profile />} />
      </Routes>
    </>
  );
};

export default App;
