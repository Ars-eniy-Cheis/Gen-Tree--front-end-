import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header, token, tokenIsEmpty} from './MainPage'
import { ModalWindow } from '../Components/ModalWindows/ModalWindow';
import {personalData} from '../Model/Model'

import createEngine, {  
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';


import './Styles/Diagram.css';

let personData;

const engine = createEngine();
const model = new DiagramModel();
let nameNode = 'You';

function PersonalPage(props){
  let setPersonalData = (data) => {
    personData = data;
  }

  const navigate = useNavigate();

  console.log('token: ', token);
  if(tokenIsEmpty()){
    navigate("/Login");
  }

  personalData(token, setPersonalData);
  
  console.log('person Data:', personData);
    return (
        <div>
          <Header/>
          <h1>Welcome!</h1>
        </div>
    );
}

export {PersonalPage}