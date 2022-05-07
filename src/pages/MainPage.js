import React from 'react';
import { useNavigate } from "react-router-dom";
import './Styles/MainStyle.css';


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
            <input class="startButtonTop" type="button" value = "Login" id = "Login" onClick={()=>{navigate("/");}}/>
        </header>
    );
}

function MainPart(props){
    const navigate = useNavigate();
    return (
        <div id="mainContent" class="mainContent">
        <br/>
        <img class ="backGround" id="background" src={require("./Images/background.png")} alt="StartBG"/>
        <center><input class="startButton" type="button" value = "Start With No Registration" id = "NoRegister" onClick={()=>{navigate("/NoRegistration");}}/></center>
    </div>
    );
}

export {MainPage, Header}