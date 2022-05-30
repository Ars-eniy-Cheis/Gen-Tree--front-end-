import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header, token, tokenIsEmpty} from './MainPage';
import { ModalWindow } from '../Components/ModalWindows/ModalWindow';
import Table from '../Components/Table/Table';
import {personalData} from '../Model/Model';
import {CreateNode, addParent} from '../Model/Tree';

import createEngine, {  
  DefaultNodeModel,
  DiagramModel 
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget
} from '@projectstorm/react-canvas-core';


import './Styles/Diagram.css';

let datas = [
]

const engine = createEngine();
const model = new DiagramModel();

function PersonalPage(props){

  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('');
  const [personData, setPersonData] = useState([
    {
    firstName: "",
    secondName: "",
    fatherName: "",
    role: "",
    }
  ]);


  const navigate = useNavigate();

  if(tokenIsEmpty()){
    navigate("/Login");
  }

  personalData(token, setPersonData);


    return (
        <div>
          <Header/>
          <Table data={personData}/>
        </div>
    );
}

/*
function buildTree(personData, setModalActive){
  let personDataArray = personData.split("\n");
  let personDataDoubleArray = []
  let rel;
  let pos = 1;
  for(let i = 0; i < personDataArray.length - 1; i++){
    if(i % 2 == 0){
      rel = 'Father';
    }
    else{
      rel = 'Mother';
    }
    personDataDoubleArray.push(personDataArray[i].split(','));
    addParent(personDataDoubleArray[i][2] + " " + personDataDoubleArray[i][3] + " " + personDataDoubleArray[i][4], setModalActive, pos, rel, model, engine);
    pos = -pos;
  }
  
  console.log('Build tree:', personDataDoubleArray);
}
*/
export {PersonalPage}