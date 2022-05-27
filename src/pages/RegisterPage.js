import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from './MainPage'
import {ping, register} from '../Model/Model'

import './Styles/MainStyle.css';
import './Styles/LoginStyle.css';
import './Styles/Buttons.css';
function Register(props) {
    //function
    let decider = (answer) => {
        if(answer == 'Registration Complete'){
            navigate("/Login");
        }
        else{
            alert(answer);
        }
      };

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    return (
      <div>
        <Header/>
        <center class="customContainer">
        <label class="custom-field one" id="nameField">
                <input type="email" placeholder=" " onChange={e => setName(e.target.value)}/>
                <span class="placeholder">Enter Name</span>
        </label>
        <br/>
        <br/>
        <label class="custom-field one" id="secondNameField">
            <input type="email" placeholder=" " onChange={e => setSecondName(e.target.value)}/>
            <span class="placeholder">Enter Second Name</span>
        </label>
        <br/>
        <br/>
        <label class="custom-field one" id="fathersNameField">
            <input type="email" placeholder=" " onChange={e => setFathersName(e.target.value)}/>
            <span class="placeholder">Enter Fathers Name</span>
        </label>
        <br/>
        <br/>
        <label class="custom-field one" id="mailField">
            <input type="email" placeholder=" " onChange={e => setEmail(e.target.value)}/>
            <span class="placeholder">Enter Email</span>
        </label>
        <br/>
        <br/>
        <label class="custom-field three" id="passwordField">
            <input type="password" placeholder="&nbsp;" onChange={e => setPassword(e.target.value)}/>
            <span class="placeholder">Enter Password</span>
            <span class="border"></span>
        </label>
        <br/>
        <br/>
        <label class="custom-field three" id="repeatPasswordField">
            <input type="password" placeholder="&nbsp;" onChange={e => setRepeatPassword(e.target.value)}/>
            <span class="placeholder">Repeat Password</span>
            <span class="border"></span>
        </label>
        <br/>
        <br/>
            <li class="content__item">
				<button class="button button--hyperion" onClick={()=>{checkAndDone(name, secondName, fathersName, email, password, repeatPassword, decider);
                                                                     }}><span><span>Done</span></span></button>
			</li>
        </center>
      </div>
    );
}

function checkAndDone(name, secondName, fathersName, email, password, repeatPassword, decider){
    let answer;
    if(name == '' || secondName == '' || email == '' || password == '' || repeatPassword == ''){
        answer = 'Одно (или несколько) из полей не заполнено';
    }
    else{
        if(password === repeatPassword){
            let data = {
                name: name,
                secondName: secondName,
                fathersName: fathersName,
                email: email,
                password: password,
                date_of_bith : "2000:05:10"
            }
            register(data, decider);
            //answer = 'Registration Complete';
            
        }
        else{
            alert('пароли не совпадают');
        }
        //alert('Все поля заполнены');
    }

}

export{Register}