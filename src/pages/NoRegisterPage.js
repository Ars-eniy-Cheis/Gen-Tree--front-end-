import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from './MainPage'
import { ModalWindow } from '../Components/ModalWindows/ModalWindow';
import {CreateNode, addParent} from '../Model/Tree'

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


function NoRegister(props){
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div>
      <Header/>
      <CreateNode name={'You'} setModalActive={setModalActive} width={955} height={200} engine={engine} model={model}/>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <button onClick={()=>{
          let name = value;
          setModalActive(false);
          addParent(name, setModalActive, -1, 'Mother', model, engine);
          }}>
         Add Mother
        </button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <button onClick={()=>{
          let name = value;
          setModalActive(false);
          addParent(name, setModalActive, 1, 'Father', model, engine);
          }}>
         Add Father
        </button>
        <br/>
        <br/>
        <input onChange={e => setValue(e.target.value)}/>
      </ModalWindow>
    </div>
  );
}



export {NoRegister}

/*
  Обращение к имени его смена
  let array = props.model.getNodes();
  for(let i = 0; i<array.length; i++){
    array[i].options.name = "Arseniy"
  }
*/