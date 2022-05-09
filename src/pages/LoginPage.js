import React from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from './MainPage'
import {ping} from '../Model/Model'

import './Styles/MainStyle.css';
import './Styles/LoginStyle.css';
import './Styles/Buttons.css';

function Login(props) {
    const navigate = useNavigate();
    return (
      <div>
        <Header/>
        <center class="customContainer">
            <label class="custom-field one" id="mailField">
                <input type="email" placeholder=" "/>
                <span class="placeholder">Enter Email</span>
            </label>
            <br/>
            <br/>
            <label class="custom-field three" id="passwordField">
                <input type="password" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Password</span>
                <span class="border"></span>
            </label>
            <br/>
            <br/>
            <li class="content__item">
				<button class="button button--anthe" onClick={()=>{ping();}}><span>Login</span></button>
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



export{Login}