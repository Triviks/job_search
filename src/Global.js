import { useState, useEffect} from "react";

export function LoginValidate() {
    // VARIABLES TO ACCESS THE FORM
    let id = document.getElementById('id');
    let idval = id.value;
    let pwd = document.getElementById('password');
    let pwdval = pwd.value;
    var err = document.getElementById('error');

    // const history = useHistory();

    // REGEX TO VALIDATE ID
    // let emailRegex = /^[^\s@]+@[^\s@]+\.(?:com)$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|in|net|org)$/; // MAIL VALIDATION - CORRECT MAIL FORMAT
    let numRegex = /^\d{10}$/; // NUMBER VALIDATION - MUST BE DIGITS AND RANGES 10

    // VALIDATION

    // VALIDATE EMPTY FIELDS
    if (idval !== '' || pwdval !== '') {
        switch (true) {
          case /^\d+$/.test(idval):
            if (!numRegex.test(idval)) {
              id.style.border = '2px solid red';
              err.innerText = "Please enter a valid Number!";
              return false; // PREVENT FORM SUBMISSION
            } 
            
            else {
              id.style.border = '1.8px solid white';
              err.innerText = '';
              console.log(`ID: Used ${idval} to login`);
              let ID = {
                'Number': idval,
                'Mail': '',
              };
              sessionStorage.setItem("Login ID: ", ID.Number);
              break;
            }
          case !/^\d+$/.test(idval):
            if (!emailRegex.test(idval)) {
              id.style.border = '2px solid red';
              err.innerText = "Please enter a valid Email";
              return false; // PREVENT FORM SUBMISSION
            } 
            
            else {
              id.style.border = '1.8px solid white';
              err.innerText = '';
              console.log(`ID: Used ${idval} to login`);
              let ID = {
                'Mail': idval,
                'Number': '',
              };
              sessionStorage.setItem("Login ID: ", ID.Mail);
              break;
            }
        }
        window.location.href = '/profile';
      }
      
      
}

