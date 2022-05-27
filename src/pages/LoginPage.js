import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header, setToken} from './MainPage'
import {ping, login} from '../Model/Model'

import './Styles/MainStyle.css';
import './Styles/LoginStyle.css';
import './Styles/Buttons.css';

function Login(props) {
  let decider = (answer) => {
    if(answer == 'Wrong mail or password'){
        alert(answer);
    }
    else{
      setToken(answer);
      navigate("/PersonalPage");
    }
  };
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    return (
      <div>
        <Header/>
        <center class="customContainer">
            <label class="custom-field one" id="mailField">
                <input type="email" placeholder=" " onChange={e => setMail(e.target.value)}/>
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
            <li class="content__item">
				<button class="button button--anthe" onClick={()=>{parseAndSendInput(mail, password, decider);}}><span>Login</span></button>
			</li>
            <br/>
            <br/>
            <li class="content__item">
				<button class="button button--mimas" onClick={()=>{navigate("/Register");}}><span>Register</span></button>
			</li>
        </center>
      </div>
    );
}

function parseAndSendInput(email, password, decider){
  let data = {
    email: email,
    password: password,
  }
  login(data, decider);
}

export{Login}