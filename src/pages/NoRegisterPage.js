import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Header} from './MainPage'
import { ModalWindow } from '../Components/ModalWindows/ModalWindow';

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
let delimiter = 0.5;

function NoRegister(props){
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div>
      <Header/>
      <CreateNode name={'You'} setModalActive={setModalActive} width={955} height={200}/>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <button onClick={()=>{
          let name = value;
          setModalActive(false);
          addParent(name, setModalActive, -1, 'Mother');
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
          addParent(name, setModalActive, 1, 'Father');
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

function addParent(name, setModalActive, pos, title){
  let child = getNodeByName(nameNode);
  //console.log('child: ', child.position.x);
  let yPos = (child.position.y + pos*50);
  let xPos = child.position.x - 200;
  delimiter -= 0.001;
  createNodeElement(name, xPos, yPos, setModalActive);
  let parent = getNodeByName(name);
  let parentPort = parent.addOutPort('Child');
  console.log(nameNode);
  //child.setParent(mother);
  let childPort = child.addInPort(title);
  let link = parentPort.link(childPort);
  console.log(link);
  link.setColor('black');
}


function getNodeByName(name){
  let nodes = model.getNodes();
  for(let i = 0; i < nodes.length; i++){
    if(nodes[i].options.name === name){
      return nodes[i];
    }
  }
  return '';
}

function CreateNode(props){
  createNodeElement(props.name, props.width, props.height, props.setModalActive);
  return (
    <div>
      <CanvasWidget className="srd-demo-canvas" engine={engine} />
    </div>
  );
}

function createNodeElement(name, width, height, setModalActive){
  let node = new DefaultNodeModel({
    name: name,
    color: 'rgb(0,192,255)'
  });
  node.setPosition(width, height);
  node.registerListener({
    selectionChanged: function(e){
      nameNode = e.entity.options.name;
      setModalActive(true);
    },
});

  model.addNode(node);
  engine.setModel(model);
}

export {NoRegister}

/*
  Обращение к имени его смена
  let array = props.model.getNodes();
  for(let i = 0; i<array.length; i++){
    array[i].options.name = "Arseniy"
  }
*/