export function RegisterValidate() {

    // let fields = document.querySelectorAll('input');
    // let fieldsval = fields.value;

    let fname = document.getElementById('fullname')
    let fnameval = fname.value;

    let email = document.getElementById('id');
    let emailval = email.value;

    let skills = document.getElementById('skills');
    let skillsval = skills.value;

    let phone = document.getElementById('phone');
    let phoneval = phone.value;

    let pwd = document.getElementById('password');
    let pwdval = pwd.value;

    let exp = document.getElementById('work');
    let expval = exp.options[exp.selectedIndex].value;

    let deg = document.getElementById('degree');
    let degval = deg.value;

    let otp = document.getElementById('otp');
    let otpval = otp.value;

    let err = document.getElementById('error')

    // REGEX TO VALIDATE PASSWORD
    let uppercaseRegex = /[A-Z]/; //  MUST HAVE AT LEAST ONE UPPERCASE CHARACTER FROM A-Z
    let specialCharRegex = /[!@#$%^&*()]/; // MUST HAVE AT LEAST ONE SPECIAL CHARACTER
    let minlengthRegex = /.{8,}/; // MUST HAVE MINIMUM LENGTH OF 8

    if (fnameval === '' || emailval === '' || skillsval ==='' || phoneval === '' || pwdval === '' || degval === '' || otpval === '' || expval == 0) {
        err.innerText = "Please fill all the mandatory fields!";
        return false //PREVENT FORM SUBMISSION
    }

    else {
        err.innerText = "";
    }

    if (fnameval !== '' || emailval !== '' || skillsval !=='' || phoneval !== '' || pwdval !== '' || degval !== '' || otpval !== '' || expval != 0) {

        // VALIDATE PASSWORD
        if (!minlengthRegex.test(pwdval)) {
            pwd.style.border = '2px solid red';  
            err.innerText = "The password must have at least 8 characters!";
            return false // PREVENT FORM SUBMISSION
        }
        
        else if (!uppercaseRegex.test(pwdval)) {
            pwd.style.border = '2px solid red';  
            err.innerText = "The password must contain at least one uppercase character!";
            return false //PREVENT FORM SUBMISSION
        }

        else if (!specialCharRegex.test(pwdval)) {
            pwd.style.border = '2px solid red';  
            err.innerText = "The password must contain at least one special character in it!";
            return false // PREVENT FORM SUBMISSION
        }

        else{
            err.innerText = '';
            pwd.style.border = '1.8px solid white';  
        }

        window.location.href = '/';
    }
    


    
    
}

export function OtpEnable() {

    let phone = document.getElementById('phone');
    let phoneval = phone.value;
    let otpfield = document.getElementById('otp');
    // let otpval = otpfield.value;

    if(phoneval.length === 10) {
        otpfield.removeAttribute("disabled","");
        document.getElementById('otp').value= Math.random()*1000;
    }
    
    else {
        otpfield.setAttribute("disabled", "");
    }

}

export function hamburgMenu() {
    let menu = document.getElementById('ham');
    let close = document.querySelector('.close');
    let hamburg = document.querySelector('.hamburger_menu');

    menu.style.visibility = 'hidden';
    close.style.visibility = 'visible';

    hamburg.style.transform = 'translateX(0px)';
}

export function menuClose() {
    let close = document.querySelector('.close');
    let menu = document.getElementById('ham');
    let hamburg = document.querySelector('.hamburger_menu');

    close.style.visibility = 'hidden';
    menu.style.visibility = 'visible';

    hamburg.style.transform = 'translateX(-310px)';

}

export function EnableEdit() {
    let inputs = document.querySelectorAll('input, textarea');
    let edit = document.querySelector('.edit_profile');
    let save = document.querySelector('.save');

    inputs.forEach((input) => {
        input.removeAttribute("disabled", '');
    })

    edit.style.visibility = 'hidden';
    save.style.visibility = 'visible';
}

export function SaveChanges() {
    let inputs = document.querySelectorAll('.detail input, .img input, textarea');
    let button = document.querySelector('.upload_btn');
    let edit = document.querySelector('.edit_profile');
    let save = document.querySelector('.save');
    let search = document.querySelector('.skills .skillsearch');

    inputs.forEach((input) => {
        input.setAttribute("disabled", "");
    })

    search.value = '';
    search.setAttribute("disabled", "");

    button.setAttribute('disabled', "");

    edit.style.visibility = 'visible';
    save.style.visibility = 'hidden';
}

export function CloseSkill() {
    let skill = document.getElementById('close_skill');
    let remove = skill.parentElement;

    
}

export function TopSvg() {
    return(
        <>
            <svg className="top-svg" width="1438" height="348" viewBox="0 0 1438 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M427.738 64.8094C202.052 70.7349 48.5436 24.0721 0 0L1438 1.62024V347.592H1401.38C904.076 330.001 1151.98 280.868 1256 248C1316.75 224.931 1410.6 203.775 1364 166C1305.75 118.782 709.846 57.4026 427.738 64.8094Z" fill="#4B65B6"/>
            </svg>
        </>
    );
}

export function BottomSvg() {
    return(
        <>
            <svg width="909" className="bottom-svg" height="272" viewBox="0 0 909 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M176.622 81.0924C192.799 38.698 65.851 9.6914 0.354675 0.487427L4.42995 270.743L908.939 271.861L908.976 241.677C861.22 148.156 670.347 163.653 580.88 183.092C518.088 194.432 366.807 214.889 264.021 206.004C135.539 194.897 156.4 134.085 176.622 81.0924Z" fill="#4B65B6"/>
            </svg>
        </>
    );
}

export function BodybgColor() {
    var [bgcolor] = useState("#3C57AC");
    useEffect(() => {
        document.body.style.backgroundColor = bgcolor
    }, [bgcolor])
}











