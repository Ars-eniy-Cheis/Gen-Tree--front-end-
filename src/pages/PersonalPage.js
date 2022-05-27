import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header, token} from './MainPage'
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

const engine = createEngine();
const model = new DiagramModel();
let nameNode = 'You';
function PersonalPage(props){
  console.log(token);
  personalData(token);
    return (
        <div>
          <Header/>
          <h1>Welcome!</h1>
        </div>
    );
}

export {PersonalPage}