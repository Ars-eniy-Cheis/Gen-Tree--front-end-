import React from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from './MainPage'

import './Styles/MainStyle.css';
import './Styles/LoginStyle.css';
import './Styles/Buttons.css';

function Login(props) {
    return (
      <div>
        <Header/>
        <center class="customContainer">
            <label class="custom-field one">
                <input type="email" placeholder=" "/>
                <span class="placeholder">Enter Email</span>
            </label>
            <br/>
            <br/>
            <label class="custom-field three">
                <input type="password" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Password</span>
                <span class="border"></span>
            </label>
            <br/>
            <br/>
            <li class="content__item">
				<button class="button button--anthe"><span>Login</span></button>
			</li>
        </center>
      </div>
    );
}



export{Login}