import React from 'react';
import { useNavigate } from "react-router-dom";

import './Styles/MainStyle.css';
import './Styles/Buttons.css';


function MainPage(props) {
    return (
      <div>
        <Header/>
        <MainPart/>
      </div>
    );
}

function Header(props) {
    const navigate = useNavigate();
    return (
        <header>
            <input class="header-img" id="tree" type="image" src={require("./Images/tree.png")} alt="Tree" onClick={()=>{navigate("/");}}/>
            <h2 class="noHighlight">Build your own&nbsp;</h2>
            <h2 class="highlight">Genealogical Tree</h2>
            <input class="startButtonTop" type="button" value = "Login" id = "Login" onClick={()=>{navigate("/Login");}}/>
        </header>
    );
}

function MainPart(props){
    const navigate = useNavigate();
    return (
        <div id="mainContent" class="mainContent">
        <br/>
        <img class ="backGround" id="background" src={require("./Images/background.png")} alt="StartBG"/>
        <center>
            <li class="content__item">
				<button class="button button--pandora" onClick={()=>{navigate("/NoRegistration");}}><span>Quick Start</span></button>
			</li>
            
        </center>
    </div>
    );
}

export {MainPage, Header}